const cal = {
  plu: (a, b) => `addition: ${a} + ${b} = ${a+b}`,
  min: (a, b) => `subtraction: ${a} - ${b} = ${a-b}`,
  mul: (a, b) => `multiplication: ${a} * ${b} = ${a*b}`,
  div: (a, b) => `division: ${a} / ${b} = ${a/b}`
}

function calculator (a, b){
  console.log(cal.plu(a,b)),
  console.log(cal.min(a,b)),
  console.log(cal.mul(a,b)),
  console.log(cal.div(a,b))
}

calculator(5,5)
