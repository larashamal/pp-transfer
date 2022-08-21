import { useState } from "react";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(100);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  function handleClick() {
    if (amount <= balance && amount > 0) {
      setBalance(balance - amount);
      setMessage(`£${amount} transferred.`);
    } else {
      setMessage(`insufficient funds`);
    }
  }

  const handleChange = (event) => setAmount(event.target.value);

  return (
    <div className="flex flex-col justify-center">
      <h1
        aria-label="balance"
        className=" mx-6 my-6 text-center text-3xl font-semibold"
      >
        £{balance}
      </h1>
      <input
        className="my-6 mx-auto border border-purple-400"
        aria-label="input"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleClick}
        className="mx-auto max-w-fit rounded-full bg-purple-400 py-1 px-4 text-white hover:bg-purple-600"
      >
        {" "}
        Submit{" "}
      </button>

      <p className="mx-auto mt-6 max-w-fit rounded-xl border border-purple-300 bg-purple-100 p-2 text-center">
        {message}
      </p>
    </div>
  );
}

export default App;
