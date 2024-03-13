let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startStopBtn').textContent = 'Start';
  } else {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById('startStopBtn').textContent = 'Stop';
  }
  isRunning = !isRunning;
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById('startStopBtn').textContent = 'Start';
  isRunning = false;
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  const display = document.getElementById('display');
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
  return value < 10 ? '0' + value : value;
}

document.getElementById('startStopBtn').addEventListener('click', startStop);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
