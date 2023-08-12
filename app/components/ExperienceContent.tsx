"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const ExperienceContent = () => {
  const [tabNumber, setTabNumber] = useState(0);
  return (
    <>
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
        <article className="mt-4">
          <h3 className="job-title">
            Web Developer{" "}
            <a href="https://www.capitalone.co.uk/" target="_blank">
              @ Capital One
            </a>
          </h3>
          <p className={`date ${montserrat.className}`}>June 2022 - Present</p>
          <ul className="job-description list">
            <li>
              Develop simple, easy-to-maintain, and performant code for various
              web applications
            </li>
            <li>
              Work with a variety of different languages and frameworks such as
              JavaScript, TypeScript, React, Node.js, and Cypress
            </li>
            <li>
              Effectively convey my ideas and work collaboratively with
              cross-functional teams including engineers, designers, and product
              owners to achieve project goals
            </li>
          </ul>
        </article>
      )}
      {tabNumber === 1 && (
        <article className="mt-4">
          <h3 className="job-title">Freelance Software Engineer</h3>
          <p className={`date ${montserrat.className}`}>
            August 2021 - June 2022
          </p>
          <ul className="job-description list">
            <li>
              Maintain and expand existing customer applications based on client
              requests
            </li>
            <li>
              Extensively work with Python and the Tkinter toolkit, to gain
              proficiency in creating appealing user interfaces
            </li>
            <li>
              Collaborate with non-technical clients to gather requirements and
              ensure the delivered product either meets their needs or gain
              feedback to further improve it.
            </li>
          </ul>
        </article>
      )}
    </>
  );
};

export default ExperienceContent;
