console.log("Comparision Operators")

console.log(100=="100");    //true
console.log(100==="100");    //false
console.log(undefined==null);   //true
console.log(undefined===null);  //false
console.log("0"==0);            //true
console.log("AAAAa"< "AAAZz")    //true
console.log("AAAAa"< "AAAAZz")    //false
console.log(typeof "0"!="stirng");  //true
console.log("0"<=0);    //true


console.log("Bitwise Operators");
console.log(5&3)  //1
console.log(7&3); //0111+011   3

console.log("OR Operators");
console.log(5|4);   //101 |100 =101 5
console.log(7|2); //111|010 =111  =7
console.log(~(~9)); //9


console.log("XOR Operators");
console.log(7^2);  //5


//Logical Operators
console.log("Logical or bitwise operator");
console.log(7>>>2);  //1
console.log(7>>2); //1
console.log(7<<2);  //28 left shift it will shift bits to left two bits
console.log(45<=50);
console.log(true&& 10&& console.log("This is false"));
console.log(undefined && console.log("this is going to be Executed"));
console.log(2%2==0 && "Even")  //it will execute last value if both are true means
console.log(!!NaN); //false
console.log("All non-primitive types are truthy values");
console.log(!!20);//true
console.log(!20); //false
console.log(!!-10); //true





console.log("Ternary Operators");
console.log("Boolean Value? Ture Statement:False Statement");
let a=45;
let b=78;
let c=600;
let answer=
/*a>b?
    {a>c?
        ("A is Gratest Number"):("C is Greatest Number")
        :(b>c?
            ("B is Gratest Number"):("C is gratest Number")
        )
*/
console.log(45>60? "True Statement":"False Statement4");


let year=4000;
console.log(year%4==0 ? "Leap Year":"Not Leap year");

let g=a>b?
        (a>c?"A is grater":"C is grater")
        :(b>c? "B is grater":"C is grater")
    console.log(g);


    /*let leapyear=900;
let res=leapyear %4==0?
        (leapyear%100==0?
            (leapyear%400==0? "leap year":"not leap year"):"Not leap"
        ):"Not leap year 900"

       */ 

/*let age=prompt("Enter your age:");  //input keyword
if(age<18){
    alert("You are not eligible to vote");
}
else if(age>100){
    alert("You are dead relic of pass");
}
else{
    alert("Damn Human, do your work");
}
*/
let year1=prompt("Enter the year");
if(year1%4==0){
    alert("Leap year");
}
else if(year1%100==0 && year1%400){
    alert("Leap year");
}
else{
    alert("Not leap year");
}

/*if(year1%4==0){
    if(year1%100==0){
        if(year1%400==0){
            alert("Leap year");
        }
        else{
            alert("it is not");
        }
    }
    else{
        alert("Not leap year");
    }
}*/

//For Loop
console.log(undefined+2);
for(i=1;i<20;i++){
    console.log(i);
}

//While Loop
let iw=20;
while(i>10){
    console.log(iw);
    i--;
}

//Do while loop
let idw=1;
do{
    i++;
    console.log(idw);
}while(i<2)

let i=10;
console.log("step 1:",i++)  //10  11
console.log("step 2:",--i)  //10
console.log("step 3:",--i)  //9
console.log("step 4:",++i)  //10  
console.log("step 5:",i++)  //10  11
console.log("step 6:",i++)  



