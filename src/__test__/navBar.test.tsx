import NavBar from "@/app/components/NavBar";
import { render, screen } from "../../test/utilities";
import { vi } from "vitest";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);


beforeAll(() => {
  vi.mock("next/navigation", () => require("next-router-mock"));
});
it("it should render the component", () => {
  render(<NavBar />);
});

it('has an anchor tag with href="#contact"', () => {
  render(<NavBar />);
  expect(screen.getByText("Contact")).toHaveAttribute("href", "#contact");
});

it("should not fail any accessibility tests", async () => {
  const { container } = render(<NavBar />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

