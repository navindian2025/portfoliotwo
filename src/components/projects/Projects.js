import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
  workImgOnev3,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div className="py-10">
      <Title title="Recent" subTitle="Projects" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10 mt-6">
        
        {/* LEFT SIDE */}
        <div className="px-4 space-y-6">
          <ProjectsCard
            title="Cloud-Native Microservices Platform"
            category="Java • Spring Boot • Kubernetes"
            image={workImgOnev3}
            imageClass="w-full h-72"
          />

          <ProjectsCard
            title="Enterprise API Development"
            category="REST APIs • Microservices"
            image={workImgOne}
            imageClass="w-full h-72"
          />

          <ProjectsCard
            title="Distributed Event-Driven System"
            category="Kafka • Event Streaming"
            image={workImgTwo}
            imageClass="w-full h-72"
          />

          <ProjectsCard
            title="Production Monitoring System"
            category="Grafana • Prometheus • ELK"
            image={workImgFive}
            imageClass="w-full h-72"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="px-4 space-y-6">
          <ProjectsCard
            title="Legacy System Modernization"
            category="Monolith → Microservices"
            image={workImgFour}
            imageClass="w-full h-72"
          />

          <ProjectsCard
            title="Cloud Deployment Pipeline"
            category="Docker • Kubernetes • CI/CD"
            image={workImgSix}
            imageClass="w-full h-72"
          />

          <ProjectsCard
            title="High-Performance Backend System"
            category="Java • Performance Tuning"
            image={workImgEight}
            imageClass="w-full h-72"
          />

          <ProjectsCard
            title="Database Optimization & RCA"
            category="SQL • PL/SQL • Debugging"
            image={workImgSeven}
            imageClass="w-full h-72"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;