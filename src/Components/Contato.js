import React, { useState } from "react";
import styled from "styled-components";
import ImagemExtra from "../assets/images/hp.gif";
import gitIcon from "../assets/images/github.png";
import wpIcon from "../assets/images/wp.png";
import emailIcon from "../assets/images/email.png";

const ContatoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #001b34;
  height: 87vh;
  color: white;
`;

const RedesSociaisContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ImagemRedeSocial = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const RedeSocialWrapper = styled.div`
  background-color: #ffea00;
  border: 2px solid #001b34;
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
`;

const StyledImagemExtra = styled.img`
  width: 25vw;
  height: 45vh;
  margin-left: 50px;
`;

const FormContainer = styled.div`
  width: 50%;
`;

const Divisao = styled.div`
  height: 20px;
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40vh;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #ffea00;
  border-radius: 5px;
  height: 8vh;
  margin-bottom: 10px;
`;

const MensagemInput = styled.textarea`
  padding: 10px;
  border: 2px solid #ffea00;
  border-radius: 5px;
  height: 20vh;
  margin-bottom: 10px;
`;

const BotaoEnviar = styled.button`
  padding: 15px;
  background-color: #ffea00;
  color: #001b34;
  border: 2px solid #001b34;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: transparent;
    color: #ffea00;
  }
`;

const EmailLink = styled.a`
  color: #ffea00;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Contato = () => {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const email = "isabelcoutinhors@gmail.com";
  const phoneNumber = "91983779499";

  const handleEnviarMensagem = () => {
    const mensagemWhatsApp = `Olá, meu nome é ${nome}. Mensagem: ${mensagem}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      mensagemWhatsApp
    )}`;
    window.open(url, "_blank");
    // Limpa os campos após enviar a mensagem
    setNome("");
    setMensagem("");
  };

  return (
    <ContatoContainer>
      <div>
        <StyledImagemExtra src={ImagemExtra} alt="Imagem Ilustrativa" />
      </div>
      <RedesSociaisContainer>
        <RedeSocialWrapper>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImagemRedeSocial src={wpIcon} alt="WhatsApp" />
          </a>
        </RedeSocialWrapper>
        <RedeSocialWrapper>
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <ImagemRedeSocial src={emailIcon} alt="Email" />
          </a>
        </RedeSocialWrapper>
        <RedeSocialWrapper>
          <a
            href="https://github.com/isabelcout"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImagemRedeSocial src={gitIcon} alt="GitHub" />
          </a>
        </RedeSocialWrapper>
      </RedesSociaisContainer>
      <FormContainer>
        <h2>Entre em Contato</h2>
        <p>
          Você pode entrar em contato comigo através do meu email{" "}
          <EmailLink
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {email}
          </EmailLink>
          , ou enviar uma mensagem pelo formulário abaixo:
        </p>
        <Divisao />
        <Formulario>
          <Input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <MensagemInput
            placeholder="Mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
          <BotaoEnviar type="button" onClick={handleEnviarMensagem}>
            Enviar
          </BotaoEnviar>
        </Formulario>
      </FormContainer>
    </ContatoContainer>
  );
};

export default Contato;
