import React from "react";

const Sidebars = ({ sections, onSelectTopic }) => {
  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <div key={section.path}>
          <h3 className="font-semibold text-gray-800">{section.section}</h3>
          <ul className="pl-2 text-sm text-blue-700 space-y-1">
            {section.items.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => onSelectTopic(item)}
                  className="hover:underline"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebars;
