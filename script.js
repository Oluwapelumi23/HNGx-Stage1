"use strict";

// document.querySelector('[data-testid="slackUserName"]').innerHTML =
//   "Victor Oluwapelumi";

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

const getCurrentUTCTime = () => {
  const utcMilliseconds = Date.now();
  return utcMilliseconds;
};

const update = () => {
  const currentDayOfTheWeek = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const currentUTCTimeElement = document.querySelector(
    '[data-testid = "currentUTCTime"]'
  );

  currentDayOfTheWeek.textContent = `${getCurrentDay()}`;
  currentUTCTimeElement.textContent = `${getCurrentUTCTime()} milliseconds`;
};

window.onload = update;
