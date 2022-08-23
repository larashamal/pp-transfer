import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const testBalance = 100;

it("renders the updated amount when the form is submitted", () => {
  const transferAmt = 50;
  const expectedTransferMsg = `You transferred ${transferAmt}`;
  const expectedBalanceMsg = `Your balance is now: ${
    testBalance - transferAmt
  }`;

  render(<App />);
  const input = screen.getByLabelText("How much would you like to transfer?");
  userEvent.type(input, transferAmt.toString());
  userEvent.click(screen.getByRole("button"));

  expect(screen.getByText(expectedTransferMsg)).toBeInTheDocument();
  expect(screen.getByText(expectedBalanceMsg)).toBeInTheDocument();
});

it("prevents negative balances from occurring", () => {
  const transferAmt = 1000;
  const expectedMsg = `You can't transfer more than ${testBalance}`;

  render(<App />);
  const input = screen.getByLabelText("How much would you like to transfer?");
  userEvent.type(input, transferAmt.toString());
  userEvent.click(screen.getByRole("button"));

  expect(screen.getByText(expectedMsg)).toBeInTheDocument();
});

it("updates the balance after multiple transfers", () => {
  const transferAmt1 = 20;
  const transferAmt2 = 30;

  const expectedBalanceMsg = `Your balance is now: ${
    testBalance - transferAmt1 - transferAmt2
  }`;

  render(<App />);

  const input = screen.getByLabelText("How much would you like to transfer?");
  userEvent.type(input, transferAmt1.toString());
  userEvent.click(screen.getByRole("button"));

  userEvent.type(input, transferAmt2.toString());
  userEvent.click(screen.getByRole("button"));

  expect(screen.getByText(expectedBalanceMsg)).toBeInTheDocument();
});
