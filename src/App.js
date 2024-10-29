import { useState } from "react";
import "./index.scss";
import { questions } from "./questions";
import Result from "./Result";
import Game from "./Game";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  };
  return (
    <div style={{ backgroundColor: "#F2F2F2" }} className="App">
      {step != questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
