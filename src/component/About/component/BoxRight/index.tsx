import { Flex, Hide, Show, Text, VStack } from "@chakra-ui/react";

export const BoxRight = () => {
  const handleClickArt = () => {
    document.getElementById("art")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Flex
      display={"grid"}
      justifyContent="center"
      fontFamily={"Poppins"}
      bgColor="rgba(255, 248, 154, 0.32)"
      borderRadius="25px"
      maxW={"430px"}
      minH={{ base: "0", md: "425px", lg: "425px" }}
      onClick={handleClickArt}
      p={7}
    >
      <Text fontFamily={"Lato"} fontSize={"28px"} fontWeight="bold">
        Arteterapia
      </Text>

      <Flex display={"grid"}>
        <Text textAlign="center">
          Na Arteterapia utilizamos da expressão artística como meio terapêutico
          ao invés da fala. Com ela temos acesso a um nível do inconsciente
          muito profundo. As imagens produzidas pelos pacientes
          <Show below="sm">...</Show>
          <Hide below="sm">
            {" "}
            são abordadas podendo ser ligadas a traumas, conteúdos de sonhos,
            autossabotagens, medos, memórias infantis, crenças limitantes e
            conflitos atuais.
          </Hide>
        </Text>
      </Flex>
    </Flex>
  );
};
