"use client";

import { useState } from "react";

export const Header = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <header>
      <div>
        <p className="orange-text">Hi my name is,</p>
        <h1 className="white-text large-text">Gregory Frost</h1>
        <p className="grey-text large-text">I write code.</p>
      </div>
      <nav>
        <ul>
          <li className={activeButton === 0 ? "active" : ""}>
            <button
              onClick={() => {
                setActiveButton(0);
              }}
            >
              <a>About me</a>
            </button>
          </li>
          <li className={activeButton === 1 ? "active" : ""}>
            <button
              onClick={() => {
                setActiveButton(1);
              }}
            >
              <a>Where I've worked</a>
            </button>
          </li>
          <li className={activeButton === 2 ? "active" : ""}>
            <button
              onClick={() => {
                setActiveButton(2);
              }}
            >
              <a>Things I've built</a>
            </button>
          </li>
          <li className={activeButton === 3 ? "active" : ""}>
            <button
              onClick={() => {
                setActiveButton(3);
              }}
            >
              <a>Get in touch</a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
