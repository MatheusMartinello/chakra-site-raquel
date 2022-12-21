import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Img,
  Link,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import Logo from "../../assets/bola_raquel.png";
import { MiddleBox } from "./component/MiddleBox";
import { LeftBox } from "./component/LeftBox";
import { RightBox } from "./component/RightBox";
const Links = ["Início", "Sobre", "Psicologia", "Arteterapia", "Contato"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("blue.50", "blue.50"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <VStack divider={<StackDivider borderColor="gray.100" />}>
        <Flex justifyContent={"space-between"} width="100%">
          <LeftBox />
          <MiddleBox />
          <RightBox />
        </Flex>
      </VStack>
    </>
  );
};
