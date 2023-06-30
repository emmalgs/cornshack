import React from "react";
import PropTypes from "prop-types";

function Corn(props) {
  return (
    <div>
      <div onClick = {() => props.whenCornClicked(props.id)}>
        <h4>{props.name}</h4>
        <p>Origin: {props.origin}</p>
        <p>${props.price}</p>
        <p>Bushels in Stock: {props.bushels}</p>
      </div>
    </div>
  );
}

Corn.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  bushels: PropTypes.number,
  id: PropTypes.string,
  whenCornClicked: PropTypes.func
};

export default Corn;