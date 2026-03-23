import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="API Development"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="API Design"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="API Testing"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="API Deployment"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
    </div>
  );
};

export default MyServices;
