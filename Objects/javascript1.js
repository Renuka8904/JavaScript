let person={
    name:"SRK",
    date:"2rd November",
    thisKey:this,
    con:function(){
        console.log("We are inside the function");
        console.log(this.name);
        console.log("Function ended");
    }
}

var person1="Raju";
let individual={
    person1:"Sanju",
    person2:this.person1,
    callPerson(){
        let person1="Gaju";
        console.log(this.person1); //Sanju
        console.log(this.person2); //Raju window object
    }
}

individual.callPerson();

person={
    name:"",
    age:"",
    salary:"",
    setPerson(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary
    },


printPerson(){
    console.log("The Name of the person is ${this.name} and his/her age is ${this.age} While having only ${this.salary} salary perday");

}
}

person.setPerson("Renuka" ,45,4000);
person.printPerson();

//call apply  bind
//This are method that we use on the function to declare this
//keyword for the function
//FunctionName.call(this,argument1,argument2)
//FunctionName.apply(this,[arguments1,arguments2])
//functionName.bind(this,argument1,argument2)
//Bind method will return a new Function with this attached object

// let  person = {
//     name:"SRK" , 
//     date:"2nd November",
//     thisKey:this,
//     con:function(){
//         console.log("we are inside the function");
//         console.log(this.name);
//         console.log("Function ended");
//     }
// }


// console.log(obj);
// person.con()







// let person={
//     name:"",
//     age:"",
//     salaray:"",
//     setPerson(name,age,salaray){
//         this.name = name;
//         this.age = age
//         this.salaray = salaray
//     },
//     printPerson(){
//         console.log(`THe Name of Person is ${this.name} and his/her age is ${this.age} while having only ${this.salaray} salary perday`);
        
//     }
// }

// person.setPerson("Rahul", 45, 8555)
// person.printPerson()


var a =400
var b = 600
let printuser = function(status){
    console.log("THe Name of the Person is "+this.name+" and has the age of "+ this.age+" with salary "+this.salary+" is "+status);
}
// add(200,200)
const users = [
  { name: "John", age: 25, salary: 45000 },
  { name: "Alice", age: 28, salary: 55000 },
  { name: "Bob", age: 30, salary: 60000 },
  { name: "Emma", age: 24, salary: 40000 },
  { name: "David", age: 35, salary: 75000 }
];

// call apply bind
// This are the method that we use on the function to declare this keyword for the function
// ? It will execute the function instantly and return the value of function
// functionName.call(this,argument1,argument2)
// functionName.apply(this,[argument1,argument2])

// functionName.bind(this,argument1,argument2) 
// ? bind method will return a new Function with this attached object





printuser.call(
    { name: "John", age: 25, salary: 45000 },
    "Married","Unmarried","Dudhse Dhula Hua")

printuser.apply({ name: "John", age: 25, salary: 45000 },
    ["Married","Unmarried","Dudhse Dhula Hua"])

let newFun = printuser.bind(
    { name: "John", age: 25, salary: 45000 },
    "Married","Unmarried","Dudhse Dhula Hua")

setTimeout(()=>{
    newFun()
},2000)

var person1 = "Raju"
let individual={
    person1:"Sanju",
    person2:this.person1,
    callPerson(){
        let person1="Gaju"
        console.log(this.person2);
    }
}
// individual.callPerson()