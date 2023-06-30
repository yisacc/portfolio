import { render, screen } from "../../test/utilities";
import Introduction from "@/app/components/Introduction";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

it("it should render the component", () => {
  render(<Introduction />);
});

it("has the correct title", () => {
  render(<Introduction />);
  screen.getByText("Hi, my name is");
});

it("should not fail any accessblity tests", async () => {
  const { container } = render(<Introduction />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
