let timer;
let elapsedTime = 0;
let running = false;

function startStopwatch() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      elapsedTime += 1000;
      updateDisplay();
    }, 1000);
  }
}

function stopStopwatch() {
  if (running) {
    running = false;
    clearInterval(timer);
  }
}

function resetStopwatch() {
  running = false;
  clearInterval(timer);
  elapsedTime = 0;
  updateDisplay();
}

function updateDisplay() {
  let totalSeconds = Math.floor(elapsedTime / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  let displayHours = String(hours).padStart(2, '0');
  let displayMinutes = String(minutes).padStart(2, '0');
  let displaySeconds = String(seconds).padStart(2, '0');

  document.getElementById('display').textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}