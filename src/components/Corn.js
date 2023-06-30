import React from "react";
import PropTypes from "prop-types";

function Corn(props) {
  let earInformation = null;
  if (props.ears > 0) {
    earInformation = 
    <React.Fragment>
      Ears available: {props.ears} 
      </React.Fragment>} else {
      earInformation =
      <em>Out of stock</em>
    }
  return (
    <div>
      <div key={props.id} onClick = {() => props.whenCornClicked(props.id)}>
        <h4>{props.name}</h4>
        <p>Origin: {props.origin}</p>
        <p>${props.price}</p>
        <p>{earInformation}</p>
      </div>
    </div>
  );
}

Corn.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  whenCornClicked: PropTypes.func
};

export default Corn;