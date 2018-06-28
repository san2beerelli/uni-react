import React, { Component } from "react";
import styled from "styled-components/primitives";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const StyledImage = styled.Image`
  height: 24px;
  width: 36px;
`;

class NavButton extends Component {
  render() {
    const { buttonItem, selected, onButtonPress } = this.props;
    const imgSrc = selected ? buttonItem.img_selected : buttonItem.img;
    return (
      <TouchableOpacity onPress={() => onButtonPress(buttonItem)}>
        <StyledImage resizeMode="contain" source={imgSrc} />
      </TouchableOpacity>
    );
  }
}

NavButton.displayName = "NavButton";
NavButton.propTypes = {
  buttonItem: PropTypes.object,
  selected: PropTypes.bool,
  onButtonPress: PropTypes.func
};
NavButton.defaultProps = {
  selected: false
};
export default NavButton;
