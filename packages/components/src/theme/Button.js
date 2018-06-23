import palette from "./Palette";
import spacing from "./Spacing";

const buttonBaseStyle = {
  borderRadius: 0,
  minWidth: 88,
  minHeight: 36,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 2,
  minWidth: spacing.unit * 11,
  backgroundColor: "#2196f3",
  padding: "8px"
};

const variants = {
  flat: {
    ...buttonBaseStyle
  },
  raised: {
    ...buttonBaseStyle
  },
  fab: {},
  bordered: {
    ...buttonBaseStyle
  },
  rounded: {
    ...buttonBaseStyle
  },
  block: {
    ...buttonBaseStyle
  }
};

const Button = {
  variants
};

export default Button;
