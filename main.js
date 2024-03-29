    function toggleMode() {
    const body = $("body");
    const currentMode = body.attr("data-mode");

    if (currentMode === "dark") {
      body.attr("data-mode", "light");
    } else {
      body.attr("data-mode", "dark");
    }
  }


function sortNumbers() {
  const inputElement = document.getElementById("numberInput");
  const outputElement = document.getElementById("output");

  const numbersInput = inputElement.value.trim();
  const numbersArray = numbersInput.split(",").map(number => parseFloat(number.trim()));

  if (numbersArray.some(isNaN)) {
    outputElement.textContent = "Invalid input. Please enter numbers separated by commas.";
    return;
  }

  const sortedArray = numbersArray.sort((a, b) => a - b);
  outputElement.textContent = "Sorted List: " + sortedArray.join(", ");
}
