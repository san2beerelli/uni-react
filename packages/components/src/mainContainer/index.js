import React, { Component } from "react";
import styled from "styled-components/primitives";
import PropTypes from "prop-types";

const StyledView = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f2f2f2;
  justify-content: space-between;
`;

class Container extends Component {
  render() {
    return <StyledView>{this.props.children}</StyledView>;
  }
}

Container.displayName = "Container";

Container.propTypes = {
  children: PropTypes.any
};

export default Container;
