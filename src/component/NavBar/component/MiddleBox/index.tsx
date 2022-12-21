import { Box, Container, Flex, Img, Text, VStack } from "@chakra-ui/react";
import Logo from "../../../../assets/LogoSemFundo.png";
export const MiddleBox = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      style={{
        backgroundColor: "#f88e90",
        width: "270px",
        height: "125px",
        borderRadius: "0 0 25px 25px",
      }}
    >
      <Img src={Logo} w="55%" />
    </Flex>
  );
};
