const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// select "deadline" "giveaway" "H4"
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 7, 12, 11, 30, 0);
// console.log(futureDate);

let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = months[futureDate.getMonth()];
// month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway end on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}am`

//future time in ms
const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today
  
  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1day = 24hrs

  // values in ms
  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMinutes = 1000 * 60;
  // cal. all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let munites = Math.floor((t % oneHour) / oneMinutes);
  let seconds = Math.floor((t % oneMinutes) / 1000);
  
  //set values array;
  const values = [days, hours, munites, seconds];

  const format = (item) => (item < 10) ? item = `0${item}` : item;

  items.forEach((item, index) => item.innerHTML = format(values[index]));

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired`
  }

};

// countdown
const countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();