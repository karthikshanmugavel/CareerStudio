import React from 'react';

const ProjectDetailsCard = ({ title, description, softwareUsed }) => {
  return (
    <div className="bg-gradient-to-r from-white to-blue-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 rounded-3xl p-6 mb-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-indigo-800 mb-3">{title}</h2>
      <p className="text-gray-700 mb-4 text-justify">{description}</p>
      
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">Software Used:</h3>
        <div className="flex flex-wrap gap-2">
          {softwareUsed.map((software, index) => (
            <span 
              key={index} 
              className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm shadow-sm"
            >
              {software}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;