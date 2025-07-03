import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes/routesConfig";

const Sidebar = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => {
      const isOpen = prev[label];
      return isOpen ? {} : { [label]: true }; // Only one open at a time
    });
  };

  const mainRoutes = routes.filter(
    (r) => r.section !== "bottom" && r.section !== "topnav"
  );
  const bottomRoutes = routes.filter((r) => r.section === "bottom");

  return (
    <>
      {/* Toggle Button (when sidebar is hidden) */}
      {!isSidebarVisible && (
        <button
          onClick={() => setSidebarVisible(true)}
          className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-blue-900 text-white px-2 py-1 rounded-r hover:bg-blue-700 z-50"
        >
          →
        </button>
      )}

      {/* Sidebar Panel */}
      {isSidebarVisible && (
        <div className="w-64 bg-white mt-4 shadow-xl shadow-gray-400 p-4 flex flex-col justify-between rounded-tr-2xl rounded-br-2xl relative z-40">
          {/* Close Icon */}
          <button
            onClick={() => setSidebarVisible(false)}
            className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black"
            title="Close Sidebar"
          >
            ×
          </button>

          <ul className="space-y-2 mt-6">
            {mainRoutes.map((route, idx) => (
              <li key={idx}>
                {route.children ? (
                  <>
                    <div
                      onClick={() => toggleDropdown(route.label)}
                      className="cursor-pointer px-3 py-2 rounded text-black hover:bg-blue-900 hover:text-white flex justify-between items-center"
                    >
                      <span>{route.label}</span>
                      <span className="text-lg">
                        {openDropdowns[route.label] ? "▲" : "▼"}
                      </span>
                    </div>
                    {openDropdowns[route.label] && (
                      <ul className="pl-6 mt-1 space-y-1">
                        {route.children.map((child, cIdx) => (
                          <li key={cIdx}>
                            <NavLink
                              to={child.path}
                              className="block px-3 py-1 rounded hover:bg-blue-900 hover:text-white text-sm text-black"
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={route.path}
                    className="block px-3 py-2 rounded hover:bg-blue-900 hover:text-white text-black"
                  >
                    {route.label}
                  </NavLink>
                )}

                {/* Custom dividers */}
                {route.label === "My Career Studio" && (
                  <div className="mt-1 mb-1 ml-3 text-gray-400">
                    ------------------------
                  </div>
                )}
                {route.label === "Jobs" && (
                  <div className="mt-1 mb-4 ml-3 text-gray-400">
                    ------------------------
                  </div>
                )}
                {route.label === "Innovations" && <div className="mt-6" />}
              </li>
            ))}
          </ul>

          {/* Bottom Section */}
          <ul className="space-y-2 mt-4 border-t pt-4">
            {bottomRoutes.map((route, idx) => (
              <li key={idx}>
                <NavLink
                  to={route.path}
                  className="block px-3 py-2 rounded hover:bg-blue-900 hover:text-white text-black"
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
