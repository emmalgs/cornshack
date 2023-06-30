import React from "react";
import AddCornForm from "./AddCornForm";
import CornList from "./CornList";
import CornDetail from "./CornDetail";
import EditCornForm from "./EditCornForm";
import Header from "./Header";

class CornControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cornList: someCorn,
      formVisibleOnPage: false,
      editing: false,
      selectedCorn: null,
      cornWallet: 0
    };
  }

  handleViewClick = () => {
    if (this.state.selectedCorn != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCorn: null,
        editing: false
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
      formVisibleOnPage: false,
      editing: false
    });
  }

  handleCornSelection = (id) => {
    const selectedCorn = this.state.cornList.filter(corn => corn.id === id);
    this.setState({selectedCorn: selectedCorn[0]});
  }

  handleCornSale = (id) => {
    console.log(this.state.cornWallet)
    const selectedCorn = this.state.cornList.filter(corn => corn.id === id);
    if (selectedCorn[0].ears > 0) {
      selectedCorn[0].ears -= 1;
      let updateWallet = this.state.cornWallet + selectedCorn[0].price;
      this.setState({
        selectedCorn: selectedCorn[0],
        cornWallet: updateWallet});
    }
  }

  handleEditClick = () => {
    this.setState({editing: true})
  }

  handleCornEdit = (cornUpdate) => {
    const editCornList = this.state.cornList
      .filter(corn => corn.id !== this.state.selectedCorn.id)
      .concat(cornUpdate);
    this.setState({
      cornList: editCornList,
      editing: false,
      selectedCorn: null
    });
  }

  render(){
    let currentlyVisibleSate = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleSate = <EditCornForm
        corn = {this.state.selectedCorn}
        onEditCorn={this.handleCornEdit} />
        buttonText="Return to All Corn" 
      } else if (this.state.formVisibleOnPage) {
      currentlyVisibleSate = <AddCornForm 
        onCornCreation={this.handleAddingCorn} 
      />
      buttonText="Return to All Corn"
    } else if (this.state.selectedCorn != null) {
      currentlyVisibleSate = <CornDetail
        corn = {this.state.selectedCorn}
        sellCorn={this.handleCornSale}
        onClickingEdit={this.handleEditClick} />
        buttonText="Return to All Corn"
    } else {
      currentlyVisibleSate = <CornList
        cornList={this.state.cornList}
        onCornSelection={this.handleCornSelection} />
        buttonText="Add Bushel of Corn"
    }

    return (
      <React.Fragment>
        <Header cornSales={this.state.cornWallet} />
        <div className="control">
          {currentlyVisibleSate}
          <button className="nav-btn" onClick={this.handleViewClick}>{buttonText}</button>
        </div>
      </React.Fragment>
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