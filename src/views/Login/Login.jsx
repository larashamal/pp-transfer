import Input from "components/Input";
import PropTypes from "prop-types";

export default function Login({ handleSubmit }) {
  return (
    <form
      className="mx-auto flex w-48 flex-col items-center"
      onSubmit={handleSubmit}
    >
      <Input label="Username" />
      <Input label="Password" type="password" />

      <button
        type="submit"
        className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
      >
        Login
      </button>
    </form>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
