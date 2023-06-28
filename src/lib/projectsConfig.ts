import signerAppPic from "../../public/dHealthSigner.jpg";
import assemblyConnectPic from "../../public/assembly connect.png";
import fusionPic from "../../public/fusion.png";
import { StaticImageData } from "next/image";


export type Variants = "normal" | "inverted";

export const variantStyle: { [key in Variants]: string } = {
  normal: "text-right sm:col-start-5 sm:col-end-11",
  inverted: "text-left sm:col-start-1 sm:col-end-7",
};

export const imageVariantSryle: { [key in Variants]: string } = {
  normal: "sm:col-start-1 sm:col-end-6",
  inverted: "sm:col-start-6 sm:col-end-11",
};
export interface ProjectItems {
  title: string;
  subTitle: string;
  description: string;
  technologies: string[];
  imageSrc: StaticImageData;
  className: string;
  imageClass: string;
  listClass: string;
}

export const projects: ProjectItems[] = [
  {
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
  },
  {
    title: "WAVEOC Project",
    subTitle: "Assemble Connect Tenant Portal",
    description: `              <a
    href="https://myaccount.assembleconnect.com.au/login"
    target="_blank"
  >
    Assemble connect
  </a>
   provides utility services (hot water, electricity, and internet)
  to apartment tenants. Tenants can use the tenant portal to
  register, select a tariff plan, set up a payment method (bank
  account, card, or direct debit), generate monthly and weekly
  invoices, and disconnect the service.`,
    technologies: [
      "React",
      "Typescript",
      "Nest.js",
      "Styled Components",
      "AWS",
      "Redux",
    ],
    imageSrc: assemblyConnectPic,
    className: variantStyle["inverted"],
    imageClass: imageVariantSryle["inverted"],
    listClass: "sm:justify-start",
  },
  {
    title: "Excellerent Project",
    subTitle: "Fusion web application",
    description: `The
    <a
      href="https://blackbox.blackboxintelligence.com/"
      target="_blank"
    >
      Fusion
    </a>
    project bring together all of BBI core products
    (Workforce,Financial, Guest) into one product offering so users
    are capable of accessing all of BBI without having to log into
    multiple applications. The efforts done throughout this project
    will see an improved and modernized UI as well as an opportunity
    for current BBI users to utilize a SSO service to access their
    products.`,
    technologies: ["React", "Typescript", "Redux", ".Net", "CSS", "Azure"],
    imageSrc: fusionPic,
    className: variantStyle["normal"],
    imageClass: imageVariantSryle["normal"],
    listClass: "sm:justify-end",
  },
];
