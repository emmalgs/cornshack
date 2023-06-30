import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  return (
    <div>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Corn Name" />
        <input type="text" name="origin" placeholder="Origin" />
        <input type="number" name="price" step="0.01" placeholder="Price per ear" />
        <label>
        <input type="checkbox" name="restock" value="112" />Restock?</label>
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
