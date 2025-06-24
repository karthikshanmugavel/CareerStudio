import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LanguageTabs = ({ languages, selectedLang, setSelectedLang }) => {
  const scrollRef = useRef(null);

  const scrollTabs = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center border-b bg-white h-14">
      {/* Left Arrow */}
      <button
        onClick={() => scrollTabs("left")}
        className="absolute left-0 h-full px-2 bg-white z-10 flex items-center"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Tabs */}
      <div
        ref={scrollRef}
        className="flex-1 mx-8 overflow-x-auto no-scrollbar whitespace-nowrap flex items-center space-x-1"
      >
        {languages.map((lang) => (
          <button
            key={lang.path}
            onClick={() => setSelectedLang(lang.path)}
            className={`px-6 py-2 font-medium border-b-4 transition ${
              selectedLang === lang.path
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-700 hover:text-blue-600"
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scrollTabs("right")}
        className="absolute right-0 h-full px-2 bg-white z-10 flex items-center"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default LanguageTabs;
