import React, { useState, useEffect } from "react";
import axios from "axios";
import FlashcardCard from "./FlashcardCard"; // Make sure this is correctly imported

const FlashcardPage = ({ topic = "react", level = "beginner", onBack }) => {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ashwin07.pythonanywhere.com/api/questions", {
        params: { topic, level },
      })
      .then((res) => {
        setCards(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to fetch flashcards");
        setLoading(false);
      });
  }, [topic, level]);

  const handleNext = () => {
    setFlipped(false);
    setIndex((prev) => Math.min(prev + 1, cards.length - 1));
  };

  const handlePrev = () => {
    setFlipped(false);
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  if (loading) return <p className="p-4">Loading flashcards...</p>;
  if (cards.length === 0) return <p className="p-4 text-red-500">No flashcards found.</p>;

  const current = cards[index];

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">Flashcards - {topic}</h2>

      <FlashcardCard
        question={current.question}
        answer={current.answer}
        flipped={flipped}
        onFlip={() => setFlipped(!flipped)}
      />

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={index === cards.length - 1}
          className="px-4 py-2 bg-indigo-500 text-white rounded"
        >
          Next
        </button>

        <button
          onClick={onBack}
          className="px-4 py-2 bg-red-400 text-white rounded"
        >
          Back
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Card {index + 1} of {cards.length}
      </p>
    </div>
  );
};

export default FlashcardPage;
