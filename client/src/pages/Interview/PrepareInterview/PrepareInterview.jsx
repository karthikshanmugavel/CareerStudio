import React, { useState } from "react";
import McqQuiz from "./McqQuiz";
import FlashcardPage from "./FlashCardPage";
import CodingPractice from "./CodingPractice";

const PrepareInterview = () => {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("coding");
  const [questionCount, setQuestionCount] = useState("10");
  const [startPractice, setStartPractice] = useState(false);

  const handleStart = () => {
    if (!topic || !type || !questionCount) {
      alert("Please fill all fields");
      return;
    }
    setStartPractice(true);
  };

  const handleBack = () => {
    setStartPractice(false);
    setTopic("");
    setType("coding");
    setQuestionCount("10");
  };

  const typeOptions = ["coding", "mcq", "flashcard"];

  if (startPractice) {
    if (type === "mcq")
      return (
        <McqQuiz
          topic={topic}
          questionCount={questionCount}
          onBack={handleBack}
        />
      );
    if (type === "flashcard")
      return (
        <FlashcardPage topic={topic} level="beginner" onBack={handleBack} />
      );
    if (type === "coding")
      return (
        <CodingPractice
          topic={topic}
          questionCount={questionCount}
          onBack={handleBack}
        />
      );
  }

  return (
    <div className="min-h-[calc(100vh-130px)] flex items-center justify-center bg-white px-4 py-6">
      <div className="bg-white border border-gray-200 rounded-xl shadow-xl p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-indigo-800 mb-2">
          Interview Overview
        </h1>
        <p className="text-gray-600 mb-6">
          Choose your topic, question type, and number of questions to begin.
        </p>

        <div className="flex flex-col gap-6">
          {/* Topic Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter Topic
            </label>
            <input
              type="text"
              placeholder="e.g. Java, React, SQL..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-3 border border-indigo-300 rounded shadow-sm"
            />
          </div>

          {/* Type Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Question Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-3 border border-indigo-300 rounded shadow-sm"
            >
              {typeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Question Count */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Questions
            </label>
            <input
              type="number"
              min="1"
              placeholder="e.g. 10"
              value={questionCount}
              onChange={(e) => setQuestionCount(e.target.value)}
              className="w-full p-3 border border-indigo-300 rounded shadow-sm"
            />
          </div>

          {/* Start Button */}
          <div>
            <button
              onClick={handleStart}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-3 rounded"
            >
              Start Practice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrepareInterview;
