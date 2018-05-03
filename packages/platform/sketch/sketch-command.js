import React from "react";
import { Artboard, render } from "react-sketchapp";
import App from "../src/App";

const Document = () => (
  <Artboard name="Typography">
    <App />
  </Artboard>
);

export default () => {
  render(<Document />, context.document.currentPage());
};
