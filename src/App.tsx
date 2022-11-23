import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { NavBar } from "./component/NavBar";
import theme from "./theme";
import "./style.css";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <NavBar />
      <Box p={4}>
        <h1>Conteúdo</h1>
      </Box>
    </Box>
  </ChakraProvider>
);
