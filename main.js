/*
  F = (C * 9/5) + 32
  C = (F - 32) * 5/9
*/
function convertTemperature() {
  const tempInput = document.getElementById("temperature").value;
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const resultElement = document.getElementById("result");

  let convertedTemp;
  let resultText;

  if ((fromUnit === "C") | (toUnit === "F")) {
    convertedTemp = (tempInput * 9) / 5 + 32;
    resultText = `${tempInput}°C is ${convertedTemp.toFixed(2)}°F`;
  } else if ((fromUnit === "F") | (toUnit === "C")) {
    convertedTemp = ((tempInput - 32) * 5) / 9;
    resultText = `${tempInput}°F is ${convertedTemp.toFixed(2)}°C`;
  } 
  resultElement.textContent = resultText;
}
