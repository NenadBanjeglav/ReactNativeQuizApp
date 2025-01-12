import { StatusBar } from "expo-status-bar";
import QuizScreen from "./screens/QuizScreen";
import React from "react";
import QuizProvider from "./providers/QuizProvider";

export default function App() {
  return (
    <QuizProvider>
      <QuizScreen />
      <StatusBar style="auto" />
    </QuizProvider>
  );
}
