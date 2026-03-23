import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6 py-8 bg-[#0f172a] rounded-2xl shadow-lg">

      {/* EXPERIENCE */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />

        <ResumeCard
          badge="2021 - Present"
          title="Technical Lead / Backend Architect"
          subTitle="Wipro Technologies, Canada"
          des="Leading production operations, SLA governance, and handling critical technical escalations for enterprise financial systems. Specialized in Java, Spring Boot, Microservices, and cloud-native development."
        />

        <ResumeCard
          badge="Key Role"
          title="Cloud-Native Engineering"
          subTitle="Microservices & Kubernetes"
          des="Designed and developed scalable microservices using Java 17, Spring Boot, Docker, and Kubernetes. Modernized legacy systems into cloud-native architectures."
        />

        <ResumeCard
          badge="Achievements"
          title="Performance & Reliability"
          subTitle="Monitoring & RCA"
          des="Improved system reliability using Prometheus, Grafana, and ELK. Reduced production issues by 30%+ through structured RCA and proactive monitoring."
        />
      </div>

      {/* CENTER LINE */}
      <div className="hidden md:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-700"></span>
      </div>

      {/* EDUCATION */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />

        <ResumeCard
          badge="Masters"
          title="Masters in Information Systems"
          subTitle="University"
          des="Focused on enterprise systems, cloud computing, and distributed architectures."
        />

        <ResumeCard
          badge="Bachelors"
          title="Bachelors in Computer Applications"
          subTitle="University"
          des="Strong foundation in programming, databases, and software engineering."
        />

        <ResumeCard
          badge="Certifications"
          title="Professional Certifications"
          subTitle="Cloud & DevOps"
          des="Certified in Java, Docker, Kubernetes, AWS & Azure. Terraform Associate (In Progress)."
        />
      </div>
    </div>
  );
};

export default Education;