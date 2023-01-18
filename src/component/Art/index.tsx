import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import art1 from "../../assets/Art/art1.webp";
import art2 from "../../assets/Art/art2.webp";
import art3 from "../../assets/Art/art3.webp";
import art5 from "../../assets/Art/art5.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export const Art = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent="center"
      my={"25px"}
      mx={{ base: "10px", md: "90px" }}
      bgColor="rgba(255, 248, 154, 0.32)"
      borderRadius={"25px"}
      id={"art"}
    >
      <Flex
        maxW={"1000px"}
        w={"100%"}
        padding={4}
        direction="row"
        justifyContent={"space-around"}
        alignItems="center"
      >
        <Box
          w={"350px"}
          alignItems="center"
          display={{ base: "none", md: "flex", lg: "flex" }}
        >
          <Carousel infiniteLoop>
            <div>
              <Img src={art5} />
            </div>
            <div>
              <Img src={art2} />
            </div>
            <div>
              <Img src={art3} />
            </div>
            <Img src={art1} />
          </Carousel>
        </Box>
        <Box>
          <Text fontSize={"28px"} fontWeight="bold" fontFamily={"Jost"}>
            Arteterapia
          </Text>
          <Stack maxW={"600px"} p={5} textAlign={"justify"}>
            <Text>
              Na Arteterapia utilizamos da expressão artística como meio
              terapêutico ao invés da fala. Com ela temos acesso a um nível do
              inconsciente muito profundo.
            </Text>
            <Text>
              As imagens produzidas pelos pacientes são abordadas podendo ser
              ligadas a traumas, conteúdos de sonhos, autossabotagens, medos,
              memórias infantis, crenças limitantes e conflitos atuais. Uma vez
              que geralmente as pessoas, ao iniciarem um processo
              psicoterapêutico, se encontram com dificuldade em expressar
              verbalmente devido às resistências, a arte se torna um canal que
              facilita a comunicação, pois através do uso da expressão plástica
              começam a desenvolver a verbalização ao explicar e falar a
              respeito de suas produções artísticas.
            </Text>
            <Text>
              Através dos símbolos trazidos pelo paciente durante as vivências é
              possível identificar traumas, descobrir crenças e
              ressignifica-los. É um lindo processo de autoconhecimento através
              do meio artístico.
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};
