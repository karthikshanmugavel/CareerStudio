import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Project Showcase</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
