import AboutContent from "./AboutContent";
import ExperienceContent from "./ExperienceContent";
import ProjectsContent from "./ProjectsContent";
import ContactContent from "./ContactContent";
import { ContentTypes } from "../page";

const ContentSwitch = (displayContent: ContentTypes) => {
  switch (displayContent) {
    case "About":
      return <AboutContent />;
    case "Experience":
      return <ExperienceContent />;
    case "Projects":
      return <ProjectsContent />;
    case "Contact":
      return <ContactContent />;
  }
};

type ContentProps = {
  displayContent: ContentTypes;
};

export const Content = ({ displayContent }: ContentProps) => {
  return <div id="content">{ContentSwitch(displayContent)}</div>;
};
