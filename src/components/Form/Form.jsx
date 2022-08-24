import PropTypes from "prop-types";

export default function Form({ handleSubmit, children }) {
  return (
    <form
      className="mx-auto flex w-48 flex-col items-center"
      handleSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
