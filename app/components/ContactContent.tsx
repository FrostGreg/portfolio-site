import { Montserrat } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const montserrat = Montserrat({ subsets: ["latin"] });

const ContactContent = () => {
  return (
    <>
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
        <p>
          Please feel free to reach out if you have any questions or want to
          connect. I&apos;m always up to chat about web development, so feel
          free to hit me up; I&apos;d love to hear from you!{" "}
          <span className="text-2xl waving" aria-hidden>
            👋🏻
          </span>
        </p>
        <div className="social-links">
          <a href="mailto:frost.computing21@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faInbox} />
          </a>
          <a href="https://github.com/FrostGreg" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/gregory-frost" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p className={`small-text ${montserrat.className}`}>
          Designed and Built by Gregory Frost
        </p>
        <p className={`small-text ${montserrat.className}`}>
          All rights reserved ©️ Gregory Frost {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
};

export default ContactContent;
