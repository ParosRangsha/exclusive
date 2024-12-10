let countDownDate = new Date("Jan 5, 2025 12:00:00").getTime();
let x = setInterval(function() {
let now = new Date().getTime();

let distance = countDownDate - now;
let days = Math.floor(distance / (10000 * 60 * 60 * 60));
let hours = Math.floor((distance % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m ";
  document.getElementById("seconds").innerHTML = seconds + "s";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
  }

let distances = countDownDate - now;
let dayss = Math.floor(distance / (10000 * 60 * 60 * 60));
let hourss = Math.floor((distance % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));
let minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let secondss = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("dayss").innerHTML = dayss;
  document.getElementById("hourss").innerHTML = hourss;
  document.getElementById("minutess").innerHTML = minutess;
  document.getElementById("secondss").innerHTML = secondss;
  if (distances < 0) {
    clearInterval(x);
    document.getElementById("dayss").innerHTML = "EXPIRED";
  }
}, 1000);
