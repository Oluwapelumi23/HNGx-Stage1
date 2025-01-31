"use strict";

const utcT = document.querySelector(".UTC-Time");
const day = new Date();

const UTChours = day.getUTCHours();
const UTCminutes = day.getUTCMinutes();
const UTCseconds = day.getUTCSeconds();

const time = `${UTChours}:${UTCminutes}:${UTCseconds}`;
console.log(time);

utcT.innerHTML = time;
