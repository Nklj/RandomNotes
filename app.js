
const start = document.getElementById("start");
const stop = document.getElementById("stop");
start.addEventListener("click", () => timerId());
stop.addEventListener("click", () => clearTimeout(timerId));

function playNote() {
  const RandomNumber = Math.floor(Math.random() * 5 + 3);
  const audio = document.getElementById(`${RandomNumber}`);
  audio.currentTime = 0;
  audio.play();
}


let delay = 5000;

let timerId = setTimeout(function tick() {
    playNote()
    delay = Math.floor(Math.random() * 600 + 30)
    timerId = setTimeout(tick, delay)
}, delay);
