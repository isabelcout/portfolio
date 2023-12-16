import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.gif";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  `;

const LogoImg = styled.img`
  width: 8vw;
  height: 11vh;
`;

const StyleContainer = styled.header`
  width: 100%;
  height: 100%;
  background-color: #001f3f; /* Azul escuro */
  text-align: center;
  border-bottom: 4px solid #ffcc29; /* Amarelo brilhante para destacar */
  display: flex;
  align-items: center;
  padding: 10px;
`;

const StyleNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 150px;
`;

const StyleLink = styled(Link)`
  font-size: 20px;
  height: 45px;
  width: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffcc29; /* Amarelo brilhante para destacar */
  text-decoration: none;
  border: 2px solid #ffcc29; /* Amarelo brilhante para destacar */
  background-color: #001f3f; /* Azul escuro */
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(255, 204, 41, 0.5); /* Sombra amarela para destacar */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #003366; /* Azul mais escuro para simular movimento */
    box-shadow: 2px 2px 8px rgba(255, 204, 41, 0.8); /* Sombra mais intensa no hover */
  }
`;

const StyleHeader = () => {
  return (
    <>
      <StyleContainer>
        <StyleNav>
          <LogoImg src={logo} alt="Logo" />
          <StyleLink to="/">Início</StyleLink>
          <StyleLink to="/sobre">Sobre</StyleLink>
          <StyleLink to="/projetos">Projetos</StyleLink>
          <StyleLink to="/contato">Contato</StyleLink>
        </StyleNav>
      </StyleContainer>
      <GlobalStyle />
    </>
  );
};

export default StyleHeader;
