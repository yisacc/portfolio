import Contact from "@/app/components/Contact";
import { cleanup, render, screen } from "../../test/utilities";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

it("it should render the component", () => {
  render(<Contact />);
});

it("has the correct title", () => {
  render(<Contact />);
  screen.getByText("Contact me");
});
it("should navigate accordingly", () => {
  render(<Contact />);
  expect(screen.getByRole("link", { name: "email me" })).toHaveAttribute(
    "href",
    "mailto:isaccab2019@gmail.com"
  );
});

it("should not fail any accessibility tests", async () => {
  const { container } = render(<Contact />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
