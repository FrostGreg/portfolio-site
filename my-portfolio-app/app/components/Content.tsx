import AboutContent from "./AboutContent";
import ExperienceContent from "./ExperienceContent";
import ProjectsContent from "./ProjectsContent";
import ContactContent from "./ContactContent";

type ContentTypes = "About" | "Experience" | "Projects" | "Contact";

type ContentProps = {
  displayContent: ContentTypes;
};

export const Content = ({ displayContent }: ContentProps) => {
  return (
    <div id="content">
      <AboutContent />
    </div>
  );
};
