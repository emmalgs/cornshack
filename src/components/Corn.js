import React from "react";
import PropTypes from "prop-types";

function Corn(props) {
  return (
    <div>
      <div onClick = {() => props.whenCornClicked(props.id)}>
        <h4>{props.name}</h4>
        <p>Origin: {props.origin}</p>
        <p>${props.price}</p>
        <p>Ears in Stock: {props.ears}</p>
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