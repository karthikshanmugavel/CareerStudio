import React from "react";

const FlashcardCard = ({ question, answer, flipped, onFlip }) => {
  return (
    <div
      className="flex pt-10 relative w-full h-100 justify-center cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={onFlip} // Single click flip
    >
      <div
        className="w-full max-w-2xl h-full transition-transform duration-700 ease-in-out relative"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-xl shadow-2xl flex flex-col items-center justify-center px-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="text-xl text-center">{question}</p>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-orange-300 to-orange-600 text-white rounded-xl shadow-2xl flex flex-col items-center justify-center px-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-xl text-center">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FlashcardCard;
