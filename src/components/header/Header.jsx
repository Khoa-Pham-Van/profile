import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";
import { introdata } from "../../content_option";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>{introdata.title}</h5>
        <h1>
          <Typewriter
            options={{
              strings: [introdata.animated.first],
              autoStart: true,
              loop: true,
              deleteSpeed: 10
            }}
          />
        </h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
