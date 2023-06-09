"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    router.push("/#" + targetId);
  };

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
        <li>
          <h1>
            <Link
              className="text-white no-underline block hover:text-magneta"
              href="#projects"
              onClick={scrollToSection}
            >
              Projects
            </Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link
              className="text-white no-underline block hover:text-magneta"
              href="/about"
            >
              About
            </Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link
              className="text-white no-underline block hover:text-magneta"
              href="#contact"
              onClick={scrollToSection}
            >
              Contact
            </Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link
              className="text-white no-underline block hover:text-magneta"
              href="https://www.linkedin.com/in/yisacc-aberham-7ba6221b0/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                aria-hidden="true"
                className="text-[150%] text-aqua hover:text-magneta"
              />
              <span className="sr-only">Linkedin</span>
            </Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link
              className="text-white no-underline block hover:text-magneta"
              href="https://github.com/yisacc"
              target="_blank"
            >
              <FontAwesomeIcon
                className="text-[150%] text-aqua hover:text-magneta"
                aria-hidden="true"
                icon={faGithub}
              />
              <span className="sr-only">Github</span>
            </Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link
              className="text-white no-underline block hover:text-white bg-magneta p-2 rounded hover:bg-hotmag"
              href="https://www.notion.so/Yisacc-Aberham-762d1a831c84460285f5d4bfa7025f07?pvs=4"
              target="_blank"
            >
              Resume
            </Link>
          </h1>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
