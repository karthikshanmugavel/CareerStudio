// src/App.jsx
import { Routes, Route } from "react-router-dom";
import routes from "./routes/routesConfig";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  // Flatten all routes including children for routing
  const flattenedRoutes = routes.flatMap((route) =>
    route.children
      ? route.children.map((child) => ({
          path: child.path,
          component: child.component,
        }))
      : [route]
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Sidebar + Main Content */}
      <div className="flex flex-1 mt-[72px]">
        <Sidebar />

        <div className="flex-1  overflow-y-auto p-6">
          <Routes>
            {flattenedRoutes
              .filter((route) => route.component)
              .map((route, idx) => (
                <Route
                  key={idx}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
          </Routes>
        </div>
      </div>

      {/* Footer at bottom */}
      <div className="w-full mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default App;
