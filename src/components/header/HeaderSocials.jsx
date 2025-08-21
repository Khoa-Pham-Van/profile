import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="" target="_blank">
        <FaInstagram />
      </a>
      <a href="" target="_blank">
        <FaGithub />
      </a>
      <a
        href=""
        target="_blank"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
