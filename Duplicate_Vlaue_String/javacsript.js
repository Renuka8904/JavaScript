//Getting the first duplicate character from the astring
/*let str="abcdefegahi";
let flag=false;
for(let i=0;i<str.length;i++){
    for(let j=i+1;j<str.length;j++){
        if(str[i]==str[j]){
            console.log("First Duplicate Character",str[i]);
            flag=true;
            break;
        }
    }
    if(flag) break;
}*/

//Done using the methods
/*
str="abcdefaefg";
for(let i=0;i<str.length;i++){
    if(str.includes(str[i],i+1));
    {
        console.log("First Duplicate character",str[i]);
        break;
        
    }
 
}
*/

//Object
/*
obj={};
obj.a="Hi there";
obj.b="Bye there";
console.log(obj.a);
console.log(obj.b);
console.log(undefined? "This is the life":"Life is struggling");
console.log(obj.c);// undefined

obj["c"]=obj["c"]? "This is the cat":" This is the Dog";
console.log(obj.c);
obj["c"]=obj["c"]? "This is the Cat":"This is the Dog";
console.log(obj.c)*/

/*

let obj={};
str="abacdefghi";
for(let i=0;i<str.length;i++){
    obj[str[i]]=(obj[str[i]])? (obj[str[i]+1]):1;

    console.log(obj, i, str[i]);
}
    */

//Anagram

let w1 = "silent";
let w2 = "listen";
let flag = true;

if (w1.length == w2.length) {
    for (let i = 0; i < w1.length; i++) {
        let found = false;

        for (let j = 0; j < w2.length; j++) {
            if (w1[i] == w2[j]) {
                w2 = w2.slice(0, j) + "*" + w2.slice(j + 1);
                found = true;
                break;
            }
        }

        if (found == false) {
            flag = false;
            break;
        }
    }
} else {
    flag = false;
}

if (flag) {
    console.log("Anagram");
} else {
    console.log("Not Anagram");
}


/*
let str1="listen";
let str2="silent";
if(str1.length==str2.length){
    for(let i=0;i<str1.length;i++){
        if(str2.includes(str1[i])){}
        else{console.log("Not Anagram");
            break;
        }
        if(i==str1.length-1)console.log("Its Anagram");
    }
}
else{
    console.log("Str is not anagram");

}
*/
/*
console.log("Javascript"[10]);

console.log("charAt() mwthod return the single character");
console.log("Renuka".charAt(0));
console.log("JAVA".charAt(-1));
console.log("charAt() not support negative indexes");

console.log("Renuka".at(-2));//k

//charCodeAt() method
console.log("Renuka".charCodeAt(0));//ASCII Values it will return

console.log("Renuka".toUpperCase());
console.log("Renuka".toLowerCase());

//slice method
console.log("RenukaJogina".slice(6,11)); //at 11th posion value it will not take
console.log("Rechu".slice(0,-1));//Rech
console.log("Java Program".slice(-6));
console.log("Extract the last six letters slice(-6) means");


console.log("RenukaJogin".substring(0,6));//Renuka
console.log("RenukaJogin".substring(-6,2)); //0 to 1 character will print
console.log("Substring all negative values will be converted into Zero(0)");

console.log("Renuka".concat("Jogin"));

//split() method
let lang="Java_JavaScript_Python_C_C++";
console.log(lang.split("_"));
console.log("split() method split the string make it as an array");

let fruit="Mango,Banana,Orange,Pemogranate";
let arr=fruit.split(",");
console.log(arr[0]);

//includes() method
let name1="listen";
console.log(name1.includes("silent")); //false

//indexOf() method
console.log("JavaScript".indexOf("a"));//1
console.log("Returns the first occurance of the character or substring");
console.log("RenukaJogin".indexOf("Jogin"));//6

//lastIndexOf() method
console.log("latIndexOf() returns last index of character or substring");
console.log("Basanna".lastIndexOf("a"));//6

//startWith() and endWith() methods
console.log("RenukaJogin".startsWith("Re"));//true
console.log("RenukaJogin".endsWith("n"));//true

//replace() method
console.log("RenukaJogin".replace("Jogin","Chandu"));

//replaceAll
name1="Renuka Good Morning. How are you Renuka";
console.log(name1);//just printing as it is
console.log(" ");
console.log( name1.replace("Renuka","Sakshi"));//replcaing only one Renuka with Chandu 
console.log("");
console.log(name1.replaceAll("Renuka","Chandu"));//Replacing all renuka in the string with replaceAll() method

//trim() removes white spaces from begining and ending of a string
name2="    Sanidhya Sakshi Samrudhya   ";
console.log(name2.trim());

//trimStart() and trimEnd()

//repeat()
console.log("Renuka ".repeat(4));

console.log("Characterisic of the string is:");
console.log("String is Immutable");
console.log("Orginal string can not be changed character by character");
//Example
str="hello";
str[0]="H"
console.log(str);//hello
*/