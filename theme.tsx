import {extendTheme} from "@chakra-ui/react";

// import {ListItem} from "./styles/ListItem";

import {
  Grid,
  GridItem,
  SimpleGrid,
  Button,
  ButtonGroup,
  Text,
  Box,
  useMediaQuery,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  VStack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
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
    Button: {
      variants: {
        outline: {
          boxShadow: "Base",
          border: "2px solid",
          borderColor: "white",
          color: "white",
          backGroundColor: "gray.900",
          letterSpacing: "3px",
          _hover: {
            background: "green",
            color: "white",
            cursor: "pointer",
          },
        },
        solid: {
          bg: "purple.500",
          color: "white",
        },
      },
    },
    List: {
      variants: {
        outline: {
          bg: "blue",
          _hover: {
            cursor: "pointer",
          },
        },
      },
    },
  },
  breakpoints,
});

export default theme;
