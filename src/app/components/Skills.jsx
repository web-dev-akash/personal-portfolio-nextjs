import Image from "next/image";
import React from "react";

// ,react,redux,next,nodejs,mongo,express,tailwind
const technicalSkills = {
  HTML: "html",
  CSS: "css",
  JavaScript: "js",
  React: "react",
  Redux: "redux",
  "Next.js": "next",
  "Node.js": "nodejs",
  MongoDB: "mongo",
  "Express.js": "express",
  Tailwind: "tailwind",
  Firebase: "firebase",
  Java: "java",
  MUI: "materialui",
  "Chakra-UI": "fastapi",
  "Vite.js": "vite",
};

const devopsSkills = {
  Git: "git",
  GitHub: "github",
  "GitHub Actions": "githubactions",
  "Goole Cloud Platform": "gcp",
  AWS: "aws",
  Selenium: "selenium",
};

const tools = {
  "VS Code": "vscode",
  Wordpress: "wordpress",
  Vercel: "vercel",
  Heroku: "heroku",
  Codepen: "codepen",
  Netlify: "netlify",
  Replit: "replit",
};

export const Skills = () => {
  return (
    <article className="resume" data-page="skills">
      <header>
        <h2 className="h2 article-title">Skills</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="code"></ion-icon>
          </div>

          <h3 className="h3">Technical Skills</h3>
        </div>

        <div className="skills-grid">
          {Object.entries(technicalSkills).map(([skillName, skillValue]) => {
            return (
              <div key={skillName}>
                <Image
                  src={`https://skillicons.dev/icons?i=${skillValue}`}
                  alt="HTML"
                  unoptimized
                  unselectable="on"
                  height={1}
                  width={80}
                  priority={true}
                />
                <p className="timeline-text">{skillName}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="server-outline"></ion-icon>
          </div>

          <h3 className="h3">DevOps</h3>
        </div>
        <div className="skills-grid">
          {Object.entries(devopsSkills).map(([skillName, skillValue]) => {
            return (
              <div key={skillName}>
                <Image
                  src={`https://skillicons.dev/icons?i=${skillValue}`}
                  alt="HTML"
                  unoptimized
                  priority={true}
                  unselectable="on"
                  height={1}
                  width={80}
                />
                <p className="timeline-text">{skillName}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="build-outline"></ion-icon>
          </div>

          <h3 className="h3">Tools</h3>
        </div>
        <div className="skills-grid">
          {Object.entries(tools).map(([skillName, skillValue]) => {
            return (
              <div key={skillName}>
                <Image
                  src={`https://skillicons.dev/icons?i=${skillValue}`}
                  alt="HTML"
                  unoptimized
                  priority={true}
                  unselectable="on"
                  height={1}
                  width={80}
                />
                <p className="timeline-text">{skillName}</p>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
};
