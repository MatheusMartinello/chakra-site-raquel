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
    <Container maxW="100%" paddingLeft={4}>
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
        <HStack spacing={20} width="100%" justifyContent={"flex-start"} ml={20}>
          <Button
            fontFamily={"Poppins"}
            fontSize={20}
            bg="#fff"
            onClick={() => handleClickArt()}
          >
            Arteterapia
          </Button>
          <Button
            fontFamily={"Poppins"}
            fontSize={20}
            bg="#fff"
            onClick={() => handleClickLocal()}
          >
            Local
          </Button>
          <Button
            fontFamily={"Poppins"}
            fontSize={20}
            bg="#fff"
            onClick={() => handleClickPhone()}
          >
            Contato
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};
