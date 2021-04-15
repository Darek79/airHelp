export const Button = {
  // The styles all button have in common
  baseStyle: {
    textTransform: "uppercase",
    borderRadius: "base",
    bg: "gray.900", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
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
      },
    },
    solid: {
      bg: "purple.500",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
  },
};