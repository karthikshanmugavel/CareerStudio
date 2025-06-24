import React, { useState } from "react";
import FlashcardCard from "./FlashcardCard";

const FlashCard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [level, setLevel] = useState("");
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(false); // NEW

  const handleSearch = async () => {
    if (!searchTerm || !level) {
      console.warn("Search term or level missing");
      return;
    }

    setLoading(true); // start loading

    try {
      const response = await fetch(
        `https://ashwin07.pythonanywhere.com/api/questions?topic=${searchTerm}&level=${level}`
      );

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      console.log("Fetched questions:", data);

      setQuestions(data);
      setIndex(0);
      setFlipped(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setQuestions([]);
    } finally {
      setLoading(false); // stop loading
    }
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % questions.length);
    setFlipped(false);
  };

  return (
    <div className="text-center mt-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-2">
        Explore the Ultimate <br />
        Collection of{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400">
          FlashCards..
        </span>
      </h1>

      {/* Search bar & dropdown */}
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 w-full max-w-3xl">
        <div className="flex items-center border pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-full overflow-hidden flex-grow shadow-md w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#6B7280"
            viewBox="0 0 30 30"
          >
            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
          </svg>
          <input
            type="text"
            placeholder="Search topic..."
            className="w-full h-full outline-none text-sm text-gray-700"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            disabled={!searchTerm || !level || loading}
            className={`w-28 h-9 rounded-full text-sm text-white mr-[6px] transition ${
              !searchTerm || !level || loading
                ? "bg-primary-dull cursor-not-allowed"
                : "bg-primary hover:bg-primary-dull cursor-pointer"
            }`}
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        <select
          className="h-[46px] w-48 border border-gray-300 rounded-full px-4 text-sm text-gray-700 outline-none bg-white shadow-md"
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="begineers">Beginners</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      {/* Flashcard */}
      <div className="mt-8 w-full flex justify-center min-h-[200px]">
        {loading ? (
          <p className="text-lg text-primary font-medium">Loading...</p>
        ) : questions.length > 0 ? (
          <FlashcardCard
            question={questions[index]?.question}
            answer={questions[index]?.answer}
            flipped={flipped}
            onFlip={() => setFlipped(!flipped)}
          />
        ) : (
          <p className="text-gray-500 mt-6">
            {searchTerm && level
              ? "No results found. Try a different topic or level."
              : "Search to see flashcards..."}
          </p>
        )}
      </div>

      {/* Next Button */}
      {questions.length > 1 && !loading && (
        <button
          className="mt-6 mb-10 bg-primary-dull text-white px-6 py-2 rounded-full 
          hover:bg-primary  cursor-pointer"
          onClick={handleNext}
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default FlashCard;
