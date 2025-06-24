import React from "react";

const QuizQuestion = ({ questionData, questionNumber, selected, onSelect }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-2xl">
      <h2 className="text-lg font-semibold mb-4">
        Q{questionNumber}. {questionData.question}
      </h2>
      <div className="w-full space-y-2 mb-4">
        {questionData.options.map((option, i) => (
          <label key={i} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selected === option}
              onChange={() => onSelect(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
