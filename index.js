const days = document.querySelector(".days-count");
const hours = document.querySelector(".hours-count");
const minutes = document.querySelector(".minutes-count");
const seconds = document.querySelector(".seconds-count");
const sidebar_el = document.querySelector(".sidebar");
const dateInput = document.getElementById('dateInput');
let userInputDate = new Date(2025,0,0);

dateInput.min = new Date().toISOString().split("T")[0];

console.log(dateInput);

dateInput.addEventListener('change', function(event) {
  console.log(event.target.value)
  userInputDate = event.target.value;
});


function countdown() {

  const eventDate = new Date(userInputDate);
  eventDate.setDate(eventDate.getDate() + 1);
  eventDate.setHours(0,0,0,0);

  let currentDate = new Date();
  let timeDiff = Math.abs(eventDate.getTime() - currentDate.getTime());
  let timeDiffInSecond = timeDiff / 1000;


  const daysLeft = Math.floor(timeDiffInSecond / 86400);
  days.textContent = daysLeft;

  const hoursLeft = Math.floor(timeDiffInSecond / 3600) - (daysLeft * 24);
  hours.textContent = hoursLeft;

  const minutesLeft = (Math.floor(timeDiffInSecond / 60) - (daysLeft * 1440) - (hoursLeft * 60));
  minutes.textContent = minutesLeft;

  const secondsLeft = (Math.floor(timeDiffInSecond / 1) - (daysLeft * 86400) - (hoursLeft * 3600) - (minutesLeft * 60));
  seconds.textContent = secondsLeft;  
}

function sidebar() {  
  if(sidebar_el.style.display === "none") {
    sidebar_el.style.display = "block";
  } else {
    sidebar_el.style.display = "none";
  }

}

countdown();

setInterval(countdown, 1000);

