import React, { useState } from "react";
import ProjectDetailsCard from "./ProjectDetailsCard";
import projectsData from "./projects.json";

const ProjectsPage = () => {
  const [selectedBranch, setSelectedBranch] = useState("Computer Science");
  const [selectedProject, setSelectedProject] = useState(null);

  const branches = Object.keys(projectsData);

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
    setSelectedProject(null);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    alert(`You selected: ${project.title}`);
  };

  return (
    <div className="min-h-[calc(100vh-100px)] overflow-y-auto p-6 bg-white scrollbar-hide">
      <h1 className="text-3xl font-bold mb-4 text-center text-indigo-900">
        Engineering Project Explorer
      </h1>

      <div className="mb-6 flex justify-center">
        <select
          value={selectedBranch}
          onChange={handleBranchChange}
          className="p-3 border rounded-xl text-indigo-700 shadow"
        >
          {branches.map((branch, idx) => (
            <option key={idx} value={branch}>
              {branch}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData[selectedBranch].map((project, index) => (
          <ProjectDetailsCard
            key={index}
            title={project.title}
            description={project.description}
            softwareUsed={project.softwareUsed}
            onSelect={() => handleProjectSelect(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <div className="mt-6 p-4 bg-green-100 rounded-lg text-green-800 shadow">
          You selected: <strong>{selectedProject.title}</strong>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
