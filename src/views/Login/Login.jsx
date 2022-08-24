import Input from "components/Input";
import { useState } from "react";
import apiService from "api";

export default function Login() {
  const [user, setUser] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submitted");

    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    // TODO: Conditionally check if we have any information in the array (should be length of 1)

    apiService.findUser(username, password).then((loggedInUser) => {
      setUser(loggedInUser[0]);
    });
  };

  return (
    <form
      className="mx-auto flex w-48 flex-col items-center"
      onSubmit={handleSubmit}
    >
      <Input label="Username" />
      <Input label="Password" type="password" />

      <button
        type="submit"
        className="mt-4 rounded bg-purple-400 px-4 py-2 text-white"
      >
        Login
      </button>
    </form>
  );
}
