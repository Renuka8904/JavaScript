//Arrow Function
//Syntax 
console.log("let/const/varFunction_Name=(parameter) =>{};");


let add=(a,b) => a+b;  //Implicit return
console.log(add(6,9));

let sub=(a,b) => a-b;
console.log(sub(100,50));

let multiply=(a,b) => a*b;
console.log(multiply(4,100));

let divide=(a,b) => a/b;
console.log(divide(500,100));

let modulous=(a,b) => a%b;
console.log(modulous(101,2));

let print=(a,b) =>{
    console.log("Hello Arrow Function");
    return a+b;
}
console.log(print(40,50));

//what are the difference bt named and Arrow Function

//Implicit Return
let a=(a1)=> a1**2;
console.log(a(8));

//Explicit Return
let ball=(a,b)=>{
    return a-b;
}
//Without curly brackets we can not use return statement.
console.log(ball(40,50));

