import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import * as Logo from "../../../assets/bola_raquel.png";
const Links = ["Início", "Sobre", "Serviços", "Contato"];

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
      <Box bg={"cornsilk"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box fontFamily={"Waterfall"} fontSize={"4xl"}>
              <Image src={Logo} />
            </Box>
          </HStack>

          <Flex alignItems={"center"}>
            <Flex justifyContent={"flex-end"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link}>
                    <Text fontFamily={"Forum"} size={"16px"}>
                      {link}
                    </Text>
                  </NavLink>
                ))}
              </HStack>
            </Flex>
            <StackDivider borderColor="gray.200" />
            <HStack divider={<StackDivider borderColor="gray.200" />} ml={4}>
              <Box>
                <BsInstagram />
              </Box>
              <Box>
                <BsWhatsapp />
              </Box>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
