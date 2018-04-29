import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Typography } from "@unireact/components";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="display4" color="primary">
          Display4
        </Typography>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
