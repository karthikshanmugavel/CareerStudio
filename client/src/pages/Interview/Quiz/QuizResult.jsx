import React from "react";

const QuizResult = ({ questions, selectedAnswers }) => {
  const calculateScore = () => {
    return questions.reduce((score, q, i) => {
      return selectedAnswers[i] === q.correctAnswer ? score + 1 : score;
    }, 0);
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-2xl">
      <h2 className="text-xl font-bold mb-4">Results</h2>
      {questions.map((q, i) => {
        const isCorrect = selectedAnswers[i] === q.correctAnswer;
        return (
          <div key={i} className="mb-4">
            <p className="font-semibold">
              Q{i + 1}. {q.question}
            </p>
            <p className={`${isCorrect ? "text-green-600" : "text-red-600"}`}>
              Your Answer: {selectedAnswers[i] || "No answer"}
            </p>
            {!isCorrect && (
              <p className="text-green-500">
                Correct Answer: {q.correctAnswer}
              </p>
            )}
          </div>
        );
      })}
      <h3 className="text-lg font-bold mt-4">
        Score: {calculateScore()} / {questions.length}
      </h3>
    </div>
  );
};

export default QuizResult;
