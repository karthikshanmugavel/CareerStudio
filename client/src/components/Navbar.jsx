import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes/routesConfig";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const topNavRoutes = routes.filter((r) => r.section === "topnav");

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md px-6 py-4 w-full fixed top-0 z-50 flex items-center justify-between">
      {/* Brand */}
      <h1 className="text-2xl font-bold text-violet-800 underline underline-offset-4 decoration-violet-700">
        Career Studio
      </h1>

      {/* Center nav */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10">
        {topNavRoutes.map((route, idx) =>
          route.dropdown ? (
            <div
              key={idx}
              className="relative"
              ref={dropdownRef}
              onClick={() =>
                setOpenDropdown((prev) =>
                  prev === route.label ? null : route.label
                )
              }
            >
              <span className="cursor-pointer text-black hover:text-blue-700 text-lg font-medium">
                {route.label} ▼
              </span>
              {openDropdown === route.label && (
                <div className="absolute top-full left-0 mt-2 w-55 bg-white shadow-lg border rounded-md z-50">
                  {route.children.map((child, cIdx) => (
                    <NavLink
                      key={cIdx}
                      to={child.path}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-100 text-sm"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink
              key={idx}
              to={route.path}
              className={({ isActive }) =>
                `text-black hover:text-blue-700 text-lg font-medium ${
                  isActive ? "underline text-blue-700" : ""
                }`
              }
            >
              {route.label}
            </NavLink>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
