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
}, 1000);
