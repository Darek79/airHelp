import {extendTheme} from "@chakra-ui/react";
import {Button} from "./styles/Button";
import {Input} from "./styles/Input";
import {createBreakpoints} from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "20em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const theme = extendTheme({
  fonts: {
    body: "Roboto",
  },
  colors: {
    black: "#0b090a",
    grey: "#161a1d",
    darkred: "#660708",
    almostw: "#f5f3f4",
    signalred: "#e5383b",
    yelllow: "#ffbe0b",
    green: "#A9C670",
    darkgrey: "#343a40",
    lachs: "#E4816B",
  },
  components: {
    Button,
  },
  breakpoints,
});

export default theme;
