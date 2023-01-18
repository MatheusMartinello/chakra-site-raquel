import {
  Button,
  Container,
  Flex,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
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
        <Flex width="100%" justifyContent={"space-evenly"}>
          <Button
            fontFamily={"Poppins"}
            fontSize={20}
            bg="#white"
            onClick={() => handleClickAbout()}
          >
            Início
          </Button>
          <Button
            fontFamily={"Poppins"}
            fontSize={20}
            bg="#white"
            onClick={() => handleClickGoToMe()}
          >
            Sobre
          </Button>
          <Button
            fontFamily={"Poppins"}
            fontSize={20}
            bg="#white"
            onClick={() => handleClickGoToPs()}
          >
            Psicologia
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};
