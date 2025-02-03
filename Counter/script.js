let counter = document.getElementById("counter");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let pause = document.getElementById("pause");

let val = 0;
let interval = null;

start.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      val += 1;
      counter.textContent = val;
    }, 1000);
    start.disabled = true;
    pause.disabled = false;
    stop.disabled = false;
  }
});

pause.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  start.disabled = false;
});

stop.addEventListener("click", () => {
  clearInterval(interval);
  val = 0;
  counter.textContent = val;
  interval = null;
  start.disabled = false;
  pause.disabled = true;
  stop.disabled = true;
});

window.onload = () => {
  pause.disabled = true;
  stop.disabled = true;
};
