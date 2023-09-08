"use strict";

// var currentDayOfTheWeek = new Date();
// var options = { year: "numeric", month: "long", day: "numeric" };
// var formattedDate = currentDate.toLocaleDateString(undefined, options);

// document.getElementById("currentDayOfTheWeek").textContent = formattedDate;

// // Get the current date
// var currentDate = new Date();

// // Format the date as "Month Day, Year"
// var options = { year: "numeric", month: "long", day: "numeric" };
// var formattedDate = currentDate.toLocaleDateString(undefined, options);

// // Display the formatted date in the HTML element with id "dateDisplay"
// document.getElementById("currentDayOfTheWeek").textContent = formattedDate;

document.querySelector('[data-testid="slackUserName"]').innerHTML =
  "Victor Oluwapelumi";

// document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML =
//   "Current Day: Friday ";

document.querySelector('[data-testid="myTrack"]').innerHTML = "Track: Frontend";

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

  currentDayOfTheWeek.textContent = `Day of the week: ${getCurrentDay()}`;
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
