function showMessage(){
  alert("Your file successfully submitted.")
}

function show(){
    alert("How can i assist you");
}

function pressed(){
    console.log("Whenever you press a key inside the textbox, 'Key pressed' appears in the browser console.");
}

function released(){
    console.log("Whenever you release a key after pressing it, 'Key released' appears in the browser console.")
}

//short cut for moving text from one line to down
//console.log("Alt+down Arrow Button");


//onchange event commonly used in Textboxes,Dropdown lists,checkboxes,Radio Buttons
function change(){
    console.log("Course Selected");
    
}

//Event handling in javascript
let btn=document.querySelector("#btn1");
btn.onclick= () =>{
    console.log("Register button was clicked");
    let a=25;
    a++;
    console.log(a);//26
}

let box=document.querySelector("#box");
box.onmouseover =() =>{
    console.log("when mouse is inside the box this message will be diplay");
}

//Event objecct
let box1=document.querySelector("#box1");
box1.onmouseout=(event) =>{
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.key);//defined
    console.log(event.clientX,event.clientY);
}

//event it is just a parameter

box1.onmouseout=(event) =>{
    console.log("Handler 2");
}

//Event Listener
//Syntax node.addEventLisdtener(event,callback)
let box2=document.querySelector("#box2");
box2.addEventListener("mouseover",function EventListenr(){
    console.log("Event Listener 1");
});


box2.addEventListener("mouseover",function EventListenr(){
    console.log("Event Listener 2");
});


const handler3=function EventListenr(){
    console.log("Event Listener 3");
};

box2.addEventListener("mouseover",handler3);

box2.addEventListener("mouseover",function EventListenr(){
    console.log("Event Listener 4");
});

box2.removeEventListener("mouseover",handler3);
