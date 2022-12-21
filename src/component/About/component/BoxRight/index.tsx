import { Flex, Text, VStack } from "@chakra-ui/react";

export const BoxRight = () => {
  const handleClickArt = () => {
    document.getElementById("art")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Flex
      display={"grid"}
      justifyContent="center"
      fontFamily={"Poppins"}
      fontSize={18}
      bgColor="rgba(255, 248, 154, 0.32)"
      borderRadius="25px"
      maxW={"430px"}
      minH="425px"
      onClick={handleClickArt}
      p={7}
    >
      <Text fontFamily={"Lato"} fontSize={30} fontWeight="bold">
        Arteterapia
      </Text>

      <Flex display={"grid"} mt={"-56px"}>
        <Text textAlign="center">
          Na Arteterapia utilizamos da expressão artística como meio terapêutico
          ao invés da fala. Com ela temos acesso a um nível do inconsciente
          muito profundo. As imagens produzidas pelos pacientes são abordadas
          podendo ser ligadas a traumas, conteúdos de sonhos, autossabotagens,
          medos, memórias infantis, crenças limitantes e conflitos atuais.
        </Text>
      </Flex>
    </Flex>
  );
};
