function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  const weightUnit = document.querySelector('input[name="weightUnit"]:checked').value;
  const heightUnit = document.querySelector('input[name="heightUnit"]:checked').value;

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }

  // Convert to kg and meters if needed
  const weightInKg = weightUnit === "lbs" ? weight * 0.453592 : weight;
  const heightInM = heightUnit === "in" ? height * 0.0254 : height;

  const bmi = weightInKg / (heightInM * heightInM);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}
