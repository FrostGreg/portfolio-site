import { Dispatch, SetStateAction } from "react";
import { Montserrat } from "next/font/google";
import { ContentTypes } from "../page";

const montserrat = Montserrat({ subsets: ["latin"] });

const HeaderButton = ({}) => <button></button>;

export const Header = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: ContentTypes;
  setActiveTab: Dispatch<SetStateAction<ContentTypes>>;
}) => {
  return (
    <header className={montserrat.className}>
      <div className="mt-20">
        <p className="intro">Hi my name is,</p>
        <h1>Gregory Frost</h1>
        <p className="tag-line">I write code. 🐐</p>
      </div>
      <nav className="nav">
        <ul>
          <li className={activeTab === "About" ? "active" : ""}>
            <button
              onClick={() => {
                setActiveTab("About");
              }}
            >
              <span className="mobile">
                <span className="emoji" aria-hidden>
                  👋🏻
                </span>
                About me
              </span>
              <span className="desktop">About me</span>
            </button>
          </li>
          <li className={activeTab === "Experience" ? "active" : ""}>
            <button
              onClick={() => {
                setActiveTab("Experience");
              }}
            >
              <span className="mobile">
                <span className="emoji" aria-hidden>
                  📚
                </span>
                Experience
              </span>
              <span className="desktop">Where I&apos;ve worked</span>
            </button>
          </li>
          <li className={activeTab === "Projects" ? "active" : ""}>
            <button
              onClick={() => {
                setActiveTab("Projects");
              }}
            >
              <span className="mobile">
                <span className="emoji" aria-hidden>
                  🏗️
                </span>
                Projects
              </span>
              <span className="desktop">Things I&apos;ve built</span>
            </button>
          </li>
          <li className={activeTab === "Contact" ? "active" : ""}>
            <button
              onClick={() => {
                setActiveTab("Contact");
              }}
            >
              <span className="mobile">
                <span className="emoji" aria-hidden>
                  💬
                </span>
                Contact
              </span>
              <span className="desktop">Get in touch</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
