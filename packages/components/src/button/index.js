import React from "react";
import styled from "styled-components/primitives";
import PropTypes from "prop-types";
import theme from "../theme/Theme";
import { withTheme } from "styled-components";
import Typography from '../typography'

const validateProps = props => {
  return theme.button.variants.flat;
};

const StyledView = styled.View`
  ${props => validateProps(props)};
`;
const TopView = styled.View`
  display: flex;
  flex-direction: row;
`;
const StyledText = styled.Text``;

const Button = props => {
  console.log(props.theme);
  return (
    <TopView>
      <StyledView color={props.color} variant={props.variant}>
        <Typography variant="button" color="textPrimary">{props.children}</Typography>
      </StyledView>
    </TopView>
  );
};

Button.displayName = "Button";

Button.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.any
};

Button.defaultProps = {
  // align: "auto"
  //wrap: false
  //variants: theme.button.variants
};

export default withTheme(Button);
