import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  return (
    <div>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Corn Name" />
        <input type="text" name="origin" placeholder="Origin" />
        <input type="number" name="price" placeholder="Price per ear" />
        <input type="number" name="bushels" placeholder="Bushels In Stock" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default Form;
