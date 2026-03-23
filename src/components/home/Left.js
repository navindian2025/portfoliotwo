import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/Noor_Mohammad_resume.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Backend Architect", "Java Developer", "Cloud Engineer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-cardShadow z-10 overflow-hidden flex flex-col">

      {/* ================= SMALL IMAGE SECTION ================= */}
      <div className="w-full flex justify-center items-center py-6">
        <img
          className="w-28 h-28 object-cover rounded-full border-4 border-designColor shadow-greenGlow"
          src={bannerImg}
          loading="priority"
          alt="profileImage"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-col items-center gap-2 px-4 pb-6">
        <h1 className="text-textColor text-2xl font-semibold text-center">
          Naveen Kumar Gayar
        </h1>

        <p className="text-sm text-designColor tracking-wide text-center">
          {text}
          <Cursor cursorBlinking="false" cursorStyle="|" />
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-3 mt-3">
          <span className="hover:text-designColor duration-300 cursor-pointer text-lg">
            <FaGithub />
          </span>
          <span className="hover:text-designColor duration-300 cursor-pointer text-lg">
            <FaLinkedin />
          </span>
          <span className="hover:text-designColor duration-300 cursor-pointer text-lg">
            <SiYoutubemusic />
          </span>
          <span className="hover:text-designColor duration-300 cursor-pointer text-lg">
            <BsFacebook />
          </span>
          <span className="hover:text-designColor duration-300 cursor-pointer text-lg">
            <FiInstagram />
          </span>
          <span className="hover:text-designColor duration-300 cursor-pointer text-lg">
            <AiFillTwitterCircle />
          </span>
          <span className="hover:text-designColor duration-300 cursor-pointer text-lg">
            <FiMail />
          </span>
        </div>
      </div>

      {/* ================= BUTTONS ================= */}
      <div className="flex mt-auto h-12 border-t border-zinc-800">
        <a
          href={CV}
          target="_blank"
          rel="noreferrer"
          className="w-1/2 border-r border-zinc-800 text-xs uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300"
        >
          Download CV <BsCloudLightningFill />
        </a>

        <button className="w-1/2 text-xs uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
          Contact Me <FiSend />
        </button>
      </div>

    </div>
  );
};

export default Left;