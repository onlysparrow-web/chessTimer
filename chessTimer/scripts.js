var inputElement1 = document.getElementById("timer1");
var inputElement2 = document.getElementById("timer2");

inputElement1.value = parseInt(360);
inputElement2.value = parseInt(360);

var swapButton = document.getElementById("swpbtn");
var startButton = document.getElementById("srtbtn");
var resetButton = document.getElementById("resbtn");
var timer1Interval = 0;
var timer2Interval = 0;
var activeTimer = "";

function startTimer1() {
  activeTimer = "timer1";
  timer1Interval = setInterval(handleTimer1, 1000);
}

function handleTimer1() {
  var y = inputElement1.value - 1;
  if (y < 0) {
    clearInterval(timer1Interval);
  } else {
    inputElement1.value = y;
  }
}
startButton.addEventListener("click", startTimer1);

function startTimer2() {
  activeTimer = "timer2";
  timer2Interval = setInterval(handleTimer2, 1000);
}

function handleTimer2() {
  var x = inputElement2.value - 1;
  if (x < 0) {
    clearInterval(timer2Interval);
  } else {
    inputElement2.value = x;
  }
}

function swap() {
  if (activeTimer == "timer1") {
    clearInterval(timer1Interval);
    startTimer2();
  } else if (activeTimer == "timer2") {
    clearInterval(timer2Interval);
    startTimer1();
  }
}

swapButton.addEventListener("click", swap);

function handleReset() {
  clearInterval(timer1Interval);
  clearInterval(timer2Interval);
  inputElement1.value = parseInt(360);
  inputElement2.value = parseInt(360);
}

resetButton.addEventListener("click", handleReset);
