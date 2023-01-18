import { Flex, Hide, Show, Text, VStack } from "@chakra-ui/react";

export const BoxMiddle = () => {
  const handleClickGoToPs = () => {
    document.getElementById("psi")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Flex
      display={"grid"}
      justifyContent="center"
      fontFamily={"Poppins"}
      bgColor="rgba(252, 210, 210, 0.6)"
      borderRadius="25px"
      maxW={"430px"}
      minH={{ base: "0", md: "425px", lg: "425px" }}
      p={7}
      onClick={handleClickGoToPs}
    >
      <Text fontFamily={"Lato"} fontSize={"28px"} fontWeight="bold">
        Psicologia
      </Text>

      <Flex display={"grid"}>
        <Text fontFamily={"Poppins"}>
          Trabalho pela abordagem analítica e prezo muito pelo acolhimento e
          compreensão do paciente em sua totalidade, de forma ampla e profunda.
          🌸
        </Text>
        <Text>
          Durante o processo de terapia
          <Show below="sm">...</Show>
          <Hide below="sm">
            {" "}
            é possível desenvolver o autoconhecimento através da conscientização
            de traumas, feridas emocionais provindas da infância, crenças
            limitantes e autossabotagens que permanecem no inconsciente e
            ressignificar-los ✨
          </Hide>
        </Text>
      </Flex>
    </Flex>
  );
};
