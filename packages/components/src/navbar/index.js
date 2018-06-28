import React, { Component } from "react";
import PropTypes from "prop-types";
import NavButton from "./navbutton";
import styled from "styled-components/primitives";

const NavBarView = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
`;
class NavBar extends Component {
  state = {
    selectedItem: this.props.navItems[0]
  };
  onNavButtonPress(clickedItem) {
    const { selectedItem } = this.state;
    if (clickedItem.type !== selectedItem.type) {
      this.setState({ selectedItem: clickedItem });
      this.props.navChange(clickedItem);
    }
  }
  render() {
    const { navItems } = this.props;
    const { selectedItem } = this.state;
    return (
      <NavBarView>
        {navItems.map((item, indx) => {
          const selected = item.type === selectedItem.type;
          return (
            <NavButton
              buttonItem={item}
              key={`navigation-${indx}`}
              selected={selected}
              onButtonPress={clickedItem => this.onNavButtonPress(clickedItem)}
            />
          );
        })}
      </NavBarView>
    );
  }
}

NavBar.displayName = "NavBar";
NavBar.propTypes = {
  children: PropTypes.any,
  navItems: PropTypes.array,
  navChange: PropTypes.func.isRequired
};
export default NavBar;
