const Contact = () => {
  return (
    <div className="bg-plum">
      <section
        id="contact"
        className="max-w-[400px] text-center mx-auto my-0 px-auto py-16 "
      >
        <h2 className="text-3xl font-bold font-sans leading-normal pb-4">
          Contact me
        </h2>
        <p className="leading-normal">
          I&apos;m always interested in hearing about new technologies, updates
          and job opportunities.
        </p>
        <p className="mt-12">
          <a
            className="text-white no-underline font-mono hover:text-white bg-magneta p-2 rounded hover:bg-hotmag"
            href="mailto:isaccab2019@gmail.com"
          >
            {" "}
            Email me
          </a>
        </p>
      </section>
    </div>
  );
};
export default Contact;
