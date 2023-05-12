import React, { useRef } from "react";

const Option = ({ option, correctAnswer }) => {
  const optionState = useRef();
  const checkAns = () => {
    if (option === correctAnswer) {
      optionState.current.style.backgroundColor = "lightGreen";
    } else {
      optionState.current.style.backgroundColor = "tomato";
    }
  };
  return (
    <div
      onClick={checkAns}
      ref={optionState}
      className="bg-purple-200 text-purple-800 font-semibold hover:bg-purple-400
        rounded-lg px-2 py-4 cursor-pointer"
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
