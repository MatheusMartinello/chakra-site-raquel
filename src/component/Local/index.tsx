import { Box, Container, Flex, Image, Img, Text } from "@chakra-ui/react";
import Local1 from "../../assets/Local/local1.png";
import Local2 from "../../assets/Local/local2.png";
import Local3 from "../../assets/Local/local3.png";
import Local4 from "../../assets/Local/local4.png";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./style.css";
export const Local = () => {
  return (
    <Box
      bgColor={"#c2c4"}
      borderRadius={"25px"}
      padding={"20px"}
      my={"25px"}
      mx={"90px"}
      id={"local"}
    >
      <Flex justifyContent={"space-evenly"} alignItems={"center"}>
        <Box display={"grid"} p={10} maxW={"420px"}>
          <Text fontFamily={"Jost"} fontWeight={"bold"} fontSize={"30px"}>
            Local
          </Text>
          <Text mt={"5px"}>
            Meu local está localizado no centro de Curitiba, na praça Tiradentes
          </Text>
          <Text mt={"5px"}>
            Edifício Santa Maria - Praça Zacarias, 58 - Sala 603 - Centro,
            Curitiba - PR, 80020-080
          </Text>
        </Box>
        <Box maxWidth={"420px"} mt={"20px"} borderRadius={"10px"}>
          <Carousel autoPlay infiniteLoop showArrows>
            <Img src={Local2} />
            <Img src={Local3} />
            <Img src={Local4} />
            <Img src={Local1} />
          </Carousel>
        </Box>
      </Flex>
    </Box>
  );
};
