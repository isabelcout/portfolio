import React from "react";
import styled from "styled-components";
import strangerImage from "../assets/images/stranger.png";
import petImage from "../assets/images/fantastika.png";
import twImage from "../assets/images/tw.png";
import coffeeImage from "../assets/images/coffee.png";
import marioImage from "../assets/images/mariopage.png";
import coldImage from "../assets/images/cold.png";

const ProjetosContainer = styled.div`
  text-align: center;
  background-color: #001b34;
  padding: 20px;
`;

const ProjetoGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const ProjetoItem = styled.div`
  text-align: center;
  flex: 0 0 30%;
  margin-bottom: 20px;
`;

const ProjetoImagem = styled.img`
  max-width: 100%;
  height: 50vh;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const VerMaisButton = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background-color: #ffcc29;
  color: #001f3f;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: blueviolet;
  }
`;

const Projetos = () => {
  return (
    <ProjetosContainer>
      <ProjetoGroup>
        <ProjetoItem>
          <ProjetoImagem src={strangerImage} alt="Projeto Stranger Things" />
          <VerMaisButton
            href="https://isabelcout.github.io/mundo-invertido/"
            target="_blank"
          >
            Ver Mais
          </VerMaisButton>
        </ProjetoItem>

        <ProjetoItem>
          <ProjetoImagem src={petImage} alt="Projeto Fantastika PetShop" />
          <VerMaisButton
            href="https://isabelcout.github.io/fantastika-vnw/"
            target="_blank"
          >
            Ver Mais
          </VerMaisButton>
        </ProjetoItem>

        <ProjetoItem>
          <ProjetoImagem src={twImage} alt="Projeto The Witcher" />
          <VerMaisButton
            href="https://isabelcout.github.io/the-witcher-vnw/"
            target="_blank"
          >
            Ver Mais
          </VerMaisButton>
        </ProjetoItem>
      </ProjetoGroup>

      <ProjetoGroup>
        <ProjetoItem>
          <ProjetoImagem src={coffeeImage} alt="Projeto Cafeteria" />
          <VerMaisButton
            href="https://isabelcout.github.io/getcoffee-vnw/"
            target="_blank"
          >
            Ver Mais
          </VerMaisButton>
        </ProjetoItem>

        <ProjetoItem>
          <ProjetoImagem src={marioImage} alt="Projeto Mario" />
          <VerMaisButton
            href="https://isabelcout.github.io/projeto-mariofilme/"
            target="_blank"
          >
            Ver Mais
          </VerMaisButton>
        </ProjetoItem>

        <ProjetoItem>
          <ProjetoImagem src={coldImage} alt="Projeto Inverno" />
          <VerMaisButton
            href="https://isabelcout.github.io/inverno-vnw/"
            target="_blank"
          >
            Ver Mais
          </VerMaisButton>
        </ProjetoItem>
      </ProjetoGroup>
    </ProjetosContainer>
  );
};

export default Projetos;
