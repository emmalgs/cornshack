import React from "react";
import AddCornForm from "./AddCornForm";
import CornList from "./CornList";
import CornDetail from "./CornDetail";

class CornControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cornList: someCorn,
      formVisibleOnPage: false,
      selectedCorn: null
    };
  }

  handleViewClick = () => {
    if (this.state.selectedCorn != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCorn: null,
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingCorn = (newCorn) => {
    const newCornList = this.state.cornList.concat(newCorn);
    this.setState({
      cornList: newCornList,
      formVisibleOnPage: false
    });
  }

  handleCornSelection = (id) => {
    const selectedCorn = this.state.cornList.filter(corn => corn.id === id);
    this.setState({selectedCorn: selectedCorn[0]});
  }

  handleCornSale = (id) => {
    const selectedCorn = this.state.cornList.filter(corn => corn.id === id);
    if (selectedCorn[0].ears > 0) {
      selectedCorn[0].ears -= 1;
      this.setState({selectedCorn: selectedCorn[0]});
    }
  }

  render(){
    let currentlyVisibleSate = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleSate = <AddCornForm 
        onCornCreation={this.handleAddingCorn} 
      />
      buttonText="Return to All Corn"
    } else if (this.state.selectedCorn != null) {
      currentlyVisibleSate = <CornDetail
        corn = {this.state.selectedCorn}
        sellCorn={this.handleCornSale} />
        buttonText="Return to All Corn"
    } else {
      currentlyVisibleSate = <CornList
        cornList={this.state.cornList}
        onCornSelection={this.handleCornSelection} />
        buttonText="Add New Corn"
    }

    return (
      <div>
        {currentlyVisibleSate}
        <button onClick={this.handleViewClick}>{buttonText}</button>
      </div>
    )
  }
}

export default CornControl;

const someCorn = [
  {
    name: "Golden Shafts of Glory",
    origin: "Indiana",
    price: 5.55,
    ears: 112,
    id: "great"
  },
  {
    name: "Creamed Corn of the Gods",
    origin: "Peru",
    price: 8.99,
    ears: 112,
    id: "cool"
  },
  {
    name: "Rainbow Nuggets",
    origin: "Guatemala",
    price: 7.32,
    ears: 112,
    id: "awesome"
  },
  {
    name: "Popping Ploppers",
    origin: "Illinois",
    price: 2.05,
    ears: 112,
    id: "scrunch"
  }
]