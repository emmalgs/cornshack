import React from "react";
import AddCornForm from "./AddCornForm";
import CornList from "./CornList";

class CornControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cornList: [],
      formVisibleOnPage: false,
      selectedCorn: null
    };
  }

  handleViewClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
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
    this.setState({selectedCorn: selectedCorn});
  }

  render(){
    let currentlyVisibleSate = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleSate = <AddCornForm 
        onCornCreation={this.handleAddingCorn} 
      />
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