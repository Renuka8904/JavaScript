let n=45;
let u=undefined;
let nu=null;
let str1="1212";
let str2="sdsds";
let b1=true;
//let s=symbol(524);
let bn=454n;
let nan=NaN;
let obj={};
let arr1=[2];
let arr2=[45,74];


//Arithmetic Oprations
console.log(str1+str2); //1212sdsds
//console.log(str2+s); //Error
console.log(str2+nan);  //sdsdsNaN
console.log(str2+nu);   //sdsdsnull
console.log(str2+u);    //sdsdsundefined
console.log(str2+arr1); //sdsds[object Object]
console.log(str2+obj);  //sdsds454
console.log(str2+bn);   //NaN
console.log("Struing Plus an;y data type will give you String result")

console.log("Null With Other data typs")
console.log(null+undefined);   //NaN
console.log(nu+n); //45
console.log(NaN+b1); //
//console.log(s+n); //Error
console.log(arr1+n); //converted into string
console.log(str1+n); 




console.log(str1-n);   //for this javascript is loosely
console.log(str2-n); //NaN
console.log(u-45); //NaN


//console.log(bn-45);  //Error

console.log(true+60); //61

console.log(arr1-2); //0
console.log(arr2-2); //NaN
console.log([]-45); //-45
console.log({}-45); //NaN


console.log(arr1-arr1); //0
console.log(arr2+2); //45,742
console.log("78"-50); //28
console.log("78"-"50"); //because of type cohession


console.log(undefined-undefined); //Nan
console.log(null-null); //0
console.log(str1-str2); //Nan


console.log("Mltiplication");
console.log(undefined*undefined);//NaN
console.log(arr1*8); //16
console.log(arr2*8); //NaN
console.log("12"*4);
console.log(false*false);
//console.log(bn*45);//Error
console.log(undefined*4);//NaN
console.log([]*2); //0
console.log({}*4)//NaN 

console.log("Divisibility");
console.log(Infinity-Infinity); //NaN
console.log(Infinity+Infinity); //infinity
console.log(Infinity/Infinity); //NaN
console.log(45/0); //Infinity
//console.log(infinity/[50,50]);  Error
//console.log(infinity/"abc");   Error


console.log(str1/str2) //NaN
console.log(true%2); //1
console.log(Infinity**Infinity); //Infinity


console.log("Null with other data typs");

console.log(null+5); //5
console.log(null-5); //-5
console.log(null+"Hello");//nullHello
console.log(null+true); //1
console.log(null+null); //0

console.log(null+undefined); //NaN
console.log(null+{})//null[object Object]
console.log(null+[]);//null
console.log(null+" ");//null
console.log(typeof null) //object


console.log("Undefined with other data types");

console.log(undefined+5);//NanN
console.log(undefined+"Hello"); //undefinedHello
console.log(undefined+true); //NaN
console.log(undefined+null)//NaN
console.log(undefined+undefined);//NaN
console.log(undefined+{});//undefined[object Object]
console.log(undefined+[]);//undefined
console.log(typeof undefined); //undefined


console.log("Number Divisible by Zero");

console.log(89/0);//infinity
console.log(-89/0);//-infinity
console.log(0/0)//NaN


console.log("Infinity with other types");
console.log(Infinity+Infinity);//infinity
console.log(Infinity-Infinity);//NaN
console.log(Infinity+"Hello");//InfinityHello
console.log(Infinity+true);//Infinity
console.log(Infinity+null);//Infinity
console.log(Infinity+undefined);//NaN
console.log(Infinity+[]);//Infinity


