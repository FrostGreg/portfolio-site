import AboutContent from "./AboutContent";
import ExperienceContent from "./ExperienceContent";
import ProjectsContent from "./ProjectsContent";
import ContactContent from "./ContactContent";
import { ContentTypes } from "../page";

import { motion, AnimatePresence } from "framer-motion";

const ContentSwitch = (displayContent: ContentTypes) => {
  switch (displayContent) {
    case ContentTypes.About:
      return <AboutContent key="About" />;
    case ContentTypes.Experience:
      return <ExperienceContent key="Experience" />;
    case ContentTypes.Projects:
      return <ProjectsContent key="Projects" />;
    case ContentTypes.Contact:
      return <ContactContent key="Contact" />;
  }
};

type ContentProps = {
  displayContent: ContentTypes;
};

export const Content = ({ displayContent }: ContentProps) => {
  return (
    <motion.div
      id="content"
      initial={{ opacity: 0, y: 1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
    >
      <AnimatePresence>{ContentSwitch(displayContent)}</AnimatePresence>
    </motion.div>
  );
};
