const targetDate = new Date("Nov 17, 2024");

const daysText = document.querySelector('span[data-value="days"]');
const hoursText = document.querySelector('span[data-value="hours"]');
const minsText = document.querySelector('span[data-value="mins"]');
const secsText = document.querySelector('span[data-value="secs"]');

const updateTime = function () {
  const currentTime = new Date().getTime();
  const remainingTime = targetDate - currentTime;

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((remainingTime % (1000 * 60)) / 1000);


  daysText.textContent = days;
  hoursText.textContent = hours;
  minsText.textContent = mins;
  secsText.textContent = secs;
};
setInterval(updateTime, 1000);

updateTime();
