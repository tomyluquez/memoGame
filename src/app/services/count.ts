let seconds = 0;
let minutes = 0;
let hours = 0;

export const resetTime = () => {
  seconds = 0;
  minutes = 0;
  hours = 0;
};

export const cuonter = () => {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
