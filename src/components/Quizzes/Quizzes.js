import React from "react";
import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";

const Quizzes = () => {
  const { data } = useLoaderData();
  return (
    <div className="mx-7">
      <div className="grid grid-cols-4 gap-3 mb-7">
        {data.map((quiz) => (
          <Card key={quiz.id} quiz={quiz}></Card>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
