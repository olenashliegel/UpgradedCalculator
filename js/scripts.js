//Business logic
function isValueZero(num) {
  if (num === 0)
    return true;
  else
    return false;
}

function mathOperator(operator, num1, num2) {
  switch (operator) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num1 / num2;
  }

}

function checkRequiredFields(number1, number2) {
  if (number1 === '' || number2 === '' || isNaN(number1) || isNaN(number2))
    return false;
  else
    return true;
}

//UI logic

function resetForm() {
  document.querySelector("p#error").classList.add("hidden");
  document.getElementById("result").classList.add("hidden");
  document.querySelector("p#errorDivideByZero").classList.add("hidden");
}

function handleSubmit(e) {
  e.preventDefault();
  resetForm();
  let number1 = parseInt(document.getElementById("number1").value);
  let number2 = parseInt(document.getElementById("number2").value);
  let operator = document.querySelector("input[type=radio]:checked").value;
  let color = document.getElementById("color").value;
  if (!checkRequiredFields(number1, number2)) {
    document.querySelector("p#error").classList.remove("hidden");
  } else if (number2 === 0 && operator === "divide") {
    document.querySelector("p#errorDivideByZero").classList.remove("hidden");
  }
  else {
    document.querySelector("p#error").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("result").style.color = color;
    document.getElementById("answer").innerText = mathOperator(operator, number1, number2);
  }
}

window.addEventListener("load", function () {

  document.querySelector("form").addEventListener("submit", handleSubmit);
});