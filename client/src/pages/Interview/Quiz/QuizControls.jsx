import React from "react";

const QuizControls = ({
  searchTerm,
  level,
  questionCount,
  setSearchTerm,
  setLevel,
  setQuestionCount,
  handleSearch,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl mb-10">
      {/* Search input with icon */}
      <div className="relative flex-grow w-full max-w-md">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 30 30"
          >
            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search topic..."
          className="w-full h-[46px] pl-10 pr-28 rounded-full border border-gray-400 shadow-md text-sm text-gray-700 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          disabled={!searchTerm || !level || !questionCount}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 h-9 w-24 rounded-full text-sm text-white transition ${
            !searchTerm || !level || !questionCount
              ? "bg-primary cursor-not-allowed"
              : "bg-primary hover:bg-primary-dull cursor-pointer"
          }`}
        >
          Search
        </button>
      </div>

      {/* Level dropdown */}
      <select
        className="h-[46px] w-48 border border-gray-300 rounded-full px-4 text-sm text-gray-700 outline-none bg-white shadow-md"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option value="">Select Level</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>

      {/* Question count dropdown */}
      <select
        className="h-[46px] w-48 border border-gray-300 rounded-full px-4 text-sm text-gray-700 outline-none bg-white shadow-md"
        value={questionCount}
        onChange={(e) => setQuestionCount(e.target.value)}
      >
        <option value="">No. of Questions</option>
        {[5, 10, 15, 20].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuizControls;
