import { InputContainer } from "./styles";

const Input = ({ value, isBlinking }) => {
  return (
    <InputContainer className={isBlinking ? "blink" : ""}>
      <input disabled value={value} />
    </InputContainer>
  );
};

export default Input;
