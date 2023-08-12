"use client";

import Image, { StaticImageData } from "next/image";

import wordleImage from "../../public/wordle.png";
import jobImage from "../../public/home.png";
import reversiImage from "../../public/reversi.png";
import wormsImage from "../../public/worms.png";

import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

type ProjectTypes = "Latest" | "Favourite" | "Game";
type ImageProps = {
  src: StaticImageData;
  alt: string;
};

type ArticleContentProps = {
  type: ProjectTypes;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  imageProps: ImageProps;
};

const ArticleContent = ({
  type,
  title,
  description,
  technologies,
  link,
  imageProps,
}: ArticleContentProps) => (
  <article className="project-article">
    <div className="project-wrapper">
      <h4 className={`project-type ${montserrat.className}`}>{type} Project</h4>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">
        {description}
        {link && (
          <>
            {" "}
            For more info check out this{" "}
            <a href={link} target="_blank">
              repo
            </a>
            .
          </>
        )}
      </p>
      <ul className="flex justify-end">
        {technologies.map((val, index) => (
          <li key={index} className="project-list">
            <p className={montserrat.className}>{val}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="project-image-wrapper" aria-hidden>
      <Image
        src={imageProps.src}
        alt={imageProps.alt}
        fill
        className="project-image"
      />
    </div>
  </article>
);

const ProjectsContent = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <>
      <div className="mobile">
        <div className="content-title">
          <div className="divider left-divider"></div>
          <h2 className="title">
            <span aria-hidden>🏗️</span>Things I&apos;ve built
          </h2>
          <div className="divider right-divider"></div>
        </div>
      </div>
      {activeProject === 0 && (
        <ArticleContent
          type="Latest"
          title="Wordle Clone"
          description="My recreation of the trending game wordle. Built as part of the
        FrontEndMasters course to reinforce basics for Javascript."
          technologies={["HTML", "CSS", "JS"]}
          link="https://github.com/FrostGreg/WordleClone"
          imageProps={{ src: wordleImage, alt: "Wordle Alt text" }}
        />
      )}
      {activeProject === 1 && (
        <ArticleContent
          type="Favourite"
          title="Job Finder"
          description="I got sick of having to repeat my details into multiple job sites
        so I built this to do it for me. It scrapes job board sites
        displaying all jobs on one site storing previous searches for
        faster lookups. It is a Django web app with selenium web scraping
        and sqlite3 database."
          technologies={["Django", "HTML", "CSS", "JS"]}
          link="https://github.com/FrostGreg/job-finder"
          imageProps={{ src: jobImage, alt: "Job Alt text" }}
        />
      )}
      {activeProject === 2 && (
        <ArticleContent
          type="Game"
          title="Reversi / Othello"
          description="A java version of the board game Reversi created using the Swing
        module. Two players take turns placing one of their pieces onto the
        board. If two pieces can create a straight line then all pieces in
        between will become that colour. Each play must convert at least
        one piece from the opposition."
          technologies={["Java", "Swing"]}
          link="https://github.com/FrostGreg/reversi"
          imageProps={{ src: reversiImage, alt: "Reversi Alt text" }}
        />
      )}
      {activeProject === 3 && (
        <ArticleContent
          type="Game"
          title="Worms remake"
          description="A worms remake in which 2 players take turns trying to eliminate
        their opponent using an array of available weapons. Item pickups
        and health drops, destructible terrain, and collision physics."
          technologies={["C++"]}
          imageProps={{ src: wormsImage, alt: "Worms Alt text" }}
        />
      )}

      <ol className="flex justify-center mt-8">
        <li className={activeProject === 0 ? "project-active" : ""}>
          <button
            className="project-indicator"
            onClick={() => {
              setActiveProject(0);
            }}
          ></button>
        </li>
        <li className={activeProject === 1 ? "project-active" : ""}>
          <button
            className="project-indicator"
            onClick={() => {
              setActiveProject(1);
            }}
          ></button>
        </li>
        <li className={activeProject === 2 ? "project-active" : ""}>
          <button
            className="project-indicator"
            onClick={() => {
              setActiveProject(2);
            }}
          ></button>
        </li>
        <li className={activeProject === 3 ? "project-active" : ""}>
          <button
            className="project-indicator"
            onClick={() => {
              setActiveProject(3);
            }}
          ></button>
        </li>
      </ol>
    </>
  );
};

export default ProjectsContent;
