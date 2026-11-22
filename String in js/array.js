let array=[12,24,36];//(3) [12, 24, 36]
console.log(array);

//updating the array
let fruits = ["Apple", "Banana", "Mango"];
fruits[1] = "Orange";
console.log(fruits);
//["Apple", "Orange", "Mango"]

//length method
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits.length); // 4

//. Can we store different data types in an array?
let details = ["Renuka", 22, true, 75.5];
console.log(details);//["Renuka", 22, true, 75.5]

//push() add element at the end of the array
let fruits1 = ["Apple", "Banana", "Mango"];
fruits1.push("Orange");
console.log(fruits1);//["Apple", "Banana", "Mango", "Orange"]

//! We can add multiple elements using a single push() method.
fruits1.push("Pomogranate","Pineapple")
console.log(fruits1);//6
//["Apple","Banana","Mango","Orange","Pomogranate","Pineapple"]

console.log("push() returns length of the new arrya");

let numbers = [10, 20, 30];

let result = numbers.push(40, 50);

console.log(numbers);//[10, 20, 30]
console.log(result);//5
console.log(numbers.length);//5

let arr=["Java","Python","Javascript"]
let value=arr.push("HTML");
console.log(arr);//["Java", "Python", "Javascript", "HTML"]
console.log(value);//4

//pop() reoves element at the end of the array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let result1 = fruits.pop();
console.log(result1);//Orange
console.log(fruits);
console.log("pop() returns the removed element");

let arr1=[];
let result2=arr1.pop();
console.log(result2);
console.log("If the array is empty it will return 'undefined' ");

let a=["HTML", "CSS", "JavaScript", "Java"]
let result3=a.pop();
console.log(a);//["HTML", "CSS", "JavaScript"]
console.log(result3);//Java

//unshift() adds elementd at the begining of the array
let unst=["D","E","F"];
let len=unst.unshift("A","B","C");
console.log(len);//6
console.log(unst);//["A","B","C","D","E","F"]
console.log("unshift() returns the length of the new arraay")

//Task1
let task=["Java", "Python", "JavaScript"];
let len1=task.unshift("HTML","CSS");
console.log(task);//["HTML","CSS","Java", "Python", "JavaScript"]
console.log(len1);//5

//shift() removes element in the begining
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.shift();
console.log(fruits);//["Banana", "Mango", "Orange"]
console.log("The shift() method returns the removed element.");

//The slice() method is used to extract a portion of an array and 
// return it as a new array  without modifying the original array.

let fruits11 = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits11.slice(2));//["Mango", "Orange"]


console.log("splice() method");
//arrayName.splice(start, deleteCount, item1, item2, ...);
console.log("start remove from, removeCount, or replace elements in an existing array.");


//removing muliple elements using the splice()
let fruits12 = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
let result12 = fruits12.splice(1, 2);
console.log(fruits12);//["Apple", "Orange", "Grapes"]
console.log(result12);//["Banana", "Mango"]

//adding multiple elements using the splice method
let fruits13 = ["Apple", "Orange"];
fruits.splice(1, 0, "Banana", "Mango");
console.log(fruits13);

//. Replacing elements using splice()
let fruits14 = ["Apple", "Banana", "Orange"];
let result14 = fruits.splice(1, 1, "Mango");
console.log(fruits14);//["Apple", "Mango", "Orange"]
console.log(result14);//["Banana"]

let numbers1= [10, 20, 30];

let result11 = numbers1.splice(1, 0, 25);
console.log(result11);//[]
console.log(numbers1);// [10, 25, 20, 30]

//join(separators) conver array element into string
let arr15 = ["J", "A", "V", "A"];
let result15 = arr.join("");
console.log(result15); // JAVA

//includes()
let marks = [10, 20, 30, 40];
console.log(marks.includes(20)); // true

console.log(marks.includes(20,2));//false
console.log(marks.includes(30,2));//true
//reverse() reerse the order of elements in the array

//sort() sort elements array as string
let price = [40, 10, 30, 20];
price.sort();
console.log(price); // [10, 20, 30, 40]

//slice() method