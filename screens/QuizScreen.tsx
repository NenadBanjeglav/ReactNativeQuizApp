import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { useQuizContext } from "../providers/QuizProvider";

const QuizScreen = () => {
  const { question, questionIndex, onNext, score, totalQuestions } =
    useQuizContext();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Question {questionIndex + 1}/{totalQuestions}
          </Text>
        </View>

        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>20s</Text>
          </View>
        ) : (
          <Card title="Well Done">
            <Text>
              Correct answers: {score}/{totalQuestions}
            </Text>
            <Text>Best score: 10</Text>
          </Card>
        )}

        <CustomButton
          title="Next"
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
          onPress={onNext}
          onLongPress={() => console.log("LONG PRESS")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FDFEF4",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    marginTop: 10,
    color: "#005055",
  },
  time: {
    textAlign: "center",
    marginTop: 15,
    color: "#005055",
    fontWeight: "bold",
  },
});

export default QuizScreen;
