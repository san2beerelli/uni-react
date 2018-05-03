import React, { Component, Fragment } from "react";
import { Typography } from "@unireact/components";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="display4" color="primary">
          display4
        </Typography>
        <Typography variant="display3" color="secondary">
          display3
        </Typography>
        <Typography variant="display2" color="error">
          display2
        </Typography>
        <Typography variant="display1" color="primaryDark">
          display1
        </Typography>
        <Typography variant="title" color="primaryLight">
          title
        </Typography>
        <Typography color="primaryLight" align="right" display="inherit">
          santhosh
        </Typography>
      </Fragment>
    );
  }
}

export default App;
