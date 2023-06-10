import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ScrollLink from "./ScrollLink";
import { externalLinks, navLinks } from "@/lib/links";

const NavBar = () => {
  return (
    <nav className="font-mono text-customSize py-16 px-4 md:max-w-[1200px] md:my-0 md:mx-auto md:w-full">
      <ul className="list-none p-0 m-0 flex flex-wrap flex-row justify-center items-center gap-8">
        <li className="basis-full text-center md:basis-auto md:text-left md:mr-auto">
          <h1 className="text-bold text-3xl">
            <Link
              className="font-sans text-white no-underline block hover:text-magneta"
              href="/"
            >
              <FontAwesomeIcon
                icon={faCode}
                aria-hidden="true"
                className="text-[100%] text-aqua hover:text-magneta pr-2"
              />
              Yisacc Aberham
            </Link>
          </h1>
        </li>
        {navLinks.map((link, index) => (
          <li key={index}>
            <h1>
              {link.href.startsWith("#") ? (
                <ScrollLink
                  className="text-white no-underline block hover:text-magneta"
                  href={link.href}
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <Link
                  className="text-white no-underline block hover:text-magneta"
                  href={link.href}
                >
                  {link.label}
                </Link>
              )}
            </h1>
          </li>
        ))}
        {externalLinks.map((link, index) => (
          <li key={index}>
            <h1>
              <Link
                href={link.href}
                target="_blank"
                className={`text-white no-underline block hover:text-magneta ${
                  link.className || ""
                }`}
              >
                {link?.icon ? (
                  <>
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="text-[150%] text-aqua hover:text-magneta"
                      aria-hidden="true"
                    />
                    <span className="sr-only">{link.label}</span>
                  </>
                ) : (
                  <>{link.label}</>
                )}
              </Link>
            </h1>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
