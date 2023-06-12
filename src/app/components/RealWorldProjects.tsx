import { projects } from "@/lib/projectsConfig";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div className="bg-dkblue">
      <section id="projects" className="py-16 px-4 max-w-[1200px] mx-auto">
        <h2 className="leading-normal text-4xl mb-14">
          Projects I&apos;m proud of
        </h2>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </section>
    </div>
  );
};
export default Projects;
