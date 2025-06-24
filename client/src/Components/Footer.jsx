import React from "react";


const Footer = () => {
  return (
    <footer className="bg-white text-center py-4 mt-4 text-sm text-gray-600 drop-shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
      © {new Date().getFullYear()} Career Studio. All rights reserved.
    </footer>
  );
};

export default Footer;
