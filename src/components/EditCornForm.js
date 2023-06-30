import React from "react";
import Form from "./Form";
import PropTypes from "prop-types";

function EditCornForm (props) {

  function handleEditCornSubmission(event) {
    event.preventDefault();
    let earValue = null;
    if (event.target.restock.checked) {
      earValue = event.target.restock.value
    } else {
      earValue = props.corn.ears
    }
    props.onEditCorn({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      ears: earValue,
      id: props.corn.id
    })
  }
  return (
    <div>
      <Form 
        formSubmissionHandler={handleEditCornSubmission} 
        buttonText="Update Corn" />
    </div>
  )
}

EditCornForm.propTypes = {
  corn: PropTypes.object,
  onEditCorn: PropTypes.func
}

export default EditCornForm;