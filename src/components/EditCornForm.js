import React from "react";
import Form from "./Form";
import PropTypes from "prop-types";

function EditCornForm (props) {

  function handleEditCornSubmission(event) {
    event.preventDefault();
    props.onEditCorn({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      ears: event.target.restock.value,
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

export default EditTicketFrom;