import React from "react";

const Bar = ({ theme, action }: { theme: string; action: any }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={action}>
      <path d="M4 12H20" stroke={theme === "light" ? "#4B5563" : "#D1D5DB"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 6H20" stroke={theme === "light" ? "#4B5563" : "#D1D5DB"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 18H20" stroke={theme === "light" ? "#4B5563" : "#D1D5DB"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Bar;
