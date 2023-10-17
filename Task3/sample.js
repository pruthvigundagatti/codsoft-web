const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let operation = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (!isNaN(value)) {
      display.value += value;
    }

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      operation = value;
      display.value = "";
    }

    if (value === "=") {
      const firstNumber = parseFloat(display.value);
      const secondNumber = parseFloat(display.value);

      let result;

      switch (operation) {
        case "+":
          result = firstNumber + secondNumber;
          break;
        case "-":
          result = firstNumber - secondNumber;
          break;
        case "*":
          result = firstNumber * secondNumber;
          break;
        case "/":
          result = firstNumber / secondNumber;
          break;
      }

      display.value = result;
    }
  });
});