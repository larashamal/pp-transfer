import apiService from "api";
import { useState } from "react";
import "./App.css";
import Login from "./views/Login/Login";
import Transfer from "./views/Transfer/Transfer";

function App() {
  const [user, setUser] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    apiService.findUser(username, password).then((loggedInUser) => {
      setUser(loggedInUser[0]);
    });

    console.log("submitted");
  };

  return (
    <>
      <h1> PalPay</h1>
      {user ? <Transfer user={user} /> : <Login handleSubmit={handleSubmit} />}
    </>
  );
}

export default App;
