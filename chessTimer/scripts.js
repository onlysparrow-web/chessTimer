var inputElement1 = document.getElementById("timer1");
var inputElement2 = document.getElementById("timer2");

inputElement1.value = parseInt(360);
inputElement2.value = parseInt(360);

var swapButton = document.getElementById("swpbtn");
var startButton = document.getElementById("srtbtn");
var resetButton = document.getElementById("resbtn");

function swap() {
  setInterval(handleSwap, 1000);
}

function handleSwap() {
  var x = inputElement2.value - 1;
  inputElement2.value = x;
  console.log(x);
}

swapButton.addEventListener("click", swap);

function interval() {
  setInterval(handleStart, 1000);
}

function handleStart() {
  var y = inputElement1.value - 1;
  inputElement1.value = y;
  console.log(y);
}

startButton.addEventListener("click", interval);

function handleReset() {
  clearInterval(interval);
  inputElement1 = parseInt(360);
  inputElement2 = parseInt(360);
}

resetButton.addEventListener("click", handleReset);
