import React from "react";
import PropTypes from "prop-types";

function CornDetail(props){
  return (
    <div>
      <h1>{props.corn.name}</h1>
      <ul>
        <li>Origin: {props.corn.origin}</li>
        <li>Price: ${props.corn.price}</li>
        <li>Ears available: {props.corn.ears} <button onClick={() => props.sellCorn(props.corn.id)}>Sell Corn</button></li>
      </ul>
    </div>
  );
}

CornDetail.propTypes = {
  corn: PropTypes.object
}

export default CornDetail;