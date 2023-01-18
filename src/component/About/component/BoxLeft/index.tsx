import { Flex, Text, VStack, Box, Hide, Show } from "@chakra-ui/react";

export const BoxLeft = () => {
  const handleClickGoToMe = () => {
    document.getElementById("me")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box
      justifyContent="center"
      fontFamily={"Poppins"}
      bgColor="rgba(174, 224, 224, 0.4)"
      borderRadius="25px"
      maxW={"430px"}
      minH={{ base: "0", md: "425px", lg: "425px" }}
      p={7}
      onClick={handleClickGoToMe}
    >
      <Text fontFamily={"Lato"} fontSize={"28px"} fontWeight="bold">
        Sobre mim
      </Text>

      <Flex display={"grid"}>
        <Text textAlign="center">
          Me chamo Raquel, sou psicóloga formada pela PUC-PR desde 2019. Pós
          graduada em Arteterapia Junguiana pela Integrarte e também em
          Psicologia Clínica.{" "}
        </Text>
        <Text textAlign="center">
          Meu amor pela terapia vem de longe.
          <Show below="sm">...</Show>
          <Hide below="sm">
            Desde os meus 15 anos de idade, quando começei a minha trajetória de
            autoconhecimento na terapia, me senti extremamente acolhida, ouvida
            e segura. Foram inúmeros os desafios que me permiti ...
          </Hide>
        </Text>
      </Flex>
    </Box>
  );
};
