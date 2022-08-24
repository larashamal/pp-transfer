import PropTypes from "prop-types";

export default function Input({ label, type }) {
  return (
    <div>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        type={type}
        id={label.toLowerCase()}
        className="rounded border pl-2"
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
};
