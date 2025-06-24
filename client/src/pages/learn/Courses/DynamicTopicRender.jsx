import React from "react";
import ReactPlayer from "react-player";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DynamicTopicRenderer = ({ content }) => {
  if (!content || content.length === 0) {
    return <p className="text-red-500">⚠️ No content to display</p>;
  }

  return (
    <div className="space-y-6 text-gray-800">
      {content.map((block, idx) => {
        switch (block.type) {
          case "heading":
            const HeadingTag = `h${block.level}`;
            return (
              <HeadingTag key={idx} className="font-bold text-xl text-blue-700">
                {block.text}
              </HeadingTag>
            );

          case "paragraph":
            return (
              <p key={idx} className="text-base">
                {block.text}
              </p>
            );

          case "quote":
            return (
              <blockquote
                key={idx}
                className="border-l-4 border-blue-400 pl-4 italic text-gray-600"
              >
                {block.text}
              </blockquote>
            );

          case "divider":
            return <hr key={idx} className="border-t border-gray-300" />;

          case "code":
            return (
              <SyntaxHighlighter
                key={idx}
                language={block.language}
                style={oneDark}
                className="rounded-md"
              >
                {block.content}
              </SyntaxHighlighter>
            );

          case "list":
            return (
              <ul key={idx} className="list-disc pl-6">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );

          case "table":
            return (
              <table
                key={idx}
                className="table-auto border border-gray-400 w-full"
              >
                <thead>
                  <tr>
                    {block.headers.map((header, i) => (
                      <th key={i} className="border px-4 py-2 bg-gray-100">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} className="border px-4 py-2">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            );

          case "image":
            return (
              <img
                key={idx}
                src={block.src}
                alt={block.alt}
                className="max-w-full h-auto rounded shadow"
              />
            );

          case "link":
            return (
              <a
                key={idx}
                href={block.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {block.text}
              </a>
            );

          case "video":
            return (
              <div key={idx} className="aspect-video">
                <ReactPlayer
                  url={block.src}
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
            );

          case "spacer":
            return <div key={idx} style={{ height: block.size }} />;

          default:
            return null;
        }
      })}
    </div>
  );
};

export default DynamicTopicRenderer;
