import React from "react";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-8 px-6">

      {/* =============== CORE / BACKEND =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Core Skills" icon={<SiArtstation />} />

        <div className="py-4">
          {[
            { name: "Core Java / Java 17", level: "95%" },
            { name: "Spring Boot", level: "90%" },
            { name: "Microservices", level: "90%" },
            { name: "API Development", level: "92%" },
          ].map((item, i) => (
            <div key={i} className="py-3 border-b border-zinc-700">
              <p className="text-sm text-zinc-300 mb-1">{item.name}</p>
              <div className="w-full bg-zinc-700 h-1 rounded">
                <div
                  className="h-1 bg-green-400 rounded"
                  style={{ width: item.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-700"></span>
      </div>

      {/* =============== LANGUAGES =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Languages" icon={<FaFlag />} />

        <div className="py-4">
          {[
            { name: "English", level: "95%" },
            { name: "Hindi", level: "90%" },
          ].map((item, i) => (
            <div key={i} className="py-3 border-b border-zinc-700">
              <p className="text-sm text-zinc-300 mb-1">{item.name}</p>
              <div className="w-full bg-zinc-700 h-1 rounded">
                <div
                  className="h-1 bg-green-400 rounded"
                  style={{ width: item.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =============== CODING =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Technologies" icon={<BiCodeAlt />} />

        <div className="py-4">
          {[
            { name: "Docker", level: "90%" },
            { name: "Kubernetes", level: "88%" },
            { name: "AWS / Azure", level: "85%" },
            { name: "SQL / PL-SQL", level: "90%" },
          ].map((item, i) => (
            <div key={i} className="py-3 border-b border-zinc-700">
              <p className="text-sm text-zinc-300 mb-1">{item.name}</p>
              <div className="w-full bg-zinc-700 h-1 rounded">
                <div
                  className="h-1 bg-green-400 rounded"
                  style={{ width: item.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-700"></span>
      </div>

      {/* =============== KNOWLEDGE =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Expertise" icon={<IoIosPaper />} />

        <ul className="py-4 flex flex-col gap-3">
          {[
            "Production Support & SLA Management",
            "Technical Escalation Handling",
            "Root Cause Analysis (RCA)",
            "API Debugging & Performance Tuning",
            "Monitoring (Grafana, Prometheus, ELK)",
            "Distributed Systems & Event-Driven Architecture",
            "Team Mentoring & Leadership",
            "Process Governance & Documentation",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
              <span className="text-green-400 mt-1">
                <GiCheckMark />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Skills;