/*
if(true){
  block
} else {
  block
}
*/

// === "check"
/*
if(10 === 5){
  console.log("Hey man!");
} else {
  console.log("What's up!")
}
*/

/*
if("heno" === "Henos"){
  console.log("Yep");
} else {
  console.log("nop");
}
*/

/*
if("10" === 10){
  console.log("Yep");
} else {
  console.log("nop");
}
*/

/*
if("10" === 10){
  console.log("Yep");
} else if("10" === "10"){
  console.log("great!");
} else {
  console.log("no!");
}
*/

// && and 항상 참이어야 된다.
if(20 > 5 && "heno" === "henos"){
  console.log("Yes");
} else {
  console.log("No");
}

// || or 하나만 참이여어도 된다.
if(20 > 5 || "heno" === "henos"){
  console.log("Yes");
} else {
  console.log("No");
}

/*
true && true = true;
false && true = false;
true && false = false;
false && false = false;

true || true = true;
false || true = true;
true || false = true;
false || false = false;
*/

// prompt 는 거의 쓰이지 않는다! 
 const age = prompt("How old are you");

 if(age >= 18 && age <= 21){
   console.log("You can drink but you should not")
 } else if(age > 21){
   console.log("go a head!")
 } else {
   console.log("Don't Drink!")
 }

 