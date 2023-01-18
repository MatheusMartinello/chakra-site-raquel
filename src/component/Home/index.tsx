import { Box, Flex, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import bgImg from "../../assets/LogoSemFundo.png";
import "./style.css";
export const Home = () => {
  return (
    <Box className="bg" mb="1" mt="-20PX">
      <Flex flex={"in-line"} justifyContent={"space-around"}>
        <Box>
          <Img
            src={bgImg}
            w={"100%"}
            m={{
              base: "0px 88px -50px 88px",
              md: "0px 88px -100px 88px",
              lg: "0px 88px -100px 88px",
            }}
            maxWidth={{ base: "150px", md: "350px" }}
          />
          <Text
            fontFamily={"Waterfall!important"}
            fontSize={{ base: "6xl", md: "8xl", lg: "8xl" }}
            color={"#d76b6d"}
          >
            Raquel Teodorovicz
          </Text>
          <Text
            fontSize="1xl"
            fontWeight={"regular"}
            color="black"
            mt="-20px"
            letterSpacing={"2px"}
          >
            <VStack spacing={2}>
              <HStack spacing={6}>
                <Text>Psicóloga</Text>
                <Text ml="30px">Arteterapeuta</Text>
              </HStack>
              <Text>CRP 08/32533</Text>
            </VStack>
          </Text>
        </Box>
      </Flex>
      <Flex
        display={"grid"}
        justifyContent={"flex-end"}
        color={"#ffff"}
        mr={"30px"}
        mb={"20px"}
        mt={{ base: 0, md: "-40px", lg: "-40px" }}
      >
        <Box bgColor={"#f88e90"} p={2} borderRadius={"25px"}>
          <Flex display={"grid"}>
            <Text>presencial</Text>
          </Flex>
          <Text>on-line</Text>
        </Box>
      </Flex>
    </Box>
    //     <Img src={bgImg} w={"100%"} mb={"-100px"} maxWidth={"300px"} />
    //     <Text
    //       fontFamily={"Waterfall!important"}
    //       fontSize="8xl"
    //       color={"#f88e90"}
    //     >
    //       Raquel Teodorovicz
    //     </Text>
    //     <Text fontSize="1xl" fontWeight={"regular"} color="white" mt="-20px">
    //       <VStack spacing={2}>
    //         <HStack spacing={4}>
    //           <Text>Psicóloga</Text>
    //           <Text>Arteterapeuta</Text>
    //         </HStack>
    //         <Text>CRP 08/32533</Text>
    //       </VStack>
    //     </Text>
    //   </VStack>
    //   <Box m={0}>
    //     <Img maxW={375} src={Rach} p={"20px"} mt="35px" />
    //   </Box>
    // </HStack>
  );
};
