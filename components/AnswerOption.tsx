import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useQuizContext } from "../providers/QuizProvider";

type AnswerOptionProps = {
  answerOption: string;
};

const AnswerOption = ({ answerOption }: AnswerOptionProps) => {
  const { selectedOption, setSelectedOption } = useQuizContext();

  const isSelected = selectedOption === answerOption;
  return (
    <Pressable
      style={[
        styles.container,
        isSelected && {
          backgroundColor: "#E1F396",
          borderColor: "#E1F396",
        },
      ]}
      onPress={() => setSelectedOption(answerOption)}
    >
      <Text>{answerOption}</Text>
    </Pressable>
  );
};

export default AnswerOption;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20,
    borderColor: "lightgray",
    borderRadius: 100,
  },
});
