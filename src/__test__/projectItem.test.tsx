import {
  ProjectItems,
  imageVariantSryle,
  variantStyle,
} from "@/lib/projectsConfig";
import { render, screen } from "../../test/utilities";
import ProjectItem from "@/app/components/ProjectItem";
import signerAppPic from "/public/dHealthSigner.jpg";
import { vi } from "vitest";

beforeAll(() => {
  vi.mock("next/image", () => ({
    __esModule: true,
    default: (props: any) => {
      return <img {...props} />;
    },
  }));
});

let project: ProjectItems = {
  title: "Latest Project",
  subTitle: "dHealth Signer app",
  description: `The dHealth signer app is a non custodial client (wallet) that
allows users to interact with dApps in the dHealth Ecosystem and
view and maintain your DHP balance. The 
<a href='https://www.dhealth.com/' target="_blank">
  dHealth signer app
</a>
additionally supports signing of all dHealth transactions.p`,
  technologies: ["React Native", "Typescript", "Blockchain", "CSS"],
  imageSrc: signerAppPic,
  className: variantStyle["normal"],
  imageClass: imageVariantSryle["normal"],
  listClass: "sm:justify-end",
};

it("it should render the component", () => {
  render(<ProjectItem {...project} />);
});

it("should have the correct data", () => {
  render(<ProjectItem {...project} />);
  screen.getByText(project.title);
  screen.getByText(project.subTitle);
});
