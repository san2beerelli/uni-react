import React, { Fragment } from "react";
import styled, { ThemeProvider as Root } from "styled-components";
import theme from "./Theme";

const ThemeProvider = props => (
  <Root
    theme={theme}
    {...props}
    children={<Fragment>{props.children}</Fragment>}
  />
);

export default ThemeProvider;
