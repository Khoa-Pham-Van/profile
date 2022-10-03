import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        JASON LIM
      </a>
      <ul className="permailinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/JasonLim1009">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/jasonlim1009/">
          <FiInstagram />
        </a>
        <a href="https://www.youtube.com/channel/UCZtC8IaD62jcvVKB0SbkRIw/featured">
          <IoLogoYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
