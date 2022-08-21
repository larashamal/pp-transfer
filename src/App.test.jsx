import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import App from "./App";

it("renders without crashing", () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it("updates balance when we enter a valid input", () => {
  render(<App />);
  // Arrange
  const balance = screen.getByLabelText(/balance/i);
  const input = screen.getByLabelText(/input/i);
  const button = screen.getByRole("button");

  // Act
  userEvent.type(input, "30");
  userEvent.click(button);

  // Assert
  expect(balance.textContent).toBe("£70");
});
