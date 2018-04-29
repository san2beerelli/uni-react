import React from "react";
import styled from "styled-components/primitives";
import PropTypes from "prop-types";
import theme, { filterProps } from "../theme/Theme";

const wrapProps = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};
const validateProps = props => {
  let variant = theme.typography.variants[props.variant];
  if (variant && props.color) {
    variant.color = theme.palette[props.color];
  }
  if (variant && props.align) {
    // variant.textAlign = props.align;
  }
  if (variant && props.wrap) {
    variant = { ...variant, ...wrapProps };
  }
  return variant;
};
const Typography = styled.Text`
  ${props => validateProps(props)};
`;

Typography.displayName = "Typography";

Typography.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.oneOf(["auto", "left", "right", "center", "justify"]),

  wrap: PropTypes.bool
};

Typography.defaultProps = {
  // align: "auto"
  //wrap: false
  //variants: theme.typography.variants
};

export default Typography;
