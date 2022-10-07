import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/me1.png";
import IMG2 from "../../assets/me2.png";
import IMG3 from "../../assets/me3.png";
import IMG4 from "../../assets/me4.png";
import IMG5 from "../../assets/me5.png";
import IMG6 from "../../assets/me6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Artboard-Project",
    link: "https://artboard-jasonlim.vercel.app/",
    github: "https://github.com/JasonLim1009/TinDog-project",
    demo: "https://www.youtube.com/watch?v=bxaAQZHPS54"
  },
  {
    id: 2,
    image: IMG2,
    title: "Movie-App",
    link: "https://movie-app-jasonlim.vercel.app/",
    github: "https://github.com/JasonLim1009/movie-app",
    demo: "https://www.youtube.com/watch?v=zaeJ8kZfBPA"
  },
  {
    id: 3,
    image: IMG3,
    title: "NTFs-Optimux",
    link: "https://ntfs-optimux-jasonlim.vercel.app/",
    github: "https://github.com/JasonLim1009/NTFs-Optimux",
    demo: "https://www.youtube.com/watch?v=h1YYtDRaO_8"
  },
  {
    id: 4,
    image: IMG4,
    title: "Sushi-App",
    link: "https://sushi-app-jasonlim.vercel.app/",
    github: "https://github.com/JasonLim1009/react-add-to-cart",
    demo: "https://www.youtube.com/watch?v=BMWMCKYRCl0"
  },
  {
    id: 5,
    image: IMG5,
    title: "PokeDex-App",
    link: "https://pokedex-app-jasonlim.vercel.app/",
    github: "https://github.com/JasonLim1009/React-PokeDex-App",
    demo: "https://www.youtube.com/watch?v=vzkFrIGLiaY"
  },
  {
    id: 6,
    image: IMG6,
    title: "Weather-App",
    link: "https://weather-app-jasonlim.vercel.app/",
    github: "https://github.com/JasonLim1009/React-Weather-App",
    demo: "https://www.youtube.com/watch?v=dz1i8y4bk44"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, link, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <h5>
                <a href={link} className="btn" target="_blank">
                  {link}
                </a>
              </h5>
              <br></br>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
