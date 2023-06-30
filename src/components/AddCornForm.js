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
      price: event.target.price.value,
      bushels: event.target.bushels.value,
      ears: event.target.bushels.value * 112,
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