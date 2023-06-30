import React from "react";
import PropTypes from "prop-types";

function CornDetail(props){
  let earInformation = null;
  if (props.corn.ears > 0) {
    earInformation = 
    <React.Fragment>
      Ears available &#8594; {props.corn.ears} 
      <button onClick={() => props.sellCorn(props.corn.id)}>Sell Corn</button>
      </React.Fragment>} else {
      earInformation =
      <em>Out of stock</em>
    }
  
  return (
    <div className="corn-details">
      <h1>{props.corn.name}</h1>
      <ul>
        <li>Origin &#8594; <em>{props.corn.origin}</em></li>
        <li>Price &#8594; <strong>${props.corn.price}</strong></li>
        <li className="ear-info">{earInformation}</li>
      </ul>
      <button onClick={props.onClickingEdit}>Edit</button>
    </div>
  );
}

CornDetail.propTypes = {
  corn: PropTypes.object,
  onClickingEdit: PropTypes.func
}

export default CornDetail;