import { ProjectItems } from "@/lib/projectsConfig";
import Image from "next/image";
import clsx from "clsx";

const ProjectItem = ({
  title,
  subTitle,
  description,
  technologies,
  imageSrc,
  className,
  imageClass,
  listClass,
}: ProjectItems) => {
  return (
    <article className="sm:grid sm:grid-cols-10 gap-4">
      <div data-testid="project wrapper" className={clsx("order-2 sm:row-start-1 sm:row-end-2", className)}>
        <h4>{title}</h4>
        <h3 className="text-aqua text-2xl font-bold">{subTitle}</h3>
        <p
          className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
        <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
        <h4 className="font-mono text-base m-0">Technologies used include:</h4>
        <ul data-testid="technologies list"
          className={clsx(
            "list-none p-0 m-0 flex flex-row flex-wrap justify-start gap-4 text-base",
            listClass
          )}
        >
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div
        className={clsx(
          "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
          imageClass
        )}
      >
        <Image
          width={584}
          height={358}
          src={imageSrc}
          alt={`Screenshot of ${subTitle}`}
        />
      </div>
    </article>
  );
};

export default ProjectItem;
