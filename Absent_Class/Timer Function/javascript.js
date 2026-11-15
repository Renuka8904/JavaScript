//!setTimeout(callback, time in mili seconds=1s)
console.log("Hello");
var b=0;

console.log("Hello world");

setTimeout((()=>{console.log("Hi there")}),2000);

for(let i=1;i<=110;i++){
    setTimeout(()=>{
        console.log("Now its "+i+" Seconds");
    
},i*1000)
}

let div=document.getElementById("div1");
setTimeout(()=>{
    div.innerHTML=`<h1>This is wrong Page</h1>`
    console.log(document.body);
    document.body.style.backgroundColor="navy";
    document.body.style.color="pink";

})

function randomFun(){
    return Math.floor(Math.random()*256);
}

function changeBackground(){
    document.body.style.background=
    `rgb(${randomFun()},${randomFun()},${randomFun()})`
   
    
}
for(let i=0;i<10;i++){
    setTimeout(()=>{
       changeBackground();

    },i*1000)
}
console.log("setTimeout retunr id");
//setInterval
let id=setInterval(()=>{
    changeBackground();
},1000);
setTimeout(()=>{
    clearInterval(id);
},10000);
 
