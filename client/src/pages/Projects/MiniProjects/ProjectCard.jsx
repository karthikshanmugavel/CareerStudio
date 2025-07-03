import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-md mx-auto my-6 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:scale-105 transform transition duration-300">
      <div className="p-6">
        <h2 className="text-xl font-bold text-blue-600 mb-2">
          {project.projectTitle}
        </h2>
        <p className="text-sm text-gray-500 mb-2">
          Branch:{" "}
          <span className="font-medium text-gray-700">{project.branch}</span>
        </p>

        <p className="text-gray-700 mb-4">{project.abstract}</p>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-2">
            Tools/Software Used:
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.toolsSoftware.map((tool, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm shadow hover:bg-green-200 transition duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm shadow hover:bg-blue-200 transition duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
