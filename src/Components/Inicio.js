import React from "react";
import styled from "styled-components";
import perfil from "../assets/images/octocat.png";
import fundoInicio from "../assets/images/mario.gif";
import linkedinIcon from "../assets/images/linkedin.png";
import githubIcon from "../assets/images/github.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 86vh;
  background-image: url(${fundoInicio});
  background-size: 100% 100%;
`;

const Opacity = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 86vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const TextContent = styled.div`
  width: 30vw;
  color: white;
  font-size: 30px;
  z-index: 1;
  line-height: 1.2;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const ProfileImage = styled.img`
  opacity: 1;
  z-index: 2;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Button = styled.a`
  display: flex;
  padding: 10px 20px;
  background-color: #ffcc29;
  color: #001f3f;
  text-decoration: none;
  border-radius: 5px;
  font-size: 18px;
  transition: background-color 0.3s;

  &:hover {
    background-color: blueviolet;
  }
`;

const Icon = styled.img`
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;

const Inicio = () => {
  document.title = "Portfólio";
  return (
    <Container>
      <Opacity />
      <TextContent>
        <Title>Olá, sou a Isabel Coutinho!</Title>
        <h2>Desenvolvedora Front-End</h2>
        <p>
          Transformando ideias em experiências digitais memoráveis, com foco
          especial em React.js.
        </p>
        <ButtonContainer>
          <Button
            href="https://www.linkedin.com/in/isabelcoutinhodonascimento"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={linkedinIcon} alt="LinkedIn" /> LinkedIn
          </Button>
          <Button
            href="https://github.com/isabelcout"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={githubIcon} alt="LinkedIn" /> GitHub
          </Button>
        </ButtonContainer>
      </TextContent>
      <ProfileImage src={perfil} alt="Perfil" />
    </Container>
  );
};

export default Inicio;
