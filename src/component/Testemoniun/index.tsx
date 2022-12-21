import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Testimonials = () => {
  return (
    <Box bgColor="#fae7fb" mx={"170px"} borderRadius={"25px"}>
      <Box pt={"35px"}>
        <Text fontFamily={"Jost"} fontWeight="bold" fontSize={"30px"}>
          Depoimentos
        </Text>
      </Box>
      <Box borderRadius={"10px"}>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={13000}
        >
          <Flex display={"grid"} alignItems={"center"}>
            <Box className="myCarousel" padding={"30px"} fontFamily={"Poppins"}>
              <h3>L.C.</h3>
              <Box p={"20px 150px 20px 150px"}>
                <Text>
                  Sinceramente, a terapia pra mim é uma luz nos meus pensamentos
                  inexplorados ou até mesmo a calmaria no mar agitado. Comecei a
                  fazer terapia porque me via ansiosa o tempo inteiro e queria
                  mudar isso, a Raquel é uma profissional extremamente dedicada
                  e atenciosa aos pacientes, que sempre se preocupou muito
                  comigo, tenho muita gratidão por ela ter me ajudado a ter um
                  pouco mais de equilíbrio emocional.
                </Text>
                <Text>
                  Me culpabilizava muito pelas coisas, mesmo quando não eram do
                  meu controle, hoje já tenho uma percepção muito melhor sobre
                  isso e consigo “trazer pra consciência” (frase que ela fala
                  constantemente). Percebi que tinha tantas concepções
                  deturpadas sobre mim, que me limitavam de fazer coisas comuns
                  do dia a dia e de acordo com a sessões, a Raquel foi me
                  ajudando a compreendê-los, trazendo mais autoconhecimento para
                  minha vida.
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex display={"grid"} alignItems={"center"} fontFamily={"Poppins"}>
            <Box className="myCarousel" padding={"30px"}>
              <h3>L.S.</h3>
              <Box p={"20px 150px"}>
                <p>
                  A terapia pede um local seguro e confortável que a Raquel
                  sempre conseguiu me proporcionar, mesmo com nossas sessões
                  sendo online. Profissional responsável e comprometida, a
                  experiência das nossas sessões tem sido verdadeiramente
                  engrandecedora na minha jornada de auto-conhecimento e só
                  tenho a agradecer por toda dedicação e cuidado.
                </p>
              </Box>
            </Box>
          </Flex>
          <Box fontFamily={"Poppins"}>
            <Box className="myCarousel" padding={"30px"}>
              <h3>D.L.</h3>
              <Box p={"20px 150px"}>
                <Text>
                  Olá, gostaria de expressar aqui minha gratidão a profissional
                  Raquel...ou melhor ao ser humano Raquel. Dra. Raquel entrou em
                  minha vida após um procedimento cirúrgico realizado em
                  abril/22. No começo pensei...meu Deus...uma menina. Como será?
                  Menina só na aparência. Que profissional. Posso dizer com toda
                  certeza, que ela me ajudou a mudar minha vida para melhor.
                  Cada terapia uma alegria e um aprendizado. Obrigada pelo seu
                  comprometimento, sua delicadeza e firmeza quando necessário.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box fontFamily={"Poppins"}>
            <Box className="myCarousel" padding={"30px"}>
              <h3>F.M.</h3>
              <Box p={"20px 150px"}>
                <Text>
                  A Dra Raquel foi uma sorte que chegou em meio ao caos. Desde a
                  primeira consulta, me passou a confiança para poder seguir meu
                  processo de aprendizado, descobertas, desafios, etc. Agradeço
                  imensamente todas as consultas, todas a as palavras que me
                  ajudou a entender e criar as estratégias para que conseguisse
                  ter uma qualidade de vida melhor. Só tenho a agradecer e
                  parabenizar seu trabalho, pois você é muito mais que a
                  psicóloga, é a esperança de dias melhores. 💓🙏🏽👏🏼
                </Text>
              </Box>
            </Box>
          </Box>
          <Box fontFamily={"Poppins"}>
            <Box className="myCarousel" padding={"30px"}>
              <h3>I.A.</h3>
              <Box p={"20px 150px"}>
                <Text>
                  Através da terapia venho (re)conhecendo um Eu, que sempre
                  esteve aqui e hoje está sendo aflorado. A Raquel vem sendo
                  imprescindível neste processo de autoconhecimento, sempre
                  atenciosa, acolhedora e solicita. Agradeço muito por ter me
                  ajudado até o momento e pelo auxílio que ainda dará no meu
                  processo.
                </Text>
              </Box>
            </Box>
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
};
