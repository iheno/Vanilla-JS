// JS DOM Function

/*
const title = document.querySelector("#title");

function handleResize() {
  console.log("I have been resized")
}

// function() <- () 즉시 변경
window.addEventListener("resize", handleResize);
 */

 // event click chang color
const title = document.querySelector("#title");

function handleClick() {
  title.style.color = 'blue'; 
}
title.addEventListener("click", handleClick); 