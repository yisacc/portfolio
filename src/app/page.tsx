

import Introduction from "./components/Introduction";
import Contact from "./components/Contact";

import Projects from "./components/projects";

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
