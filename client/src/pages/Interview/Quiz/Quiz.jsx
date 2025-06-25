import React, { useState } from "react";
import QuizControls from "./QuizControls";
import QuizQuestion from "./QuizQuestions";
import QuizResult from "./QuizResult";

const Quiz = () => {
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [level, setLevel] = useState("");
  const [questionCount, setQuestionCount] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm || !level || !questionCount) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://hicore.pythonanywhere.com/api/quiz?topic=${searchTerm}&level=${level}&count=${questionCount}`
      );
      if (!response.ok) throw new Error("Failed to fetch quiz data");

      const data = await response.json();
      setFilteredQuestions(data);
      setSelectedAnswers({});
      setCurrentIndex(0);
      setShowResults(false);
    } catch (error) {
      console.error("Error fetching quiz:", error);
      setFilteredQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({ ...selectedAnswers, [currentIndex]: answer });
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="text-center mt-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
        Explore the Ultimate{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400">
          Quiz..  
        </span>
      </h1>

      <QuizControls
        searchTerm={searchTerm}
        level={level}
        questionCount={questionCount}
        setSearchTerm={setSearchTerm}
        setLevel={setLevel}
        setQuestionCount={setQuestionCount}
        handleSearch={handleSearch}
      />

      {loading && (
        <div className="text-primary font-medium text-lg my-6">Loading...</div>
      )}

      {!loading && !showResults && filteredQuestions.length > 0 && (
        <>
          <QuizQuestion
            questionData={filteredQuestions[currentIndex]}
            questionNumber={currentIndex + 1}
            selected={selectedAnswers[currentIndex]}
            onSelect={handleAnswerSelect}
          />

          <div className="flex justify-between w-full max-w-2xl mt-4">
            {currentIndex > 0 && (
              <button
                className="bg-gray-400 text-white px-6 py-2 rounded-full hover:bg-gray-500 transition"
                onClick={handlePrev}
              >
                Previous
              </button>
            )}

            {currentIndex < filteredQuestions.length - 1 ? (
              <button
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </>
      )}

      {showResults && (
        <QuizResult
          questions={filteredQuestions}
          selectedAnswers={selectedAnswers}
        />
      )}
    </div>
  );
};

export default Quiz;
