import { Flex, Text, VStack } from "@chakra-ui/react";

export const BoxMiddle = () => {
  const handleClickGoToPs = () => {
    document.getElementById("psi")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Flex
      display={"grid"}
      justifyContent="center"
      fontFamily={"Poppins"}
      fontSize={18}
      bgColor="rgba(252, 210, 210, 0.6)"
      borderRadius="25px"
      maxW={"430px"}
      minH="425px"
      p={7}
      onClick={handleClickGoToPs}
    >
      <Text fontFamily={"Lato"} fontSize={30} fontWeight="bold">
        Psicologia
      </Text>

      <Flex display={"grid"}>
        <Text fontFamily={"Poppins"} fontSize={18}>
          Trabalho pela abordagem analítica e prezo muito pelo acolhimento e
          compreensão do paciente em sua totalidade, de forma ampla e profunda.
          🌸
        </Text>
        <Text>
          Durante o processo de terapia é possível desenvolver o
          autoconhecimento através da conscientização de traumas, feridas
          emocionais provindas da infância, crenças limitantes e autossabotagens
          que permanecem no inconsciente e ressignificar-los ✨
        </Text>
      </Flex>
    </Flex>
    // <VStack
    //   p={3}
    //   bgColor="rgba(252, 210, 210, 0.6)"
    //   borderRadius="25px"
    //   h={"500px"}
    //   maxW={"430px"}
    //   fontFamily={"Poppins"}
    //   fontSize={18}
    // >
    //   <Flex mt="20px">
    //     <Text fontFamily={"Lato"} fontSize={30} fontWeight="bold">
    //       Psicologia
    //     </Text>
    //   </Flex>
    //   <VStack p={"20px"} spacing={1}>
    //     <Text fontFamily={"Poppins"} fontSize={18}>
    //       Trabalho pela abordagem analítica e prezo muito pelo acolhimento e
    //       compreensão do paciente em sua totalidade, de forma ampla e profunda.
    //       🌸
    //     </Text>
    //     <Text>
    //       Durante o processo de terapia é possível desenvolver o
    //       autoconhecimento através da conscientização de traumas, feridas
    //       emocionais provindas da infância, crenças limitantes e autossabotagens
    //       que permanecem no inconsciente e ressignificar-los ✨
    //     </Text>
    //   </VStack>
    // </VStack>
  );
};
