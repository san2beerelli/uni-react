import React, { Component } from "react";
import styled from "styled-components/primitives";
import PropTypes from "prop-types";

const StyledView = styled.View`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-color: #979797;
  border-bottom-width: 0.5px;
  border-top-color: #979797;
  border-top-width: 0.5px;
  background-color: #f2f2f2;
`;

class AppBar extends Component {
  render() {
    return <StyledView>{this.props.children}</StyledView>;
  }
}

AppBar.displayName = "AppBar";

AppBar.propTypes = {
  children: PropTypes.any,
  top: PropTypes.bool
};

export default AppBar;
