"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";

import { motion } from "framer-motion";

import { container, item } from "./utils";

const montserrat = Montserrat({ subsets: ["latin"] });

type ExperienceArticleProps = {
  title: string;
  employer?: { name: string; link: string };
  date: string;
  bulletOne: string;
  bulletTwo: string;
  bulletThree: string;
};

const ExperienceArticle = ({
  title,
  employer,
  date,
  bulletOne,
  bulletTwo,
  bulletThree,
}: ExperienceArticleProps) => (
  <motion.article
    variants={container}
    initial="hidden"
    animate="show"
    className="mt-4"
  >
    <motion.h3 variants={item} className="job-title">
      {`${title} `}
      {employer && (
        <a href={employer.link} target="_blank">
          {`@ ${employer.name}`}
        </a>
      )}
    </motion.h3>
    <motion.p variants={item} className={`date ${montserrat.className}`}>
      {date}
    </motion.p>
    <ul className="job-description list">
      <motion.li variants={item}>{bulletOne}</motion.li>
      <motion.li variants={item}>{bulletTwo}</motion.li>
      <motion.li variants={item}>{bulletThree}</motion.li>
    </ul>
  </motion.article>
);

const ExperienceContent = () => {
  const [tabNumber, setTabNumber] = useState(0);
  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      exit={{
        y: -1000,
        transition: { duration: 0.2 },
      }}
    >
      <div className="mobile">
        <div className="content-title">
          <div className="divider left-divider"></div>
          <h2 className="title">
            <span aria-hidden>📚</span>Where I&apos;ve worked
          </h2>
          <div className="divider right-divider"></div>
        </div>
      </div>
      <ul className="horizontal-nav">
        <li className={tabNumber === 0 ? "horizontal-nav-active" : ""}>
          <button
            className={`experience-button ${montserrat.className}`}
            onClick={() => {
              setTabNumber(0);
            }}
          >
            Capital One
          </button>
        </li>
        <li className={tabNumber === 1 ? "horizontal-nav-active" : ""}>
          <button
            className={`experience-button ${montserrat.className}`}
            onClick={() => {
              setTabNumber(1);
            }}
          >
            Freelance
          </button>
        </li>
      </ul>
      {tabNumber === 0 && (
        <ExperienceArticle
          title="Web Developer"
          date="June 2022 - Present"
          employer={{
            name: "Capital One",
            link: "https://www.capitalone.co.uk/",
          }}
          bulletOne="Develop simple, easy-to-maintain, and performant code for various
               web applications"
          bulletTwo="Work with a variety of different languages and frameworks such as
               JavaScript, TypeScript, React, Node.js, and Cypress"
          bulletThree="Effectively convey my ideas and work collaboratively with
               cross-functional teams including engineers, designers, and product
               owners to achieve project goals"
        />
      )}
      {tabNumber === 1 && (
        <ExperienceArticle
          title="Freelance Software Engineer"
          date="August 2021 - June 2022"
          bulletOne="Maintain and expand existing customer applications based on client
        requests"
          bulletTwo="Extensively work with Python and the Tkinter toolkit, to gain
        proficiency in creating appealing user interfaces"
          bulletThree="Collaborate with non-technical clients to gather requirements and
        ensure the delivered product either meets their needs or gain
        feedback to further improve it."
        />
      )}
    </motion.div>
  );
};

export default ExperienceContent;
