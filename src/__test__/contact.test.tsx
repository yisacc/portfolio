import Contact from "@/app/components/Contact";
import { render, screen } from "../../test/utilities";

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
