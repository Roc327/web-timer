import { convertSeconds } from "./convertseconds.js";

function displayTimer(timeSeconds) {
  // Convert time in seconds that is passed into function
  // into hours, minutes, seconds then display on screen

  const [hours, minutes, seconds] = convertSeconds(timeSeconds);

  const [sHours, sMinutes, sSeconds] = [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ];

  const timeString = `${sHours}:${sMinutes}:${sSeconds}`;

  // Modiy below to update on screen
  timer_label.config((text = timeString));

  // Update display if needed
  window.update();
}

export { displayTimer };
