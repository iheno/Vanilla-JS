// 변수를 사용하는 방업
// first: Create
// then : Initialize -> 초기화
// last : Use

//const 는 상수다 바꿀수 없다. let 만이 변수 값을 바꿀수 있다.

// 변수를 선언 할때는 기본적으로 const를 쓰자 내가 팔요할 때만 let사용

/* String 
const what = "antonio";
console.log(what);
*/

/* Boolern true: 1 false : 0
const wat = true;
console.log(wat);
*/

/* Number
const wat = 555;
console.log(wat);
*/

/* Float 소수점을 가지고 있다.
const wat = 55.1;
*/

/* 데이터를 정렬하는 방법 1.array 2.object
const henoInfo = {
  name: "heno",
  age: 38,
  gender: "Male",
  isHandosem: true,
  favFoods: ["apple", "Cheeze", "Pizza"],
  favMovies: [
    {
      name: "King", 
      fatty: false
    }, 
    {
      name: "Man of black", 
      fatty: true
    }
  ]
}
console.log(henoInfo);
*/

/*
function SayHello() {
  console.log('Hello!')
}

SayHello();
*/

function sayHello(name, age){
  console.log('Hello!', name, "You have", age, "yeras of age.");
}

sayHello("Heno!", 15);
