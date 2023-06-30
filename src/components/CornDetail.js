import React from "react";
import PropTypes from "prop-types";

function CornDetail(props){
  return (
    <div>
      <h1>{props.corn.name}</h1>
      <ul>
        <li>Origin: {props.corn.origin}</li>
        <li>Price: ${props.corn.price}</li>
        <li>Bushels in Stock: {props.corn.bushels}</li>
        <li>Ears available: {props.corn.ears}</li>
      </ul>
    </div>
  );
}

CornDetail.propTypes = {
  corn: PropTypes.object
}

export default CornDetail;