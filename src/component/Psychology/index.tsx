import { Box, Flex, Text, VStack } from "@chakra-ui/react";

export const Psychology = () => {
  return (
    <Flex
      display={{ base: "grid" }}
      alignItems={"center"}
      justifyContent="center"
      my={"25px"}
      mx={{ base: "10px", md: "90px" }}
      bgColor="rgba(252, 210, 210, 0.6)"
      borderRadius={"25px"}
    >
      <Flex
        maxW={{ base: "500px", lg: "1000px", md: "1000px" }}
        w={"100%"}
        padding={4}
        direction="row"
        justifyContent={"space-around"}
        alignItems="center"
        id={"psi"}
        display={{ base: "grid", lg: "flex", md: "flex" }}
      >
        <Box>
          <Text fontSize={"28px"} fontWeight="bold" fontFamily={"Jost"}>
            Psicologia
          </Text>
          <Flex display="grid" textAlign={"justify"}>
            <Text>
              Trabalho pela abordagem analítica e prezo muito pelo acolhimento e
              compreensão do paciente em sua totalidade, de forma ampla e
              profunda. 🌸
            </Text>
            <Text>
              Durante o processo de terapia é possível desenvolver o
              autoconhecimento através da conscientização de traumas, feridas
              emocionais provindas da infância, crenças limitantes e
              autossabotagens que permanecem no inconsciente e ressignificar-los
              ✨
            </Text>
            <Text>
              Eu e você trabalharemos em conjunto para resgatar a sua essência,
              exercitando virtudes como amor-próprio e autocuidado, curar a
              criança interior, regular suas emoções e comportamentos e melhorar
              sua autoestima.
            </Text>
          </Flex>
        </Box>
        <Box
          alignItems="center"
          ml={{ base: "0", md: "185px" }}
          textAlign={"left"}
        >
          <ul>
            <li>Autoconhecimento</li>
            <li>Dependência emocional</li>
            <li>Relacionamentos</li>
            <li>Ansiedade</li>
            <li>Depressão</li>
            <li>Compulsão alimentar</li>
            <li>Traumas</li>
            <li>Crescimento pessoal</li>
            <li>Feridas emocionais</li>
            <li>
              Identificação e ressignificação de crenças limitantes e
              autossabotagens.
            </li>
          </ul>
        </Box>
      </Flex>
    </Flex>
  );
};
