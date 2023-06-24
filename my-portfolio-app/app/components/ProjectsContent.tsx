"use client";

import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

const ProjectsContent = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <>
      <button onClick={() => setActiveProject((prev) => (prev - 1) % 4)}>
        {"<"}
      </button>
      {activeProject === 0 && (
        <article>
          <div className="text">
            <h4 className={`orange-text small-text ${montserrat.className}`}>
              Latest Project
            </h4>
            <h3>Wordle clone</h3>

            <p className="blackbox">
              My recreation of the trending game wordle. Built as part of the
              FrontEndMasters course to reinforce basics for Javascript. For
              more info check out this{" "}
              <a
                href="https://github.com/FrostGreg/WordleClone"
                target="_blank"
                className="orange-text"
              >
                repo
              </a>
              .
            </p>
            <h4>Technologies use include:</h4>
            <ul>
              <li>
                <p>HTML</p>
              </li>
              <li>
                <p>CSS</p>
              </li>
              <li>
                <p>JS</p>
              </li>
            </ul>
          </div>
          {/* <img
          src="./pics/wordle.png"
          alt="Wordle clone screenshot with 3 guesses showing where correct and incorrect letters are"
        /> */}
        </article>
      )}
      {activeProject === 1 && (
        <article className="reverse">
          <div className="text">
            <h4>Favourite project</h4>
            <h3>Job Finder</h3>

            <p className="blackbox">
              I got sick of having to repeat my details into multiple job sites
              so I built this to do it for me. It scrapes job board sites
              displaying all jobs on one site storing previous searches for
              faster lookups. It is a Django web app with selenium web scraping
              and sqlite3 database. For more info check out this{" "}
              <a href="https://github.com/FrostGreg/job-finder" target="_blank">
                repo
              </a>
              .
            </p>
            <h4>Technologies use include:</h4>
            <ul>
              <li>
                <p>Django</p>
              </li>
              <li>
                <p>HTML</p>
              </li>
              <li>
                <p>CSS</p>
              </li>
              <li>
                <p>JS</p>
              </li>
            </ul>
          </div>
          {/* <img
          src="./pics/home.png"
          alt="Job finder home page screenshot showing the input form for the job search"
        /> */}
        </article>
      )}
      {activeProject === 2 && (
        <article>
          <div className="text">
            <h4>Game Project</h4>
            <h3>Reversi / Othello</h3>

            <p className="blackbox">
              A java version of the board game Reversi created using the Swing
              module. Two players take turn placing one of their pieces onto the
              board. If two pieces can create a straight line then all pieces in
              between will become that colour. Each play must convert at least
              one piece from the opposition. The game ends when there are no
              more moves left{" "}
              <a href="https://github.com/FrostGreg/reversi" target="_blank">
                repo
              </a>
              .
            </p>
            <h4>Technologies use include:</h4>
            <ul>
              <li>
                <p>Java</p>
              </li>
              <li>
                <p>Swing</p>
              </li>
            </ul>
          </div>
          {/* <img
          src="./pics/reversi.png"
          alt="Table showing reversi at different stages of play"
        /> */}
        </article>
      )}
      {activeProject === 3 && (
        <article className="reverse">
          <div className="text">
            <h4>Game Project</h4>
            <h3>Worms remake</h3>

            <p className="blackbox">
              A worms remake in which 2 players take turns trying to eliminate
              their opponent using an array of available weapons. Item pickups
              and health drops, destructible terrain, and collision physics.
            </p>
            <h4>Technologies use include:</h4>
            <ul>
              <li>
                <p>C++</p>
              </li>
            </ul>
          </div>
          {/* <img
          src="./pics/worms.png"
          alt="Worms game screenshots showing title screen, gameplay, character naming, and pause menu"
        /> */}
        </article>
      )}
      <button onClick={() => setActiveProject((prev) => (prev + 1) % 4)}>
        {">"}
      </button>
    </>
  );
};

export default ProjectsContent;
