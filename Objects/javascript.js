const student={
    name:"Renuka",
    Branch:"CSE",
    Degree:"BE",
}
console.log(student);
console.log(student["name"]);
console.log(student["Branch"]);
console.log(student["Degree"]);

let emp={name:"abc", id:123, sal:40000}
console.log(emp);
console.log("Name of an employee is:",emp["name"]);
console.log("ID of an employee is:",emp["id"]);
console.log("Salary of Employee is:",emp["sal"]);

const emp2={name:"Renuka",id:"456",sal:50000}
console.log("Employeee Name is:",emp2.name);
console.log("Employee ID is:",emp2.id);
console.log(emp2.sal);

console.log(emp2.sal+10000);
console.log("Employee name change to",emp2["name"]="Chandu");

const student1 ={
    name:"Renuka",
    marks:80,
    usn:123,
    printMarks:function(){
        console.log("Marks= ",marks);
    }
}

console.log(student1);

