"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const router = useRouter();
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    router.push("/#" + targetId);
  };
  return (
    <Link {...props} onClick={scrollToSection}>
      {children}
    </Link>
  );
};

export default ScrollLink;
