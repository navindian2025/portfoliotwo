import React from "react";

const ResumeTitle = ({ icon, title }) => {
  return (
    <h1 className="flex items-center gap-3 py-4 mb-4 border-b border-zinc-700">
      
      {/* ICON */}
      <span className="text-green-400 text-2xl bg-[#1e293b] p-2 rounded-lg shadow-md">
        {icon}
      </span>

      {/* TITLE */}
      <span className="text-lg md:text-xl font-semibold text-white tracking-wide uppercase">
        {title}
      </span>

    </h1>
  );
};

export default ResumeTitle;