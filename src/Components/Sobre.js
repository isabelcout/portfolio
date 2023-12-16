import React from "react";
import styled from "styled-components";
import sobreImage from "../assets/images/sobre.gif";
import htmlIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css.png";
import jsIcon from "../assets/images/js.png";
import reactIcon from "../assets/images/react.png";
import styledIcon from "../assets/images/sc.png";
import gitIcon from "../assets/images/git.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #001b34; /* Cor do cabeçalho */
  color: white; /* Cor do texto */
  height: 87vh;
`;

const Image = styled.img`
  width: 35vw;
  height: 45vh;
`;

const TextContainer = styled.div`
  width: 50vw;

  line-height: 1.5;
  border: 2px solid #ffcc29;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(255, 204, 41, 0.5);
  padding: 35px;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-top: 10px;
`;

const Sobre = () => {
  return (
    <Container>
      <Image src={sobreImage} alt="ImagemSobre" />

      <TextContainer>
        <h1>Sobre Mim</h1>
        <h2>Belém, Pará</h2>
        <Description>
          Sou a Isabel, nascida em 2002, sou uma dedicada desenvolvedora
          Front-End, formada pelo Vai na Web, futura Cientista da Computação e
          Estagiária na Universidade Federal do Pará. Uma entusiasta na área de
          desenvolvimento, com uma mente inquisitiva, sempre motivada pela
          resolução de desafios complexos. Estou em constante busca por novos
          conhecimentos, explorando de maneira incessante as fronteiras do
          desenvolvimento web.
        </Description>
        <IconsContainer>
          <Icon src={htmlIcon} alt="Logo Html" />
          <Icon src={cssIcon} alt="Logo Css" />
          <Icon src={jsIcon} alt="Logo JavaScript" />
          <Icon src={reactIcon} alt="Logo React" />
          <Icon src={styledIcon} alt="Logo do StyledComponents" />
          <Icon src={gitIcon} alt="Logo do Git" />
        </IconsContainer>
      </TextContainer>
    </Container>
  );
};

export default Sobre;
