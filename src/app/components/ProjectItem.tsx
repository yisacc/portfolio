import Image, { StaticImageData } from "next/image";

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  imageSrc: StaticImageData;
}

const ProjectItem = ({
  title,
  description,
  technologies,
  imageSrc,
}: ProjectItemProps) => {
  return (
    <article className="sm:grid sm:grid-cols-10 gap-4">
      <div className="order-2 text-right sm:col-start-5 sm:col-end-11 sm:row-start-1 sm:row-end-2">
        <h4>{title}</h4>
        <h3 className="text-aqua text-2xl font-bold">{description}</h3>
        <p className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left">
          {description}
        </p>
        <h4 className="font-mono text-base m-0">Technologies used include:</h4>
        <ul className="list-none p-0 m-0 flex flex-row flex-wrap justify-start gap-4 text-base sm:justify-end">
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:col-start-1 sm:col-end-6 sm:row-start-1 sm:row-end-2">
        <Image
          width={584}
          height={358}
          src={imageSrc}
          alt={`Screenshot of ${title}`}
        />
      </div>
    </article>
  );
};

export default ProjectItem;
