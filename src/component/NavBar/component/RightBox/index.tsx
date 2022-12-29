import {
  Button,
  Container,
  Flex,
  HStack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";

export const RightBox = () => {
  const handleClickArt = () => {
    document.getElementById("art")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickLocal = () => {
    document.getElementById("local")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickPhone = () => {
    document.getElementById("phone")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container maxW="90%">
      <VStack divider={<StackDivider borderColor="gray.300" />} spacing={4}>
        <Flex
          alignContent={"center"}
          fontFamily={"Lato"}
          color={"gray.400"}
          mt={3}
        >
          <Text
            fontFamily={"Lato"}
            color={"gray.400"}
            fontSize={14}
            fontWeight={"bold"}
          >
            (41) 99178-7153
          </Text>
        </Flex>
        <Flex width="100%" justifyContent={"space-evenly"}>
          <Button
            fontFamily={"Poppins"}
            fontSize={20}
            bg="white"
            onClick={() => handleClickArt()}
          >
            Arteterapia
          </Button>
          <Button
            fontFamily={"Poppins"}
            fontSize={20}
            bg="white"
            onClick={() => handleClickLocal()}
          >
            Local
          </Button>
          <Button
            fontFamily={"Poppins"}
            fontSize={20}
            bg="white"
            onClick={() => handleClickPhone()}
          >
            Contato
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};
