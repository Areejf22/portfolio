function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const feet = parseFloat(document.getElementById("feet").value) || 0;
  const inches = parseFloat(document.getElementById("inches").value) || 0;

  const weightUnit = document.querySelector('input[name="weightUnit"]:checked').value;

  const totalInches = (feet * 12) + inches;

  if (isNaN(weight) || totalInches <= 0) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }

  const weightInKg = weightUnit === "lbs" ? weight * 0.453592 : weight;
  const heightInM = totalInches * 0.0254;

  const bmi = weightInKg / (heightInM * heightInM);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}
