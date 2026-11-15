//Recursive Function
let n;
function recursive(n){
    console.log("REcursive Function");
    if(n===1){
        return 1;
    }
    return n*recursive(n-1);
}
console.log(recursive(5));


/*let num; //0 1 1 2 3 5 8
let a=0;
let b=1
let c;
let res=0;
function fibonacci(c){
    if(c<10){
      return false;    
    }
    c=a+b;
    a=b;
    b=c;
    return fibonacci(c); 
       
}
console.log(fibonacci(0));*/

/*var number=100;
console.log(0);
console.log(1);
let last=1;
function recursive1(i,last){
    if(i>number){
        return;
    }
    console.log(i);
    recuresive1(last+1,i);
}
console.log(recursive1(1,1));
*/

//Function taht is passed to another function as an argument is called as call back
//Function that is going to accept another function as an argument


let add=(a,b)=>a+b;
let sub=(a,b)=>a-b;

function calculate(fn,para1,para2){
    console.log(fn(para1,para2))
}
calculate(add,10,20);
calculate(sub,10,20);



console.log("hiiii")
let a,b;
function mult(a,b){
   return a*b;
}

function divide(a,b){
   return a/b;
}

function calculation(fn,para1,para2){
    console.log(fn(para1,para2));
}
calculation(mult,10,20);
calculation(divide,100,20);
