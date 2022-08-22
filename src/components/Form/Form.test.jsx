import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Form from "./Form";

it("calls the submit handler whenever the form is submitted", () => {
  const handleSubmit = jest.fn();

  render(<Form handleSubmit={handleSubmit} />);

  const button = screen.getByRole("button");

  userEvent.click(button);
  expect(handleSubmit).toHaveBeenCalled();
});
