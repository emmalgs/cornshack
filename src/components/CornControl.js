import React from "react";
import Form from "./Form";

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

  render(){
    let currentlyVisibleSate = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleSate = <Form />
    }

    return (
      <div>
        {currentlyVisibleSate}
      </div>
    )
  }
}

export default CornControl;