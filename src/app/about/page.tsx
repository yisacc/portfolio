import Image from "next/image";
import yisaccPic from "../../../public/IMG_3225.jpg";

export default async function About() {
  return (
    <>
      <div className="bg-gradient-to-r from-magneta to-aqua h-[2px]"></div>
      <div className="bg-dkblue">
        <section className="py-16 px-4 max-w-[1200px] mx-auto">
          <h2 className="leading-normal text-4xl mb-14">
            About Yisacc Aberham
          </h2>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div className="order-2 text-right sm:col-start-5 sm:col-end-11 sm:row-start-1 sm:row-end-2">
              <h3 className="text-aqua text-2xl font-bold">
                Just the highlights
              </h3>
              <p className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left">
                I am a software engineer with 5 years of experience in the
                software industry. My focus area for the past few years has been
                front-end development with React and Next.js, utilizing
                TypeScript. I am also skilled in back-end development with
                Node.js and have experience using TypeScript in that context as
                well.
              </p>
              <h4 className="font-mono text-base m-0">
                My favorite technologies include:
              </h4>
              <ul className="list-none p-0 m-0 flex flex-row flex-wrap justify-start gap-4 text-base sm:justify-end">
                <li>React</li>
                <li>React Native</li>
                <li>Typescript</li>
                <li>Next.js</li>
                <li>Node</li>
                <li>.NET</li>
                <li>GraphQL...</li>
              </ul>
            </div>

            <Image
              className="mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:col-start-1 sm:col-end-6 sm:row-start-1 sm:row-end-2 "
              width={584}
              height={358}
              src={yisaccPic}
              alt="Screenshot of the dHealth signer app."
            />
          </article>
        </section>
      </div>
    </>
  );
}
