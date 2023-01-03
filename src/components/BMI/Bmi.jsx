import React, { useState } from "react";
import "./Bmi.scss";

const Calculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const onChange1 = (event) => setWeight(event.target.value);
  const onChange2 = (event) => setHeight(event.target.value);

  let doubleHeight = ((height / 100) * height) / 100;
  let finalResult = weight / doubleHeight;

  //   if (finalResult < 18.5) {
  //     setHola("bajo peso");
  //   } else if (finalResult > 18.5 && finalResult < 24.9) {
  //     setHola("Adecuado");
  //   } else if (finalResult > 25.0 && finalResult < 29.9) {
  //     setHola("Sobrepeso");
  //   } else if (finalResult > 30.0 && finalResult < 34.9) {
  //     setHola("OBESIDAD GRADO 1");
  //   } else if (finalResult > 35.0 && finalResult < 39.9) {
  //     setHola("OBESIDAD GRADO 2");
  //   } else if (finalResult > 40) {
  //     setHola("OBESIDAD GRADO 2");
  //   }

  return (
    <div className="bmi__calculator">
      <div className="container">
        <h1>BMI Calculator</h1>
        <div class="row">
          <input
            type="range"
            min="20"
            max="200"
            value={weight}
            //   value="20"
            onChange={onChange1}
            id="weight"
          />
          <span id="weight-val">{weight} kg</span>
        </div>
        <div class="row">
          <input
            type="range"
            min="100"
            max="250"
            value={height}
            //   value="100"
            onChange={onChange2}
            id="height"
          />
          <span id="height-val">{height} cm</span>
        </div>

        <div class="display">
          <p id="result">{finalResult.toFixed(2)} </p>
          <p id="category"> </p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
