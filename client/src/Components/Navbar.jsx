import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes/routesConfig";

const Navbar = () => {
  const topNavRoutes = routes.filter((r) => r.section === "topnav");

  return (
    <nav className="bg-white shadow-md px-6 py-4 w-full fixed top-0 z-50 flex items-center justify-between">
      {/* Left - Heading stays same */}
      <h1 className="text-2xl font-bold text-violet-800 underline underline-offset-4 decoration-violet-700">
        Career Studio
      </h1>

      {/* Center - Nav items centered and spaced */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10">
        {topNavRoutes.map((route, idx) => (
          <NavLink
            key={idx}
            to={route.path}
            className={({ isActive }) =>
              `text-black hover:text-blue-700 text-lg ${
                isActive ? "underline text-blue-700" : ""
              }`
            }
          >
            {route.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
