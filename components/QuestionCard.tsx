import React from "react";
import { View, StyleSheet } from "react-native";
import AnswerOption from "./AnswerOption";
import Card from "./Card";

type QuestionCardProps = {
  question: {
    title: string;
    options: string[];
    correctAnswer: string;
  };
};

const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
          <AnswerOption key={option} answerOption={option} />
        ))}
      </View>
    </Card>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    paddingVertical: 40,
    gap: 20,

    //shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  question: {
    fontSize: 24,
    fontWeight: "500",
  },
});
