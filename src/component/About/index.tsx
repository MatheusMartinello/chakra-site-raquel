import { Box, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { BoxLeft } from "./component/BoxLeft";
import { BoxMiddle } from "./component/BoxMiddle";
import { BoxRight } from "./component/BoxRight";

export const About = () => {
  return (
    <Box
      mx={"50px"}
      my={5}
      w={"100%"}
      maxW={"1340px"}
      bgColor={"#f3f3f3"}
      id="about"
    >
      <Flex
        display={{ base: "grid", md: "grid", lg: "flex" }}
        justifyContent={"space-between"}
      >
        <BoxLeft />
        <BoxMiddle />
        <BoxRight />
      </Flex>
    </Box>
  );
};
