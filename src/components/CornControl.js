import React from "react";

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
      currentlyVisibleSate = <CornForm />
    }

    return (
      <div>
        {currentlyVisibleSate}
      </div>
    )
  }
}

export default CornControl;