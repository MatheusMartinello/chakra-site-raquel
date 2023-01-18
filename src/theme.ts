import { extendTheme } from "@chakra-ui/react";
import bgImage from "./assets/fundo.webp";

const theme = extendTheme({
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Jost', sans-serif`,
  },
  body: {
    lineWeight: 1.4,
  },
});

export default theme;
