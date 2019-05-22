// making a js Clock 
// const clockContainer = document.querySelector(".js-clock")
// const clockTitle = clockContainer.querySelector("h1")

// More cleaner ->

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function  getTime() {
  const date = new Date(),
    minutes = date.getMinutes(),
    hours = date.getHours(),
    seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
 getTime();  
}

init();