import { sleep } from "./sleep.js";

function countdown(hours, minutes, seconds) {
  // The main countdown function. Takes in time in seconds,
  // then increment the loop

  // global RUNNING
  // RUNNING = True

  let timeSeconds = seconds + minutes * 60 + hours * 3600;

  while (timeSeconds) {
    displayTimer(timeSeconds);
    timeSeconds -= 1;
    if (RUNNING) {
      sleep(1000);
      continue;
    } else {
      break;
    }
  }

  if (RUNNING) {
    timer_label.config((text = "Timer Complete!"));
  } else {
    timer_label.config((text = "Timer has been canceled."));
  }
}

export { countdown };
