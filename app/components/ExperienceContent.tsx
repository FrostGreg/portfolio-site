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

const isBeforeOctober2025 = () => {
  const date = new Date();
  return date.getFullYear() == 2025 && date.getMonth() <= 9;
};

const ExperienceContent = () => {
  const [tabNumber, setTabNumber] = useState(0);
  const [showPresent] = useState(isBeforeOctober2025());
  const [servicesDuration] = useState(Math.min(new Date().getMonth() + 3, 12));
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
        <>
          <ExperienceArticle
            title="Back-end Services Engineer"
            date={`September 2024 - ${
              showPresent ? "Present" : "October 2025"
            } ~${servicesDuration} months`}
            employer={{
              name: "Capital One",
              link: "https://www.capitalone.co.uk/",
            }}
            bulletOne="Setup accurate, reliable, and secure logging dashboards and alerts to allow faster troubleshooting"
            bulletTwo="Extend functionality and develop new microservices adhering to strict quality and performance metrics"
            bulletThree="Deploy, maintain, and decommission various AWS infrastructure"
          />
          <ExperienceArticle
            title="Mobile Tester"
            date="April 2023 - September 2023 ~6 months"
            bulletOne="Facilitate execution of End-to-End testing across new mobile features ensuring quality"
            bulletTwo="Build upon and maintain a resilient test suite including unit, functional acceptance, accessibility, and jira x-ray tests"
            bulletThree="Ensure an equal experience across both iOS and Android platforms"
          />
          <ExperienceArticle
            title="Web Developer"
            date="June 2022 - April 2023 ~9 months"
            bulletOne="Develop simple, easy-to-maintain, and performant code for various
               web applications"
            bulletTwo="Work with a variety of different languages and frameworks such as
               JavaScript, TypeScript, React, Node.js, and Cypress"
            bulletThree="Effectively convey my ideas and work collaboratively with
               cross-functional teams including engineers, designers, and product
               owners to achieve project goals"
          />
        </>
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
