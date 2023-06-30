import React from "react";
import PropTypes from "prop-types";
import Form from "./Form";
import { v4 } from "uuid";

function AddCornForm(props) {

  function handleNewCornSubmission(event) {
    event.preventDefault();
    props.onCornCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      ears: event.target.restock.value,
      id: v4()
    });
  }

  return (
    <div>
      <Form
        formSubmissionHandler={handleNewCornSubmission}
        buttonText="Add New Corn" />
    </div>
  );
}

AddCornForm.propTypes = {
  onCornCreation: PropTypes.func
};

export default AddCornForm;