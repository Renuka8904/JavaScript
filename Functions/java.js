console.log("Function Day");

//function FunctionName(parameters){} //Declaration
//Function Signature
console.log("FunctionName(parameter()")

//Function definition means { code we write inside it}


let c=0;
function add(a,b){
    c=a+b;
    return c;
}
let result=add(10,5);
console.log(" Result of Aaddition:"+result);
let c1=0;
function sub(a,b){
    c1=a-b;
    return c1;
}
result=sub(10,5);
console.log(" Result of Substraction:"+result);

function sub(a,b){
    return a-b;
}
var v=100;
res=sub(v,v);
console.log(res);

console.log(sub);

function print(a,b,c){
    console.log(arguments); //arguments object
    console.log(arguments[1]); 
    console.log(a);
    console.log(b);
    console.log(c);
    return a+b+c;
}
print(100,200,300);
console.log(print); //function dfinition
console.log(print());
//Function Overloading
//Last declararion considered.

function dis(a=100,b=100){
    //console.log(a+arguments);
    console.log("A",a);
    console.log("B="+b);

    return a-b+(arguments[2]||0);
}
console.log(dis(undefined,55,60)); //150

//We can pass N number of arguments in the function
//All the passed arguments will be stored in "arguments" bject
//In the function Declaration we can pass default values
//if function has not received any parguments(undfined) it will take default value


console.log([10]+10) //1010

console.log("try function Overloading");
console.log("same name different Parameter");
console.log("last declaration is considered only");

console.log("Snny Number program i have to write")