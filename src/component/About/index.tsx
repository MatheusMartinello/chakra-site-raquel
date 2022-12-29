import { Box, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { BoxLeft } from "./component/BoxLeft";
import { BoxMiddle } from "./component/BoxMiddle";
import { BoxRight } from "./component/BoxRight";

export const About = () => {
  return (
    <Box px={10} my={5} w={"100%"} bgColor={"#f3f3f3"} id="about">
      <Flex
        display={{ base: "grid", md: "flex", lg: "flex" }}
        justifyContent={{
          base: "center",
          md: "space-between",
          lg: "space-between",
        }}
      >
        <BoxLeft />
        <BoxMiddle />
        <BoxRight />
      </Flex>
    </Box>
  );
};
