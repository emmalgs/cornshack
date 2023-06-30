import React from "react";
import Corn from "./Corn";
import PropTypes from "prop-types";

function CornList(props){
  return (
    <div>
      {props.cornList.map((corn) =>
      <Corn
        whenCornClicked = {props.onCornSelection}
        name={corn.name}
        origin={corn.origin}
        price={corn.price}
        bushels={corn.bushels}
        id={corn.id}
        key={corn.id} />
        )}
    </div>
  );
}

CornList.propTypes = {
  cornList: PropTypes.array,
  onCornSelection: PropTypes.func
}

export default CornList;