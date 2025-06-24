import React, { useEffect, useState } from "react";
import contentData from "./ContentData";
import LanguageTabs from "./Languagetabs";
import Sidebars from "./Sidebars";
import DynamicTopicRenderer from "./DynamicTopicRender";

const Language = () => {
  const [languages, setLanguages] = useState([]);
  const [selectedLang, setSelectedLang] = useState("html"); // ✅ Set HTML as default
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    setLanguages(contentData);

    // If HTML exists, set the first topic in it as default
    const htmlLang = contentData.find((lang) => lang.path === "html");
    if (htmlLang && htmlLang.sub?.length > 0) {
      const firstSection = htmlLang.sub[0];
      const firstItem = firstSection.items[0];
      setSelectedTopic(firstItem);
    }
  }, []);

  const currentLanguage = languages.find((lang) => lang.path === selectedLang);

  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Adjust based on navbar height */}
      <LanguageTabs
        languages={languages}
        selectedLang={selectedLang}
        setSelectedLang={(lang) => {
          setSelectedLang(lang);
          // Set first topic of selected language
          const langObj = contentData.find((l) => l.path === lang);
          if (langObj?.sub?.length > 0) {
            const firstTopic = langObj.sub[0].items[0];
            setSelectedTopic(firstTopic);
          } else {
            setSelectedTopic(null);
          }
        }}
      />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with scrollbar */}
        <aside className="w-60 overflow-y-auto bg-gray-100 border-r p-4">
          {currentLanguage && (
            <Sidebars
              sections={currentLanguage.sub}
              onSelectTopic={setSelectedTopic}
            />
          )}
        </aside>

        {/* Content area with scrollbar */}
        <main className="flex-1 overflow-y-auto p-6">
          <DynamicTopicRenderer content={selectedTopic?.content || []} />
        </main>
      </div>
    </div>
  );
};

export default Language;
