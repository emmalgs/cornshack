import React from "react";
import AddCornForm from "./AddCornForm";

class CornControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cornList: [],
      formVisibleOnPage: false
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

  render(){
    let currentlyVisibleSate = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleSate = <AddCornForm 
        onCornCreation={this.handleAddingCorn} 
      />
    }

    return (
      <div>
        {currentlyVisibleSate}
      </div>
    )
  }
}

export default CornControl;