import Image from "next/image";
import signerAppPic from "../../../public/dHealthSigner.jpg";
const Projects = () => {
  return (
    <div className="bg-dkblue">
      <section id="projects" className="py-16 px-4">
        <h2 className="leading-normal text-4xl mb-14">
          Projects I&apos;m proud of
        </h2>
        <article>
          <h4>Latest Project</h4>
          <h3 className="text-aqua text-2xl font-bold">dHealth Signer app</h3>
          <p className="bg-black p-4 rounded-lg text-base text-white leading-6">
            The dHealth signer app is a non custodial client (wallet) that
            allows users to interact with dApps in the dHealth Ecosystem and
            view and maintain your DHP balance. The{" "}
            <a href="https://www.dhealth.com/">dHealth signer app</a>{" "}
            additionally supports signing of all dHealth transactions.
          </p>
          <h4 className="font-mono text-base m-0">
            Technologies used include:
          </h4>
          <ul className="list-none p-0 m-0 flex flex-row flex-wrap justify-start gap-4 text-base">
            <li>React Native</li>
            <li>Typescript</li>
            <li>Blockchain</li>
            <li>Css</li>
            <Image
              className="mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4"
              width={1000}
              height={500}
              src={signerAppPic}
              alt="Screenshot of the dHealth signer app."
            />
          </ul>
        </article>
      </section>
    </div>
  );
};
export default Projects;
