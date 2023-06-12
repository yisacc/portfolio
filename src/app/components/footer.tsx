import { socialLinks } from "@/lib/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="text-center py-16 px-0">
      <h2>Yisacc Aberham &middot; Front-End Developer</h2>
      <ul className="flex justify-center items-center gap-12 text-5xl flex-wrap flex-row p-0 my-8 mx-0 list-none">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" className="text-white">
              {" "}
              <FontAwesomeIcon
                icon={link.icon}
                aria-hidden="true"
                className="text-[150%] text-magneta hover:text-hotmag"
              />
              <span className="sr-only">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <p>
        <small>@copy; 2023 Yisacc Aberham. All rights reserved</small>
      </p>
    </footer>
  );
};
export default Footer;
