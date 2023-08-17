import { Montserrat } from "next/font/google";

import "../../public/fontello/css/fontello.css";

import { motion } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"] });

const ContactContent = () => {
  return (
    <motion.div
      initial={{ y: 1000 }}
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
            <span aria-hidden>💬</span>Get in touch
          </h2>
          <div className="divider right-divider"></div>
        </div>
      </div>
      <div className="contact">
        <motion.p
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Please feel free to reach out if you have any questions or want to
          connect. I&apos;m always up to chat about web development, so feel
          free to hit me up; I&apos;d love to hear from you!{" "}
          <span className="text-2xl waving" aria-hidden>
            👋🏻
          </span>
        </motion.p>
        <div className="social-links">
          <motion.a
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            href="mailto:frost.computing21@gmail.com"
            target="_blank"
          >
            <i className="icon-inbox" />
          </motion.a>
          <a href="https://github.com/FrostGreg" target="_blank">
            <i className="icon-github-circled" />
          </a>
          <motion.a
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            href="https://linkedin.com/in/gregory-frost"
            target="_blank"
          >
            <i className="icon-linkedin-squared" />
          </motion.a>
        </div>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`small-text ${montserrat.className}`}
        >
          Designed and Built by Gregory Frost
        </motion.p>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className={`small-text ${montserrat.className}`}
        >
          All rights reserved ©️ Gregory Frost {new Date().getFullYear()}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ContactContent;
