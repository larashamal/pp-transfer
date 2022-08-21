import { useState } from "react";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(100);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  function handleClick() {
    if (amount <= balance && amount > 0) {
      setBalance(balance - amount);
      setMessage(`${amount} transferred.`);
    } else {
      setMessage(`insufficient funds`);
    }
  }

  const handleChange = (event) => setAmount(event.target.value);

  return (
    <>
      <p aria-label="balance">£{balance}</p>
      <input className="border" aria-label="input" onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        {" "}
        Submit{" "}
      </button>

      <p>{message}</p>
    </>
  );
}

export default App;
