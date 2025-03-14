import styled from "styled-components";

// Container principal que ocupa toda a tela
export const Container = styled.div`
  width: 100%;
  min-height: 100vh; /* Garante que ocupe pelo menos a altura da viewport */
  background-color: #cacaca;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px; /* Espaçamento interno para evitar colar nas bordas em telas menores */
  box-sizing: border-box; /* Inclui padding no cálculo da largura */
`;

// Conteúdo da calculadora (área principal)
export const Content = styled.div`
  background-color: #ffffff;
  width: 100%; /* Inicia com 100% para telas menores */
  max-width: 400px; /* Limite máximo para telas maiores */
  border-radius: 10px; /* Bordas arredondadas para melhor visual */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil para profundidade */
  overflow: hidden; /* Garante que nada ultrapasse os limites */

  @media (max-width: 600px) {
    width: 90%; /* Ajusta para 90% em telas menores que 600px */
  }
`;

// Linha para os botões
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px; /* Espaçamento interno */
  gap: 10px; /* Espaçamento entre botões */

  @media (max-width: 400px) {
    padding: 5px; /* Reduz padding em telas muito pequenas */
    gap: 5px; /* Reduz gap em telas muito pequenas */
  }
`;

// Coluna (se necessário para outros layouts)
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

// Estilo adicional para o Input (assumindo que ele está em outro arquivo, como styles.js dentro de components)
export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #aaaaff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24px;
  font-family: "Roboto";
  padding: 0 10px;
  box-sizing: border-box;

  input {
    width: 100%;
    height: 100%;
    background-color: #aaaaff;
    border: 0;
    font-size: 24px;
    text-align: right;
    padding: 0;
    outline: none;
  }

  @media (max-width: 400px) {
    height: 60px; /* Reduz altura em telas menores */
    font-size: 20px; /* Reduz tamanho da fonte */

    input {
      font-size: 20px;
    }
  }
`;

// Estilo adicional para o Button (assumindo que ele está em outro arquivo, como styles.js dentro de components)
export const ButtonStyled = styled.button`
  width: 100%;
  height: 60px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e0e0e0;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d0d0d0;
  }

  @media (max-width: 400px) {
    height: 50px;
    font-size: 18px;
  }
`;
