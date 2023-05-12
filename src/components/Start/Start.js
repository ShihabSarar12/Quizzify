import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Start = () => {
  const quizInfo = useLoaderData();
  const { questions } = quizInfo.data;
  return (
    <div>
      {questions.map((question) => (
        <Question key={question.id} eachQuestion={question}></Question>
      ))}
    </div>
  );
};

export default Start;
