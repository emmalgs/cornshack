import React from "react";
import PropTypes from "prop-types";

function CornDetail(props){
  let earInformation = null;
  if (props.corn.ears > 0) {
    earInformation = 
    <React.Fragment>
      Ears available: {props.corn.ears} 
      <button onClick={() => props.sellCorn(props.corn.id)}>Sell Corn</button>
      </React.Fragment>} else {
      earInformation =
      <em>Out of stock</em>
    }
  
  return (
    <div>
      <h1>{props.corn.name}</h1>
      <ul>
        <li>Origin: {props.corn.origin}</li>
        <li>Price: ${props.corn.price}</li>
        <li>{earInformation}</li>
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