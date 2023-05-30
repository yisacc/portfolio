import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <section id="intro" className="pb-40">
        <p className="text-base font-mono leading-20">
          Hi, my name is
          <span className="font-sans text-headingTwo leading-normal text-aqua block font-light">
            Yisacc Aberham.
          </span>
        </p>
        <h2 className="text-headingTwo leading-normal">
          I&apos;m a front-end developer.
        </h2>
        <p className="text-base leading-10">
          Passionate MERN stack developer specializing in React.js, Next.JS,
          Typescript, HTML, CSS and user experience.
        </p>

        <p className="text-base leading-10">
          Currently, I&apos;m working on personal startup( Hi-Trust Tutor) &
          front-end mentor.
        </p>
      </section>
    </main>
  );
}
