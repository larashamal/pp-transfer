import Input from "components/Input";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Transfer({ user }) {
  const [transferStatus, setTransferStatus] = useState({
    amt: 0,
    msg: "",
    balance: user.balance,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const transferAmt = event.target.elements[0].value;

    if (transferAmt > transferStatus.balance) {
      setTransferStatus((prevTransferStatus) => ({
        ...prevTransferStatus,
        msg: `You can't transfer more than ${transferStatus.balance}`,
      }));
    } else {
      transferStatus.balance -= transferAmt;

      setTransferStatus((prevTransferStatus) => ({
        ...prevTransferStatus,
        amt: transferAmt,
        msg: "You transferred ",
      }));
    }

    event.target.reset();
  };
  return (
    <>
      <form
        className="mx-auto flex w-48 flex-col items-center"
        onSubmit={handleSubmit}
      >
        <Input label="Amount" type="number" />
        <button
          type="submit"
          className="py2 mt-4 rounded bg-green-500 px-4 text-white"
        >
          Submit
        </button>
      </form>

      <p>
        {transferStatus.msg} {transferStatus.amt > 0 && transferStatus.amt}
      </p>

      <p>Your balance is now: {transferStatus.balance}</p>
    </>
  );
}

Transfer.propTypes = {
  user: PropTypes.shape({ balance: PropTypes.number }).isRequired,
};
