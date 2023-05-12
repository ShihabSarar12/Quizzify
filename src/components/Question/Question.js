import React, { createContext, useEffect, useState } from "react";
import Option from "../Option/Option";

const Question = ({ eachQuestion }) => {
  const { question, options, correctAnswer } = eachQuestion;
  return (
    <div className="bg-slate-100 px-5 py-7 my-5 mx-7 rounded-lg">
      <p className="text-purple-900 text-xl font-semibold">{question}</p>
      <dir className="grid grid-cols-2 gap-x-7 gap-y-3">
        {options.map((option, idx) => (
          <Option
            key={idx}
            option={option}
            correctAnswer={correctAnswer}
          ></Option>
        ))}
      </dir>
    </div>
  );
};

export default Question;
