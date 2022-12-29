import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Flex, Show, Text } from "@chakra-ui/react";

export const Testimonials = () => {
  return (
    <Show above="sm">
      <Flex
        bgColor="#fae7fb"
        mx={{ base: "10px", md: "170px" }}
        borderRadius={"25px"}
        justifyContent="center"
        display={"grid"}
        maxW="1100px"
      >
        <Box pt={"35px"}>
          <Text fontFamily={"Jost"} fontWeight="bold" fontSize={"30px"}>
            Depoimentos
          </Text>
        </Box>
        <Box borderRadius={"10px"} fontSize={{ base: "12px", md: "14px" }}>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={13000}
          >
            <Carousel.Item>
              <h3>K.C.</h3>

              <Text>
                &emsp;Raquel entrou em minha vida de uma forma inusitada. Levei
                meu filho, F., para fazer terapia, e como de praxe, no início
                algumas seções são feitas com os pais também, foi aí que tudo
                começou... Apesar de ser para o F., sobre o F., acabou que ela
                abriu os meus olhos para minha necessidade de apoio, não adianta
                o filho estar bem e os pais não, tudo faz parte de um ciclo, se
                algo está em desordem a vida da família não entra nos eixos.
              </Text>
              <Text>
                &emsp;Eu sabia que precisava, minha alma gritava por ajuda, mas
                como já havia passado por diversos psicólogos, eu tinha a noção
                de que a escolha de alguém para te acompanhar nesse momento tão
                delicado tem que ser mais que apenas a procura de um nome na
                lista do plano de saúde, trata-se de um encontro de almas. No
                primeiro contato com ela eu tinha certeza de ter encontrado a
                pessoa certa...
              </Text>
              <Text>
                &emsp;Depois de um tempo comecei as minhas seções particulares,
                que vem moldando minha vida de uma forma extraordinária. A
                Raquel é um ser iluminado, uma profissional assertiva, dedicada,
                humana. A forma como ela expõe as nossas fraquezas, e enaltece
                nossos pontos positivos, é direta, clara, honesta, dignas de uma
                profissional humana, de fato preocupada com os pacientes, isso
                faz com que enxerguemos com muita facilidade, e transforma nossa
                caminhada rumo à cura da nossa alma, muito mais leve, por mais
                difícil que seja a situação.
              </Text>
              <Text>
                &emsp;Agradeço muito a Deus por ter cruzado nossos caminhos e
                que assim permaneça por muito tempo, afinal amizade, carinho,
                afeto e cuidado, nunca são demais, e ela tem de sobra para
                oferecer.
              </Text>
            </Carousel.Item>
            <Flex display={"grid"} alignItems={"center"}>
              <h3>L.C.</h3>

              <Text>
                &emsp;Sinceramente, a terapia pra mim é uma luz nos meus
                pensamentos inexplorados ou até mesmo a calmaria no mar agitado.
                Comecei a fazer terapia porque me via ansiosa o tempo inteiro e
                queria mudar isso, a Raquel é uma profissional extremamente
                dedicada e atenciosa aos pacientes, que sempre se preocupou
                muito comigo, tenho muita gratidão por ela ter me ajudado a ter
                um pouco mais de equilíbrio emocional.
              </Text>
              <Text>
                &emsp;Me culpabilizava muito pelas coisas, mesmo quando não eram
                do meu controle, hoje já tenho uma percepção muito melhor sobre
                isso e consigo “trazer pra consciência” (frase que ela fala
                constantemente). Percebi que tinha tantas concepções deturpadas
                sobre mim, que me limitavam de fazer coisas comuns do dia a dia
                e de acordo com a sessões, a Raquel foi me ajudando a
                compreendê-los, trazendo mais autoconhecimento para minha vida.
              </Text>
            </Flex>
            <Flex display={"grid"} alignItems={"center"} fontFamily={"Poppins"}>
              <h3>L.S.</h3>
              <p>
                &emsp;A terapia pede um local seguro e confortável que a Raquel
                sempre conseguiu me proporcionar, mesmo com nossas sessões sendo
                online. Profissional responsável e comprometida, a experiência
                das nossas sessões tem sido verdadeiramente engrandecedora na
                minha jornada de auto-conhecimento e só tenho a agradecer por
                toda dedicação e cuidado.
              </p>
            </Flex>
            <Box fontFamily={"Poppins"}>
              <h3>D.L.</h3>
              <Text>
                &emsp;Olá, gostaria de expressar aqui minha gratidão a
                profissional Raquel...ou melhor ao ser humano Raquel. Dra.
                Raquel entrou em minha vida após um procedimento cirúrgico
                realizado em abril/22. No começo pensei...meu Deus...uma menina.
                Como será? Menina só na aparência. Que profissional. Posso dizer
                com toda certeza, que ela me ajudou a mudar minha vida para
                melhor. Cada terapia uma alegria e um aprendizado. Obrigada pelo
                seu comprometimento, sua delicadeza e firmeza quando necessário.
              </Text>
            </Box>
            <Box fontFamily={"Poppins"} m="20px">
              <h3>F.M.</h3>
              <Text>
                &emsp; A Dra Raquel foi uma sorte que chegou em meio ao caos.
                Desde a primeira consulta, me passou a confiança para poder
                seguir meu processo de aprendizado, descobertas, desafios, etc.
                Agradeço imensamente todas as consultas, todas a as palavras que
                me ajudou a entender e criar as estratégias para que conseguisse
                ter uma qualidade de vida melhor. Só tenho a agradecer e
                parabenizar seu trabalho, pois você é muito mais que a
                psicóloga, é a esperança de dias melhores. 💓🙏🏽👏🏼
              </Text>
            </Box>
            <Box fontFamily={"Poppins"}>
              <h3>I.A.</h3>
              <Text>
                &emsp;Através da terapia venho (re)conhecendo um Eu, que sempre
                esteve aqui e hoje está sendo aflorado. A Raquel vem sendo
                imprescindível neste processo de autoconhecimento, sempre
                atenciosa, acolhedora e solicita. Agradeço muito por ter me
                ajudado até o momento e pelo auxílio que ainda dará no meu
                processo.
              </Text>
            </Box>
          </Carousel>
        </Box>
      </Flex>
    </Show>
  );
};
