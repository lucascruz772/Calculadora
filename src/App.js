import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");
  const [isBlinking, setIsBlinking] = useState(false);

  // Função para formatar números (substitui ponto por vírgula)
  const formatNumber = (num) => {
    return num.toString().replace(".", ",");
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    if (operation && currentNumber === firstNumber) {
      setCurrentNumber(num === "," || num === "." ? "0." : num);
    } else {
      if (num === "," || num === ".") {
        if (!currentNumber.includes(".")) {
          setCurrentNumber((prev) => `${prev}.`);
        }
      } else {
        setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
      }
    }
  };

  const handleOperation = (op) => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setOperation(op);
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 300); // Piscar por 300ms
    } else if (operation) {
      handleEquals(); // Calcula o resultado da operação anterior
      setOperation(op);
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 300);
    }
  };

  const handleSumNumbers = () => handleOperation("+");
  const handleMinusNumbers = () => handleOperation("-");
  const handleDivideNumbers = () => handleOperation("/");
  const handleMultiplyNumbers = () => handleOperation("*");

  const handlePercentage = () => {
    const percentageValue = Number(currentNumber.replace(",", ".")) / 100;
    setFirstNumber(formatNumber(percentageValue)); // Salva o valor formatado
    setCurrentNumber("0"); // Limpa a tela para o próximo número
    setOperation("*"); // Define a operação como multiplicação
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      const first = Number(firstNumber.replace(",", "."));
      const current = Number(currentNumber.replace(",", "."));
      let result;

      switch (operation) {
        case "+":
          result = first + current;
          break;
        case "-":
          result = first - current;
          break;
        case "/":
          result = first / current;
          break;
        case "*":
          result = first * current;
          break;
        default:
          return;
      }

      setCurrentNumber(formatNumber(result)); // Usar formatNumber
      setFirstNumber("0");
      setOperation("");
    }
  };

  const handleToggleSign = () => {
    const num = Number(currentNumber.replace(",", "."));
    setCurrentNumber(formatNumber(-num));
  };

  return (
    <Container className="App">
      <Content>
        <Input value={currentNumber} isBlinking={isBlinking} />
        <Row>
          <Button label="x" onClick={handleMultiplyNumbers} />
          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="%" onClick={handlePercentage} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="," onClick={() => handleAddNumber(",")} />
          <Button label="+/-" onClick={handleToggleSign} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
