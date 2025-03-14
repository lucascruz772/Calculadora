import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #aaaaff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24px;
  font-family: "Roboto";

  &.blink {
    animation: blink-animation 0.3s;
  }

  @keyframes blink-animation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  input {
    width: 100%;
    height: 75px;
    background-color: #aaaaff;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 10px;
    color: #ffffff;
    font-size: 24px;
    font-family: "Roboto";
  }
`;
