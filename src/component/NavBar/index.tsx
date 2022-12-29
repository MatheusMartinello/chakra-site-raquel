import {
  Box,
  Container,
  Flex,
  Link,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { MiddleBox } from "./component/MiddleBox";
import { LeftBox } from "./component/LeftBox";
import { RightBox } from "./component/RightBox";

export const NavBar = () => {
  const [lessThen1024] = useMediaQuery("(min-width: 1024)");
  console.log(lessThen1024);
  return (
    <>
      <Box display={{ base: "none", md: "flex" }}>
        <LeftBox />
        <MiddleBox />
        <RightBox />
      </Box>
    </>
  );
};
