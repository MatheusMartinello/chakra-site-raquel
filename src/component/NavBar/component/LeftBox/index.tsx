import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import scrollElement from "react-scroll/modules/mixins/scroll-element";
export const LeftBox = () => {
  const handleClickAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };
  const handleClickGoToMe = () => {
    document.getElementById("me")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickGoToPs = () => {
    document.getElementById("psi")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container maxW="100%" paddingLeft={4}>
      <VStack divider={<StackDivider borderColor="gray.300" />} spacing={4}>
        <Flex
          alignContent={"center"}
          fontFamily={"Lato"}
          color={"gray.400"}
          mt={3}
        >
          <MdOutlineEmail
            color="gray.400"
            size={16}
            style={{ marginTop: "2.5px" }}
          />
          <Text
            fontFamily={"Lato"}
            color={"gray.400"}
            fontSize={14}
            fontWeight={"bold"}
          >
            raquel.vicz@gmail.com
          </Text>
        </Flex>
        <HStack
          spacing={20}
          width="100%"
          justifyContent={"flex-end"}
          marginRight={20}
        >
          <Button
            fontFamily={"Poppins"}
            fontSize={20}
            bg="#ffff"
            onClick={() => handleClickAbout()}
          >
            Início
          </Button>
          <Button
            fontFamily={"Poppins"}
            fontSize={20}
            bg="#ffff"
            onClick={() => handleClickGoToMe()}
          >
            Sobre
          </Button>
          <Button
            fontFamily={"Poppins"}
            fontSize={20}
            bg="#ffff"
            onClick={() => handleClickGoToPs()}
          >
            Psicologia
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};
