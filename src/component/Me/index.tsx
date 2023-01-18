import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import Me1 from "../../assets/Me/Me1.webp";
import Me2 from "../../assets/Me/Me2.webp";
import { Carousel } from "react-responsive-carousel";

export const Me = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent="center"
      my={"25px"}
      mx={{ base: "10px", md: "90px" }}
      bgColor="rgba(174, 224, 224, 0.4)"
      borderRadius={"25px"}
      id="me"
      display={"grid"}
    >
      <Text fontSize={"28px"} fontWeight="bold" fontFamily={"Jost"} my="20px">
        Sobre mim
      </Text>
      <Flex
        maxW={"1000px"}
        w={"100%"}
        padding={4}
        direction="row"
        justifyContent={"space-evenly"}
        alignItems="center"
        display={{ base: "block", md: "flex", lg: "flex" }}
      >
        <Box maxW={"450px"} mr={{ base: 0, md: "20px", lg: "20px" }}>
          <Carousel autoFocus interval={6000}>
            <Img src={Me1} />
            <Img src={Me2} />
          </Carousel>
        </Box>
        <Box ml="5px">
          <Stack
            spacing={2}
            maxW={"600px"}
            fontSize="1xl"
            lineHeight={1.25}
            p={"10px"}
            textAlign="justify"
          >
            <Text>
              Me chamo Raquel, sou psicóloga formada pela PUC-PR desde 2019. Pós
              graduada em Arteterapia Junguiana pela Integrarte e também em
              Psicologia Clínica.
            </Text>
            <Text>
              Meu amor pela terapia vem de longe. Desde os meus 15 anos de
              idade, quando começei a minha trajetória de autoconhecimento na
              terapia, me senti extremamente acolhida, ouvida e segura. Foram
              inúmeros os desafios que me permiti enfrentar para estar lá e
              chegar onde estou hoje. Sou muito grata por ter tido uma vivência
              e um exemplo tão transformador em minha vida.
            </Text>{" "}
            <Text>
              Depois de anos confirmando e percebendo a minha afinidade com essa
              profissão, me joguei nela de alma e coração. Desejando acolher e
              ajudar aos outros da mesma maneira que eu fui.
            </Text>{" "}
            <Text>
              Como Jung citou "Quem olha para fora sonha, quem olha para dentro
              desperta". Esse é o caminhar da minha terapia, desbravar e acolher
              a luz e a sombra no caminhar para o autoconhecimento,
              autoafirmação, amor, autocuidado e autoestima.
            </Text>
            <Text>
              {" "}
              Sou extremamente artística, desde criança amo músicas, cantar,
              desenhar, pintar, bordar e tecer. Eventualmente percebi o quanto
              eu usava disso de forma terapêutica mas sem o conhecimento. Então
              decidi iniciar a minha trajetória pela Arteterapia Junguiana e me
              tornar uma Arteterapeuta, usufruindo da arte e do seu potencial de
              cura através de símbolos.{" "}
            </Text>
            <Text>
              No geral, sou uma mulher realizada, risonha, que ama a natureza e
              animais, boba, que ama maratonar uma série, sempre em conexão com
              a minha criança interior e que encontrou o seu caminho auxiliando
              os outros a encontrarem os deles.
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};
