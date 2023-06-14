import {
  IconDefinition,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface NavLinks {
  label: string;
  href: string;
}

interface SocialLinks extends NavLinks {
  icon: IconDefinition;
}

interface ExternalLinks extends NavLinks {
  className?: string;
  icon?: IconDefinition;
}
export const navLinks: NavLinks[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];
export const externalLinks: ExternalLinks[] = [
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/yisacc-aberham-7ba6221b0/",
    icon: faLinkedin,
  },
  { label: "Github", href: "https://github.com/yisacc", icon: faGithub },
  {
    label: "Resume",
    href: "https://fair-harpymimus-ddc.notion.site/Yisacc-Aberham-762d1a831c84460285f5d4bfa7025f07",
    className: "bg-magneta p-2 rounded hover:bg-hotmag",
  },
];
export const socialLinks: SocialLinks[] = [
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/yisacc-aberham-7ba6221b0/",
    icon: faLinkedin,
  },
  { label: "Github", href: "https://github.com/yisacc", icon: faGithub },
  { label: "Email", href: "mailto:isaccab2019@gmail.com", icon: faEnvelope },
];
