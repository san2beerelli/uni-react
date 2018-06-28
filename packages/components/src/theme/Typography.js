import palette from "./Palette";

const baseTypography = {
  fontFamily: "Roboto",
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500
};

const variants = {
  display4: {
    fontSize: 48,
    fontWeight: baseTypography.fontWeightLight,
    fontFamily: baseTypography.fontFamily,
    letterSpacing: 0,
    color: palette.textSecondary
  },
  display3: {
    fontSize: 40,
    fontWeight: baseTypography.fontWeightRegular,
    fontFamily: baseTypography.fontFamily,
    letterSpacing: 0,
    color: palette.textSecondary
  },
  display2: {
    fontSize: 32,
    fontWeight: baseTypography.fontWeightRegular,
    fontFamily: baseTypography.fontFamily,
    color: palette.textSecondary
  },
  display1: {
    fontSize: 24,
    fontWeight: baseTypography.fontWeightRegular,
    fontFamily: baseTypography.fontFamily,
    color: palette.textSecondary
  },
  headline: {
    fontSize: 20,
    fontWeight: baseTypography.fontWeightRegular,
    fontFamily: baseTypography.fontFamily,
    color: palette.textPrimary
  },
  title: {
    fontSize: 20,
    fontWeight: baseTypography.fontWeightMedium,
    fontFamily: baseTypography.fontFamily,
    color: palette.textPrimary
  },
  subheading: {
    fontSize: 16,
    fontWeight: baseTypography.fontWeightRegular,
    fontFamily: baseTypography.fontFamily,
    color: palette.textPrimary
  },
  body2: {
    fontSize: 16,
    fontWeight: baseTypography.fontWeightMedium,
    fontFamily: baseTypography.fontFamily,
    color: palette.textPrimary
  },
  body1: {
    fontSize: 16,
    fontWeight: baseTypography.fontWeightRegular,
    fontFamily: baseTypography.fontFamily,
    color: palette.textPrimary
  },
  caption: {
    fontSize: 12,
    fontWeight: baseTypography.fontWeightRegular,
    fontFamily: baseTypography.fontFamily,
    color: palette.textSecondary
  },
  button: {
    fontSize: 12,
    fontWeight: baseTypography.fontWeightMedium,
    fontFamily: baseTypography.fontFamily,
    color: palette.textSecondary
  }
};

const Typography = {
  variants
};

export default Typography;
