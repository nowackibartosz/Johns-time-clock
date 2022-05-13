const nowTime = new Date().getTime();
const endTime = new Date("2022-01-10 11:03:00").getTime();

const spanD = document.querySelector("span.d");
const spanH = document.querySelector("span.h");
const spanM = document.querySelector("span.m");
const spanS = document.querySelector("span.s");

setInterval(() => {
  const nowTime = new Date().getTime();

  const days = Math.floor(
    nowTime / (1000 * 60 * 60 * 24) - endTime / (1000 * 60 * 60 * 24)
  );

  let hours =
    Math.floor(nowTime / (1000 * 60 * 60) - endTime / (1000 * 60 * 60)) % 24;

  hours = hours < 10 ? `0${hours}` : hours;

  const minutes =
    Math.floor(nowTime / (1000 * 60) - endTime / (1000 * 60)) % 60;

  const seconds = Math.floor(nowTime / 1000 - endTime / 1000) % 60;

  spanD.textContent = days;
  spanH.textContent = hours;
  spanM.textContent = minutes;
  spanS.textContent = seconds;
}, 1000);
