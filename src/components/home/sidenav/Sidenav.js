import React from "react";
import SidenavTitle from "./SidenavTitle";

const Sidenav = () => {
  return (
    <div className="px-6 py-6 bg-[#0f172a] h-full text-zinc-300 rounded-2xl shadow-lg">

      {/* MENU */}
      <SidenavTitle title="M" subTitle="enu" />
      <ul className="space-y-2 mb-6">
        <li className="sidenavLi">About Me</li>
        <li className="sidenavLi">Portfolio</li>
        <li className="sidenavLi">Contact</li>
      </ul>

      {/* PROJECTS */}
      <SidenavTitle title="P" subTitle="rojects" />
      <ul className="space-y-2 mb-6">
        <li className="sidenavLi">Cloud-Native Microservices</li>
        <li className="sidenavLi">Spring Boot Applications</li>
        <li className="sidenavLi">Kubernetes Deployments</li>
        <li className="sidenavLi">Distributed Systems</li>
        <li className="sidenavLi">API Development</li>
        <li className="sidenavLi">Backend Architecture</li>
      </ul>

      {/* SKILLS */}
      <SidenavTitle title="S" subTitle="kills" />
      <ul className="space-y-2 mb-6">
        <li className="sidenavLi">Java 17 & Core Java</li>
        <li className="sidenavLi">Spring Boot & Hibernate</li>
        <li className="sidenavLi">Microservices Architecture</li>
        <li className="sidenavLi">Docker & Kubernetes</li>
        <li className="sidenavLi">AWS & Azure</li>
        <li className="sidenavLi">SQL & PL/SQL</li>
      </ul>

      {/* CONTACT */}
      <SidenavTitle title="C" subTitle="ontact" />
      <ul className="space-y-2">
        <li className="sidenavLi">📍 Canada</li>
        <li className="sidenavLi">📞 +1 (647) 926-2846</li>
        <li className="sidenavLi">✉ naveen.gayar@wipro.com</li>
      </ul>
    </div>
  );
};

export default Sidenav;