import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="text-center py-16 px-0">
      <h2>Yisacc Aberham &middot; Front-End Developer</h2>
      <ul className="flex justify-center items-center gap-12 text-5xl flex-wrap flex-row p-0 my-8 mx-0 list-none">
        <li>
          <a
            href="https://www.linkedin.com/in/yisacc-aberham-7ba6221b0/"
            target="_blank"
            className="text-white"
          >
            {" "}
            <FontAwesomeIcon
              icon={faLinkedin}
              aria-hidden="true"
              className="text-[150%] text-magneta hover:text-hotmag"
            />
            <span className="sr-only">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yisacc-aberham-7ba6221b0/"
            target="_blank"
            className="text-white"
          >
            {" "}
            <FontAwesomeIcon
              icon={faGithub}
              aria-hidden="true"
              className="text-[150%] text-magneta hover:text-hotmag"
            />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:isaccab2019@gmail.com"
            target="_blank"
            className="text-white"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              aria-hidden="true"
              className="text-[150%] text-magneta hover:text-hotmag"
            />
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
      <p>
        <small>@copy; 2023 Yisacc Aberham. All rights reserved</small>
      </p>
    </footer>
  );
};
export default Footer;
