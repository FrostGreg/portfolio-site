import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

type LinkProp = {
  href: string;
  children: JSX.Element | string;
};

const Link = ({ href, children }: LinkProp) => {
  return (
    <a href={href} target="_blank" className="orange-text">
      {children}
    </a>
  );
};

const AboutContent = () => {
  return (
    <>
      <p className="pb-10">
        Hi! My name is Gregory, and I&apos;m a computer science student at the{" "}
        <Link href="https://www.nottingham.ac.uk/ugstudy/course/Computer-Science-with-Year-in-Industry-BSc">
          University of Nottingham
        </Link>
        . I&apos;m currently completing a placement year at{" "}
        <Link href="https://jobs.capitalone.co.uk/earlycareers#tabs-2">
          Capital One
        </Link>{" "}
        as a web developer, where I&apos;ve been working with technologies like
        React, TypeScript, and Node.
      </p>
      <p className="pb-10">
        I&apos;m a lifelong learner and I&apos;m always on the lookout for new
        technologies and techniques to improve my skills. I love the fast-paced
        nature of web development and the constant challenges it presents.
      </p>
      <p className="pb-10">
        Recently, I&apos;ve been brushing up my web development skills by taking
        courses from{" "}
        <Link href="https://frontendmasters.com/">FrontEndMasters</Link>, one of
        the projects I&apos;ve been working on is creating a{" "}
        <Link href="https://frontendmasters.com/courses/production-next/">
          Next.js application
        </Link>{" "}
        that allows users to create, store, and edit notes with the added
        convenience of Github sign in.
      </p>
      <p>Here are a few technologies I&apos;ve been working with recently:</p>
      <ul className={`pt-10 ${montserrat.className} list`}>
        <li>Javascript (ES6+)</li>
        <li>React</li>
        <li className="py-2">Node.js</li>
        <li className="py-2">TypeScript</li>
        <li>Styled Components</li>
        <li>Cypress</li>
      </ul>
    </>
  );
};

export default AboutContent;