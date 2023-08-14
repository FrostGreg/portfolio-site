import { Dispatch, SetStateAction } from "react";
import { Montserrat } from "next/font/google";
import { ContentTypes } from "../page";

import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        className="mt-20"
      >
        <p className="intro">Hi my name is,</p>
        <h1>Gregory Frost</h1>
        <p className="tag-line">I write code.</p>
      </motion.div>
      <nav className="nav">
        <ul>
          <motion.li
            className={activeTab === ContentTypes.About ? "active" : ""}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ delay: 2 }}
          >
            <button
              onClick={() => {
                setActiveTab(ContentTypes.About);
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
          </motion.li>
          <motion.li
            className={activeTab === ContentTypes.Experience ? "active" : ""}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <button
              onClick={() => {
                setActiveTab(ContentTypes.Experience);
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
          </motion.li>
          <motion.li
            className={activeTab === ContentTypes.Projects ? "active" : ""}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <button
              onClick={() => {
                setActiveTab(ContentTypes.Projects);
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
          </motion.li>
          <motion.li
            className={activeTab === ContentTypes.Contact ? "active" : ""}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button
              onClick={() => {
                setActiveTab(ContentTypes.Contact);
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
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};
