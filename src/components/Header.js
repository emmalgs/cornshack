import React from "react";

function Header(props){
  return(
    <div className="header">
      <h1>CORNSHACK</h1>
      <p>Your Corn Wallet: ${props.cornSales}</p>
    </div>
  )
}

export default Header;