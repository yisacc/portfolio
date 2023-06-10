import signerAppPic from "../../public/dHealthSigner.jpg";
import assemblyConnectPic from "../../public/assembly connect.png";
import fusionPic from "../../public/fusion.png";
import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageSrc: StaticImageData;
}

export const projects:Project[] = [
  {
    title: "dHealth Signer app",
    description: "dHealth Signer app",
    technologies: ["React Native", "Typescript", "Blockchain", "CSS"],
    imageSrc: signerAppPic,
  },
  {
    title: "Assemble Connect Tenant Portal",
    description: "Assemble Connect Tenant Portal",
    technologies: [
      "React",
      "Typescript",
      "Nest.js",
      "Styled Components",
      "AWS",
      "Redux",
    ],
    imageSrc: assemblyConnectPic,
  },
  {
    title: "Fusion web application",
    description: "Fusion web application",
    technologies: ["React", "Typescript", "Redux", ".Net", "CSS", "Azure"],
    imageSrc: fusionPic,
  },
];
