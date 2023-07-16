import { Dispatch, SetStateAction } from "react";
import { Montserrat } from "next/font/google";
import { ContentTypes } from "../page";

const montserrat = Montserrat({ subsets: ["latin"] });

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
        <p className="orange-text">Hi my name is,</p>
        <h1 className="white-text large-text">Gregory Frost</h1>
        <p className="grey-text large-text bold-text inner-shadow">
          I write code. 🐐
        </p>
      </div>
      <nav className="nav">
        <ul>
          <li className={activeTab === "About" ? "active" : ""}>
            <button
              onClick={() => {
                setActiveTab("About");
              }}
            >
              About me
            </button>
          </li>
          <li className={activeTab === "Experience" ? "active" : ""}>
            <button
              onClick={() => {
                setActiveTab("Experience");
              }}
            >
              Where I&apos;ve worked
            </button>
          </li>
          <li className={activeTab === "Projects" ? "active" : ""}>
            <button
              onClick={() => {
                setActiveTab("Projects");
              }}
            >
              Things I&apos;ve built
            </button>
          </li>
          <li className={activeTab === "Contact" ? "active" : ""}>
            <button
              onClick={() => {
                setActiveTab("Contact");
              }}
            >
              Get in touch
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
