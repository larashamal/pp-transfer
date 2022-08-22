import PropTypes from "prop-types";

export default function Form({ handleSubmit }) {
  return (
    <form
      className="mx-auto flex w-48 flex-col items-center"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="amt" className="text-center text-3xl">
          How much would you like to transfer?
        </label>
        <input
          type="number"
          placeholder="enter amount here"
          id="amt"
          className="my-6 mx-auto border border-purple-400"
        />
      </div>
      <button
        type="submit"
        className="mx-auto max-w-fit rounded-full bg-purple-400 py-1 px-4 text-white hover:bg-purple-600"
      >
        Submit
      </button>
    </form>
  );
}
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
