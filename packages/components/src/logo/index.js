import React from "react";
import styled from "styled-components/primitives";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";

const LogoImage = styled.Image`
  width: 113px;
  height: 34px;
`;

const Logo = props => {
  return <LogoImage source={props.source} />;
};

Logo.displayName = "Logo";
Logo.propTypes = {
  source: PropTypes.any
};

export default withTheme(Logo);
