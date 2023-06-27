import { render, screen } from "../../test/utilities";
import Introduction from "@/app/components/Introduction";

it("it should render the component", () => {
  render(<Introduction />);
});

it("has the correct title", () => {
  render(<Introduction />);
  screen.getByText("Hi, my name is");
});
