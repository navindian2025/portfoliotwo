import React from "react";
import Title from "../home/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  return (
    <section
      id="resume"
      className="px-4 md:px-10 py-10 bg-[#020617] text-zinc-300"
    >
      {/* RESUME TITLE */}
      <div className="mb-8">
        <Title title="My" subTitle="Resume" />
      </div>

      {/* EDUCATION + EXPERIENCE */}
      <div className="mb-12">
        <Education />
      </div>

      {/* SKILLS TITLE */}
      <div className="mb-8">
        <Title title="My" subTitle="Skills" />
      </div>

      {/* SKILLS SECTION */}
      <div className="bg-[#0f172a] p-6 rounded-2xl shadow-lg">
        <Skills />
      </div>
    </section>
  );
};

export default Resume;