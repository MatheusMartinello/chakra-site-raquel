import { Box, Button, Flex, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/bola_raquel.png";
import { AiOutlinePhone } from "react-icons/ai";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
export const BottomOfThePage = () => {
  const redirectToInstagram = () => {
    window.open("https://www.instagram.com/raquel.artepsique/", "_blank");
  };
  const redirectToWhatsApp = () => {
    window.open("https://wa.me/+5541991787153", "_blank");
  };
  return (
    <Box w={"100%"} p={4} id={"phone"} fontSize={"1.05rem"}>
      <Flex flexDir={"row"} justifyContent="space-evenly">
        <VStack>
          <Box maxW={"120px"} p="20px">
            <Img src={Logo} borderRadius={"25px"} />
          </Box>
          <Text>Contato</Text>
          <HStack spacing={2}>
            <Button onClick={redirectToInstagram} bg="transparent">
              <FaInstagram />{" "}
            </Button>
            <Button onClick={redirectToWhatsApp} bg="transparent">
              <FaWhatsapp />
            </Button>
          </HStack>
          <Text>raquel.vicz@gmail.com</Text>
        </VStack>
        <Flex flexDir={"column"} w={"100%"} maxW="500px">
          <Box>
            <Text>Serviços</Text>
          </Box>

          <Flex justifyContent={"space-around"} fontSize={"1.05rem"}>
            <VStack w={"100%"} textAlign={"left"}>
              <Text>Terapia Online</Text>
              <Text>Psicóloga Clinica</Text>
              <Text>Arteterapia</Text>
              <Text>Arteterapeuta</Text>
              <Text>Terapia Analítica</Text>
              <Text>Psicanalista</Text>
            </VStack>
            <VStack w={"100%"} textAlign={"right"}>
              <Text>Dependência Emocional</Text>
              <Text>Ansiedade</Text>
              <Text>Depressão</Text>
              <Text>Autoconhecimento</Text>
              <Text>Compulsão Alimentar</Text>
              <Text>Relacionamentos</Text>
            </VStack>
          </Flex>
        </Flex>
        <VStack>
          <Text>Entre em contato para mais informações</Text>
          <Text display={"flex"} alignItems={"center"}>
            <AiOutlinePhone style={{ marginRight: "5px" }} />
            (41) 99178-7153
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};
