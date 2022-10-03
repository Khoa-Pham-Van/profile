import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.instagram.com/jasonlim1009/" target="_blank">
        <FaInstagram />
      </a>
      <a href="https://www.github.com/JasonLim1009" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.youtube.com/channel/UCZtC8IaD62jcvVKB0SbkRIw/featured"
        target="_blank"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
