// @vitest-environment happy-dom

import Footer from "@/app/components/footer";
import { render, screen, within } from "../../test/utilities";
import { socialLinks } from "@/lib/links";

it("it should render the component", () => {
  render(<Footer />);
});

it("has the correct title", () => {
  render(<Footer />);
  screen.getByText("Yisacc Aberham · Front-End Developer");
});

it("should render list of links", () => {
  render(<Footer />);
  const list = screen.getByRole("list", {
    name: "links",
  });
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(socialLinks.length);
});
