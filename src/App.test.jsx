import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

let balance;

beforeEach(() => {
  balance = 100;
});

it("renders the updated amount when the form is submitted", () => {
  const transferAmt = 50;
  const expectedSetMsg = `You transferred ${transferAmt}`;
  const expectedBalanceMsg = `Your balance is now: ${balance - transferAmt}`;

  render(<App />);
  const input = screen.getByLabelText(`How much would you like to transfer?`);
  userEvent.type(input, transferAmt.toString());
  userEvent.click(screen.getByRole("button"));

  expect(screen.getByText(expectedSetMsg)).toBeInTheDocument();
  expect(screen.getByText(expectedBalanceMsg)).toBeInTheDocument();
});

it("prevents negative balances from occuring", () => {
  // Arrange
  const transferAmt = 1000;
  const expectedMsg = `You can't transfer more than ${balance}`;
  // Act
  render(<App />);
  const input = screen.getByLabelText("How much would you like to transfer?");
  userEvent.type(input, transferAmt.toString());
  userEvent.click(screen.getByRole("button"));
  // Assert
  expect(screen.getByText(expectedMsg)).toBeInTheDocument();
});

it("updates correctly when you transfer twice", () => {
  // Arrange

  const transferOne = 30;
  const transferTwo = 10;
  // Act
  render(<App />);
  const input = screen.getByLabelText("How much would you like to transfer?");
  userEvent.type(input, transferOne.toString());
  userEvent.type(input, transferTwo.toString());
  userEvent.click(screen.getByRole("button"));
  // Assert
  const newBalance = `${balance - transferOne}`;
  expect(screen.getByDisplayValue(newBalance)).toBeInTheDocument();
});
