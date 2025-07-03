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
import ProjectPage from "../pages/Projects/MiniProjects/ProjectPage";
import MockInterview from "../pages/Services/MockInterview";

const routes = [
  // Top navbar only
  {
    path: "/",
    label: "Home",
    component: HomePage,
    section: "topnav",
  },
  {
    path: "/about-us",
    label: "About",
    component: AboutUs,
    section: "topnav",
  },
  {
    label: "Services",
    section: "topnav",
    dropdown: true,
    children: [
      {
        path: "/ai-tools/resume-builder",
        label: "Resume Builder",
      },
      {
        path: "/ai-tools/jd-analyzer",
        label: "JD Analyzer & Interview Plan",
      },
      {
        path: "/projects/mini-Intership-projects",
        label: "Mini / Internship Projects",
        component: ProjectPage,
      },
      {
        path: "/projects/major-final-projects",
        label: "Major / Final Year Projects",
      },
      {
        path: "/interview/mock-interview",
        label: "Mock Interview",
        component: MockInterview,
      },
      {
        path: "/dashboard", // Example for Employer Hub
        label: "Employer Hub",
      },
    ],
  },
  {
    path: "/login",
    label: "Login / Sign Up",
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
      },
      {
        path: "/learn/domain-based",
        label: "Domain-Based Training",
      },
    ],
  },
  {
    label: "Career AI Assistant",
    section: "sidebar",
    children: [
      { path: "/ai-tools/pathway", label: "Personalized Career Pathway" },
      { path: "/ai-tools/skill-gap", label: "Skill Gap Analysis" },
      { path: "/ai-tools/roadmap", label: "Roadmap Generator" },
    ],
  },

  {
    label: "Projects",
    section: "sidebar",
    children: [
      {
        path: "/projects/mini-Intership-project",
        label: "Mini / Internship Projects",
        component: ProjectPage,
      },
      {
        path: "/projects/mini-Intership-project",
        label: "Major / Final Year Projects",
      },
      {
        path: "/projects/submit-new-project",
        label: "Submit New Project",
      },
    ],
  },
  {
    label: "Internship Opportunities",
    section: "sidebar",
    children: [
      { path: "/internships/apply", label: "Apply for Internships" },
      { path: "/internships/ai-matched", label: "AI Matched Internships" },
      { path: "/internships/drives", label: "Upcoming Drives" },
      { path: "/internships/material", label: "Preparation Material" },
      { path: "/internships/leaderboard", label: "Internship Leaderboard" },
    ],
  },
  {
    label: "Jobs",
    section: "sidebar",
    children: [
      { path: "/jobs/full-time", label: "Search Jobs" },
      { path: "/jobs/fit-score", label: "AI Job Fit Score" },
      { path: "/jobs/apply", label: "Apply for Jobs" },
    ],
  },

  {
    label: "JD Analyzer & Interview Plan",
    section: "sidebar",
    children: [
      { path: "/jd-analyzer/analyze", label: "Paste JD & Analyze" },
      { path: "/jd-analyzer/skill-gap", label: "AI Skill Gap Report" },
      {
        path: "/jd-analyzer/learning-plan",
        label: "Personalized Learning Plan",
      },
      {
        path: "/jd-analyzer/questions",
        label: "Interview Questions Generator",
      },
    ],
  },
  {
    label: "Showcase Yourself",
    section: "sidebar",
    children: [
      { path: "/showcase/upload-video", label: "Upload 1-Min Video" },
      {
        path: "/showcase/project-explain",
        label: "Upload Project Explanation",
      },
      { path: "/showcase/featured", label: "View Featured Profiles" },
    ],
  },
  {
    label: "Challenges",
    section: "sidebar",
    children: [
      { path: "/challenges/coding", label: "Coding Challenges" },
      { path: "/challenges/design", label: "Design Challenges" },
      { path: "/challenges/rewards", label: "Win Rewards & Certificates" },
    ],
  },
  {
    label: "Community Forum",
    section: "sidebar",
    children: [
      { path: "/forum/questions", label: "Ask Questions" },
      { path: "/forum/peer-reviews", label: "Peer Reviews" },
      { path: "/forum/mentors", label: "Mentor Discussions" },
    ],
  },
  {
    label: "Certifications",
    section: "sidebar",
    children: [
      {
        path: "/certifications/verify-certificate",
        label: "Verify Certifications",
      },
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
