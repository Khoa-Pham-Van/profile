import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { GrDocumentPdf } from "react-icons/gr";
import PDF from "../../assets/Job-Application-Form-Jasonlim.pdf";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>11 Months Learning</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>++ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>90+ Completed</small>
            </article>
          </div>
          <p>
            My name is Jason Lim I am 25 years old, I am a Junior
            Frontend&Mobile Developer. My personal qualities are the ability to
            achieve goals, effective time planning, perseverance, the ability to
            easily maintain business and professional relationships, and a
            desire for professional development. At this moment I do not have
            enough work experience in programming IT, but my active life
            position and purposefulness make me the kind of person you want to
            get to know and cooperate with in the future.
          </p>
          <a href={PDF} className="btn btn-primary">
            Download PDF <GrDocumentPdf />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
