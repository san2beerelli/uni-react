//import palx from "palx";
//import { removeProps } from "styled-system";
import typography from "./Typography";
import palette from "./Palette";

const spacing = {
  unit: 8
};

/* const red = "#e42d42";
const blue = "#2d9ce4";
export const palette = palx(blue);

export const grays = {
  black: palette.black,
  slate: palette.gray[8],
  silver: palette.gray[7],
  smoke: palette.gray[2],
  snow: palette.gray[0],
  white: "#ffffff"
};

export const brand = {
  primary: red,
  accent: palette.indigo[4],
  success: palette.teal[5],
  info: palette.blue[5],
  warning: palette.orange[5],
  error: palette.red[7],
  muted: grays.silver
};

export const colors = {
  ...brand,
  ...grays,
  ...palette
};

export const cx = key => get(colors, key, key);

const createMediaQuery = n => `@media screen and (min-width:${n}em)`;

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      }
    })
  );

export const breakpoints = [32, 48, 64, 80];

export const mediaQueries = breakpoints.map(createMediaQuery);

const aliases = ["sm", "md", "lg", "xl"];

addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

export const font = 'Averta,"Avenir Next","Segoe UI",Roboto,sans-serif';
export const mono = 'SFMono-Regular,"Roboto Mono",Menlo,monospace';

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96];

export const regular = 400;
export const bold = 700;

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = { regular, bold };

// styled-system’s `borderRadius` function can hook into the `radii` object/array
export const radii = ["0px", "4px", "8px", "16px", "9999px"];
export const radius = "4px";
export const pill = radii[4];

export const shadowColor = "rgba(0,0,0,0.16)";
export const baseShadow = "0 0 2px 0 rgba(0,0,0,.08),";
export const boxShadows = [
  baseShadow + `0 2px 4px 0 ${shadowColor}`,
  baseShadow + `0 4px 8px 0 ${shadowColor}`,
  baseShadow + `0 12px 12px 0 ${shadowColor}`,
  baseShadow + `0 24px 24px 0 ${shadowColor}`
];

export const filterProps = props =>
  omit(removeProps(props), [
    "theme",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "color",
    "bg",
    "fill",
    "fontSize",
    "f",
    "image",
    "maxWidth",
    "bold",
    "regular",
    "caps",
    "wrap",
    "size",
    "height",
    "boxShadowSize"
  ]); */

const theme = {
  typography,
  palette,
  spacing
};

export default theme;
