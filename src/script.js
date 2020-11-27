var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var wm = document.getElementById("wMinutes");
var ws = document.getElementById("wSeconds");

var bm = document.getElementById("bMinutes");
var bs = document.getElementById("bSeconds");

//store a reference to a timer variable
var startTimer;

start.addEventListener("click", () => {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("Timer is already running");
  }
});

reset.addEventListener("click", () => {
  wm.innerText = 25;
  ws.innerText = "00";

  bm.innerText = 5;
  bs.innerText = "00";

  document.getElementById("counter").innerText = 0;
  stopInterval();
  startTimer = undefined;
});

stop.addEventListener("click", () => {
  stopInterval();
  startTimer = undefined;
});

//Start Timer Function
let timer = () => {
  //Work Timer Countdown
  if (ws.innerText != 0) {
    ws.innerText--;
  } else if (wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 59;
    wm.innerText--;
  }
  if (wm.innerText == 0 && ws.innerText == 1) {
    window.alert("Get Ready to take break");
  } else if (bm.innerText == 0 && bs.innerText == 1) {
    window.alert("Get Ready for Work");
  }
  if (wm.innerText == 0 && ws.innerText == 0) {
    //Break Timer Countdown
    if (bs.innerText != 0) {
      bs.innerText--;
    } else if (bm.innerText != 0 && bs.innerText == 0) {
      bs.innerText = 59;
      bm.innerText--;
    }
  }

  //Increment Counter by one if one full cycle is completed
  if (
    wm.innerText == 0 &&
    ws.innerText == 0 &&
    bm.innerText == 0 &&
    bs.innerText == 0
  ) {
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById("counter").innerText++;
  }
};

//Stop Timer Function
function stopInterval() {
  clearInterval(startTimer);
}
