/*
let year=prompt("Enter year");
let res=year%4==0 || year%400==0 &&year%100==0?
"leap year":"Not leap year";
console.log(res);*/

let a=2;
console.log(++a); //3  first increase after use it
console.log(a++); //3   first use it after increment

let b=5;
console.log(--b); //4
console.log(b--); // 4

let c=10;
let d=c++;

console.log("D",d);


let x=10;
console.log(++x);
let y=20;
console.log(y++);


let a1=10;
let a2=200;
let a3=30;
let answer=a1>a2?
        (a1>a3? "A1":"A3")
    :
        (a2>a3? "A2":"A3")
    console.log(answer);

   