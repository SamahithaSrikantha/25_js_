function minArray() {
    let userInput = document.getElementById("array").value;
    let inputArray = userInput.split(",");
    inputArray = inputArray.map((item) => Number(item.trim()));
    inputArray = inputArray.filter((item) => !isNaN(item) && item !== "");
  
    if (inputArray.length === 0) {
      document.getElementById("output").innerHTML = "No valid numbers entered.";
      return;
    }
  
    let minElement = Math.min(...inputArray);
  
    document.getElementById(
      "output"
    ).innerHTML = `Minimum element: ${minElement}`;
  }