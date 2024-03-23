function divisble() {
    let divident = document.getElementById("divident").value;
    let divisor1 = document.getElementById("divisor1").value;
    let divisor2 = document.getElementById("divisor2").value;
    let divisibleByBoth = divident % divisor1 === 0 && divident % divisor2 === 0;
  
    if (divisibleByBoth) {
      document.getElementById("output").innerHTML =
        "<p>true both number is divisble</p>";
    } else {
      let notDivisibleBy = "";
      if (divident % divisor1 !== 0) {
        notDivisibleBy += divisor1 + " ";
      }
      if (divident % divisor2 !== 0) {
        notDivisibleBy += divisor2;
      }
      document.getElementById(
        "output"
      ).innerHTML = `<p>false with the number ${notDivisibleBy} is not divisible</p>`;
    }
  }