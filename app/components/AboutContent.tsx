import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

import { motion } from "framer-motion";

type LinkProp = {
  href: string;
  children: JSX.Element | string;
};

const Link = ({ href, children }: LinkProp) => {
  return (
    <a href={href} target="_blank">
      {children}
    </a>
  );
};

const AboutContent = () => {
  return (
    <motion.div
      initial={{ y: 1500 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      exit={{
        y: -1000,
        transition: { duration: 0.2 },
      }}
    >
      <div className="mobile">
        <div className="content-title">
          <div className="divider left-divider"></div>
          <h2 className="title">
            <span aria-hidden>👋🏻</span>About me
          </h2>
          <div className="divider right-divider"></div>
        </div>
      </div>
      <p className="pb-6">
        Hey there!
        <span className="text-2xl desktop waving" aria-hidden>
          👋🏻
        </span>{" "}
        My name is Gregory, and I&apos;m a computer science student at the{" "}
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
      <p className="pb-6">Some quick fire interests of mine:</p>
      <ul className="pb-6 grid columns-2 emoji-list">
        <li className="col-start-1">
          <span aria-hidden className="erupt">
            🌋
          </span>{" "}
          Lord of the Rings
        </li>
        <li className="col-start-2">
          <span aria-hidden>🎧</span> Music
        </li>
        <li className="col-start-1">
          <span aria-hidden>🕹️</span> Video games
        </li>
        <li className="col-start-2">
          <span aria-hidden>⌚</span> Watches
        </li>
      </ul>
      <p className="pb-6">
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
      <ul className={`pt-6 ${montserrat.className} list`}>
        <li>Javascript (ES6+)</li>
        <li>React</li>
        <li className="py-2">Node.js</li>
        <li className="py-2">TypeScript</li>
        <li>Styled Components</li>
        <li>Cypress</li>
      </ul>
    </motion.div>
  );
};

export default AboutContent;
