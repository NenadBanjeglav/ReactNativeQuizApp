import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import questions from "../assets/questions";
import { Question } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type QuizContext = {
  question?: Question;
  questionIndex: number;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (newOption: string) => void;
  score: number;
  totalQuestions: number;
  bestScore: number;
};

export const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  onNext: () => {},
  setSelectedOption: () => {},
  score: 0,
  totalQuestions: 0,
  bestScore: 0,
});

const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setquestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const question = questions[questionIndex];
  const isFinished = questionIndex >= questions.length;

  useEffect(() => {
    loadBestScore();
  }, []);

  useEffect(() => {
    if (isFinished && score > bestScore) {
      setBestScore(score);
      saveBestScore(score);
    }
  }, [isFinished]);

  const restart = () => {
    setquestionIndex(0);
    setSelectedOption("");
    setScore(0);
  };

  const onNext = () => {
    if (isFinished) {
      restart();
      return;
    }
    if (selectedOption === question?.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setquestionIndex((prev) => prev + 1);
  };

  const saveBestScore = async (value: number) => {
    try {
      await AsyncStorage.setItem("best-score", value.toString());
    } catch (e) {
      // saving error
      console.log("Failed to save best score");
    }
  };

  const loadBestScore = async () => {
    try {
      const value = await AsyncStorage.getItem("best-score");
      if (value !== null) {
        setBestScore(Number.parseInt(value));
      }
    } catch (e) {
      // error reading value
      console.log("Failed to load best score");
    }
  };

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selectedOption,
        setSelectedOption,
        score,
        totalQuestions: questions.length,
        bestScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;

export const useQuizContext = () => useContext(QuizContext);
