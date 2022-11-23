import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Waterfall', sans-serif`,
    body: `'Forum', sans-serif`,
  },
  body: {
    backgroundColor: "yellow.400",
  },
});

export default theme;
