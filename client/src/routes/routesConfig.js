// src/routes/routesConfig.js

import Dashboard from "../pages/Dashboard";
import MyCareerStudio from "../pages/MyCareerStudio";
import Settings from "../pages/Settings";
import AboutUs from "../pages/AboutUs";
import Help from "../pages/Help";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import SelfPacedCourses from "../pages/learn/SelfPacedCourses";
import Courses from "../pages/learn/Courses/Courses";
import Workshops from "../pages/learn/Workshops";
import FlashCard from "../pages/Interview/FlashCard/FlashCard";
import Features from "../pages/Features";
import Services from "../pages/Services";
import Pricing from "../pages/Pricing";
import HigherStudies from "../pages/Certifications/HigherStudies";
import IndustryCertifications from "../pages/Certifications/IndustryCertifications";
import MicroCertifications from "../pages/Certifications/MicroCertifications";
import MiniProject from "../pages/Projects/MiniProject/MiniProject";
import MajorProject from "../pages/Projects/MajorProject";
import EmployerProblems from "../pages/Projects/EmployerProblems";
import Quiz from "../pages/Interview/Quiz/Quiz";
import MockInterview from "../pages/Interview/MockInterview";
import PrepareInterview from "../pages/Interview/PrepareInterview/PrepareInterview";
import FullTime from "../pages/Jobs/FullTime";
import PartTime from "../pages/Jobs/PartTime";
import Freelance from "../pages/Jobs/Freelance";

const routes = [
  // Top navbar only
  {
    path: "/",
    label: "Home",
    component: HomePage,
    section: "topnav",
  },
  {
    path: "/features",
    label: "Features",
    component: Features,
    section: "topnav",
  },
  {
    path: "/services",
    label: "Services",
    component: Services,
    section: "topnav",
  },
  {
    path: "/pricing",
    label: "Pricing",
    component: Pricing,
    section: "topnav",
  },
  {
    path: "/login",
    label: "Login",
    component: Login,
    section: "topnav",
  },

  // Sidebar - main
  {
    path: "/dashboard",
    label: "Dashboard",
    component: Dashboard,
    section: "sidebar",
  },
  {
    path: "/my-career-studio",
    label: "My Career Studio",
    component: MyCareerStudio,
    section: "sidebar",
  },
  {
    label: "Learn",
    section: "sidebar",
    children: [
      { path: "/learn/courses", label: "Courses", component: Courses },
      {
        path: "/learn/self-paced",
        label: "Self-Paced Courses",
        component: SelfPacedCourses,
      }, // fixed typo
      { path: "/learn/workshops", label: "Workshops", component: Workshops },
    ],
  },
  {
    label: "Certifications",
    section: "sidebar",
    children: [
      {
        path: "/certifications/micro-certificate",
        label: "Micro Certifications",
        component: MicroCertifications,
      },
      {
        path: "/certifications/higher-studies",
        label: "Higher Studies",
        component: HigherStudies,
      },
      {
        path: "/certifications/industry-certifications",
        label: "Industry Certifications",
        component: IndustryCertifications,
      },
    ],
  },
  {
    label: "Projects",
    section: "sidebar",
    children: [
      {
        path: "/projects/mini-project",
        label: "Mini Project",
        component: MiniProject,
      },
      {
        path: "/projects/major-project",
        label: "Major Project",
        component: MajorProject,
      },
      {
        path: "/projects/employer-problem",
        label: "Employer Problems",
        component: EmployerProblems,
      },
      
    ],
  },
  {
    label: "Interview",
    section: "sidebar",
    children: [
      {
        path: "/interview/prepare-interview",
        label: "Prepare Interview",
        component: PrepareInterview,
      },
      {
        path: "/interview/mock-interview",
        label: "Mock Interview",
        component: MockInterview,
      },
      {
        path: "/interview/flashcards",
        label: "FlashCards",
        component: FlashCard,
      },
      { path: "/interview/quiz", label: "Quiz", component: Quiz },
    ],
  },
  {
    label: "Jobs",
    section: "sidebar",
    children: [
      { path: "/jobs/full-time", label: "Full Time", component: FullTime },
      { path: "/jobs/part-time", label: "Part Time", component: PartTime },
      { path: "/jobs/freelance", label: "Freelance", component: Freelance },
    ],
  },
  {
    label: "AI Tools",
    section: "sidebar",
    children: [
      {
        path: "/ai-tools/career-path-predictor",
        label: "Career Path Predictor",
      },
      { path: "/ai-tools/resume-builder", label: "Resume Builder" },
    ],
  },
  {
    label: "Innovations",
    section: "sidebar",
    children: [
      {
        path: "/innovations/submit-innovations",
        label: "Submit Innovations",
      },
      { path: "/innovations/global-projects", label: "Global Projects" },
    ],
  },

  // Sidebar - bottom
  {
    path: "/settings",
    label: "Settings",
    component: Settings,
    section: "bottom",
  },
  {
    path: "/about-us",
    label: "About Us",
    component: AboutUs,
    section: "bottom",
  },
  {
    path: "/help",
    label: "Help",
    component: Help,
    section: "bottom",
  },
  {
    path: "/logout",
    label: "Logout",
    component: () => null,
    section: "bottom",
  },
];

export default routes;
