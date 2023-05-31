import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";

import Introduction from "./components/Introduction";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

config.autoAddCss = false;
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <NavBar />
      <Introduction />
      <div className="bg-gradient-to-r from-magneta to-aqua h-[2px]"></div>
      <Contact />
      <div className="bg-gradient-to-r from-magneta to-aqua h-[2px]"></div>
      <Footer />
    </main>
  );
}
