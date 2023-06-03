import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";

import Introduction from "./components/Introduction";
import Contact from "./components/Contact";

import Projects from "./components/projects";

config.autoAddCss = false;
export default function Home() {
  return (
    <>
      <Introduction />
      <div className="bg-gradient-to-r from-magneta to-aqua h-[2px]"></div>
      <Projects />
      <div className="bg-gradient-to-r from-magneta to-aqua h-[2px]"></div>
      <Contact />
    </>
  );
}
