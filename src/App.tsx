import * as React from "react";
import { ChakraProvider, Box, Img, Container } from "@chakra-ui/react";
import { NavBar } from "./component/NavBar";
import theme from "./theme";
import "./style.css";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Me } from "./component/Me";
import { Art } from "./component/Art";
import { Psychology } from "./component/Psychology";
import { BottomOfThePage } from "./component/BottomOfThePage";
import { Testimonials } from "./component/Testemoniun";
import { Local } from "./component/Local";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      as="div"
      textAlign="center"
      fontSize={{ base: "sm", lg: "xl", md: "xl" }}
      bgColor={"#f3f3f3"}
    >
      <a
        href="https://api.whatsapp.com/send?phone=5541991787153"
        className="float"
        target="_blank"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
      <NavBar />
      <Home />
      <About />
      <Testimonials />
      <Me />
      <Psychology />
      <Art />
      <Local />
      <BottomOfThePage />
    </Box>
  </ChakraProvider>
);
