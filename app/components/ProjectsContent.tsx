"use client";

import Image, { StaticImageData } from "next/image";

import wordleImage from "../../public/wordle.webp";
import jobImage from "../../public/home.webp";
import reversiImage from "../../public/reversi.webp";
import wormsImage from "../../public/worms.webp";

import { Montserrat } from "next/font/google";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

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
  <motion.article
    className="project-article"
    initial={{ opacity: 0, x: 300, scale: 0.5 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ delay: 0.3, ease: [0, 0.71, 0.2, 1.01], duration: 0.2 }}
    exit={{
      opacity: 0,
      x: -300,
      scale: 0.5,
      transition: { delay: 0, duration: 0.2 },
    }}
  >
    <div className="project-wrapper">
      <motion.h4
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`project-type ${montserrat.className}`}
      >
        {type} Project
      </motion.h4>
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="project-title"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, ease: [0, 0.71, 0.2, 1.01] }}
        className="project-description"
      >
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
      </motion.p>
      <motion.ul className="flex justify-end">
        <AnimatePresence>
          {technologies.map((val, index) => (
            <motion.li
              initial={{
                x: 60 * (technologies.length - index - 1),
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              key={index}
              className="project-list"
            >
              <p className={montserrat.className}>{val}</p>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
    <motion.div className="project-image-wrapper" aria-hidden>
      <Image
        src={imageProps.src}
        alt={imageProps.alt}
        fill
        className="project-image"
        priority
      />
    </motion.div>
  </motion.article>
);

const ProjectsContent = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ y: -1000, transition: { duration: 0.2 } }}
    >
      <div className="mobile">
        <div className="content-title">
          <div className="divider left-divider"></div>
          <h2 className="title">
            <span aria-hidden>🏗️</span>Things I&apos;ve built
          </h2>
          <div className="divider right-divider"></div>
        </div>
      </div>
      <AnimatePresence>
        {activeProject === 0 && (
          <ArticleContent
            key="article1"
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
            key="article2"
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
            key="article3"
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
            key="article4"
            type="Game"
            title="Worms remake"
            description="A worms remake in which 2 players take turns trying to eliminate
        their opponent using an array of available weapons. Item pickups
        and health drops, destructible terrain, and collision physics."
            technologies={["C++"]}
            imageProps={{ src: wormsImage, alt: "Worms Alt text" }}
          />
        )}
      </AnimatePresence>
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
    </motion.div>
  );
};

export default ProjectsContent;
