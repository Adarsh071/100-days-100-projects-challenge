const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  const bmiValue = weightValue / (heightValue * heightValue);

  bmiInputEl.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Under weight"
    weightConditionEl.style.color = "blue";
  }
   else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal weight"
    weightConditionEl.style.color = "green";
  }
   else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Overweight"
    weightConditionEl.style.color = "orangered";
  }
   else if (bmiValue >= 30) {
    weightConditionEl.innerText = "Obesity"
    weightConditionEl.style.color = "red";
  }

}

btnEl.addEventListener("click", calculateBMI);
