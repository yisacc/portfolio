import Footer from "@/app/components/footer";
import { render, screen, within } from "../../test/utilities";
import { socialLinks } from "@/lib/links";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

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

it("should not fail any accessibility tests", async () => {
  const { container } = render(<Footer />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
