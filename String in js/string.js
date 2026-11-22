let str = "hello";
console.log(str.toUpperCase()); // HELLO

let str1 = "JavaScript";
console.log(str1.charAt(2));//v

let str2 = "JavaScript";
console.log(str2.at(-1));//t

//slice string.slice(start, end);
let str3 = "JavaScript";
console.log(str3.slice(-1));//t

//substring() negative treat as 0
let str4 = "JavaScript";
console.log(str4.substring(2, 6));//vaSc

//. substr(start index, number of characters)
let str5 = "JavaScript";
console.log(str5.substr(4, 6));//Script

//includes()
let str6 = "JavaScript";
console.log(str6.includes("Script"));//true

//indexOf()
let str7 = "JavaScript";
console.log(str7.indexOf("a"));//1

//lastIndexOf()
let str8 = "JavaScript";
console.log(str8.lastIndexOf("a"));//3

//replace()
let sentence="Hello world Hello worldr";
console.log(sentence.replace("Bye"));//Bye world Hello World

//replaceAll()
let sentence1="Hello world Hello worldr";
console.log(sentence1.replaceAll("Bye"));//Bye world Bye World

//split()
let str9 = "HTML CSS JavaScript";
console.log(str9.split(" "));
//["HTML", "CSS", "JavaScript"]

//repeat() Repeats a string a specified number of times.
let str10 = "Hi ";
console.log(str10.repeat(3));//Hi Hi Hi




