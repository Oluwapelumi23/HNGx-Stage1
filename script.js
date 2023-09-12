"use strict";
document.querySelector('[data-testid="myTrack"]').innerHTML = "Frontend";

const getCurrentDay = () => {
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayName = weekDay[today.getDay()];
  return dayName;
};

const update = () => {
  const currentDayOfTheWeek = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );

  currentDayOfTheWeek.textContent = `${getCurrentDay()}`;
};

window.onload = update;

function updateUTCTime() {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let milliseconds = today.getMilliseconds();

  hours = checkTime(hours);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  const currentUTCTime =
    hours + ":" + minutes + ":" + seconds + ":" + milliseconds;

  const time = document.querySelector('[data-testid="currentUTCTime"]');

  time.innerHTML = currentUTCTime;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

updateUTCTime();
