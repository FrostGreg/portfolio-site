import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

import { motion } from "framer-motion";

import { container, item } from "./utils";

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
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="pb-6">
          Hey there!
          <span className="text-2xl desktop waving" aria-hidden>
            👋🏻
          </span>{" "}
          My name is Gregory, and I&apos;m a graduate software engineer at{" "}
          <Link href="https://www.capitalone.co.uk/">Capital One</Link>{" "}
          currently spending time in a back end services team using Java and
          AWS. I previously studied computer science student at the{" "}
          <Link href="https://www.nottingham.ac.uk/ugstudy/course/Computer-Science-with-Year-in-Industry-BSc">
            University of Nottingham
          </Link>{" "}
          and graduated in summer 2024 🧑‍🎓.
        </motion.p>
        <motion.p variants={item} className="pb-6">
          Some quick fire interests of mine:
        </motion.p>
        <motion.ul variants={item} className="pb-6 grid columns-2 emoji-list">
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
        </motion.ul>
        <motion.p variants={item} className="pb-6">
          Recently, I&apos;ve been brushing up my web development skills by
          taking courses from{" "}
          <Link href="https://frontendmasters.com/">FrontEndMasters</Link>, one
          of the projects I&apos;ve been working on is creating a{" "}
          <Link href="https://frontendmasters.com/courses/production-next/">
            Next.js application
          </Link>{" "}
          that allows users to create, store, and edit notes with the added
          convenience of Github sign in.
        </motion.p>
        <motion.p variants={item}>
          Here are a few technologies I&apos;ve been working with recently:
        </motion.p>
        <motion.ul
          variants={item}
          className={`pt-6 ${montserrat.className} list`}
        >
          <li>Javascript (ES6+)</li>
          <li>React</li>
          <li className="py-2">Node.js</li>
          <li className="py-2">TypeScript</li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
