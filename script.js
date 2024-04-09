// Average Calculator

// Event Listener
document.getElementById("calc-btn").addEventListener("click", calcAll);

// Event Function
function calcAll() {
  // Input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;

  // Process
  let average = (num1 + num2 + num3) / 3;
  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let remainder = num1 % num2;
  let squared = num1 ** num2;
  let round = Math.floor(num1);
  let tangent = Math.tan(num3);
  let rand = Math.floor(Math.random() * num2 + num1);

  // Output
  document.getElementById("ave-out").innerHTML = average;
  document.getElementById("sum-out").innerHTML = sum;
  document.getElementById("prod-out").innerHTML = product;
  document.getElementById("rem-out").innerHTML = remainder;
  document.getElementById("sqr-out").innerHTML = squared;
  document.getElementById("rnd-out").innerHTML = round;
  document.getElementById("tang-out").innerHTML = tangent;
  document.getElementById("rand-out").innerHTML = rand;
}
