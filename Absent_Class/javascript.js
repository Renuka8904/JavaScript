let name1 = " raju rajendra raghvendra"
 name1="Rajua";
  console.log(name1.length); //17
let phone = "9575584568"
 phone="9874561230"
 formatedName = name1.trim()

console.log(name1.trim().length);
//  RA9568RAEN

 console.log(name1.includes("raju")); //false
 console.log(name1.trim().indexOf(" ")); //-1
 let firstSpace = formatedName.indexOf(" ")// first Occurance
 let lastSpace = formatedName.lastIndexOf("a") // last Occurance 4
 console.log(lastSpace);

// // console.log(formatedName.slice(0,firstSpace));
// // console.log(formatedName.slice(firstSpace+1,lastSpace));
// // console.log(formatedName.slice(lastSpace+1));
// let firstName = formatedName.slice(0,firstSpace)
// let middlename = formatedName.slice(firstSpace+1,lastSpace)
// let lastName = formatedName.slice(lastSpace+1)

// // if(phone.length!=10 || phone.includes(" ") ||phone.includes("+") )
// // {
// //     console.log("Enter the Valid Phone Number");
    
// // }
// // phone.includes(" ") && console.log("You r having space in Number");
// // phone.includes("+") && console.log("You r having + in Number");

// // phone.length!=10 && console.log("You have not entered valid Phone Number");

// // Even 
// // starting middle-1, middle+1
// // 5
// // 4
// // 6
// // Odd middle , middle+2
// // 2
// // 4

// let middleIndex = middlename.length%2==0? (middlename.length/2)-1:Math.floor((middlename.length/2))

// console.log((middlename.length/2))





// console.log(
//    ( firstName.slice(0,2) + phone.slice(0,2)+phone.slice(-2)+lastName.slice(0,2)+
//     middlename.slice(middleIndex,middleIndex+2)).toUpperCase()
// );





/*let sentence="javascript"
let vowel="AEIOU"
for(let i=0;i<sentence.length;i++){
    console.log(sentence[i]);
    if(vowel.includes(sentence[i]))
    {
        console.log(i);
        break;
        
    }
    
}

let min="infinity"
let vowel1="aeiou"
for(let j=0; j< vowel.length; j++){
    console.log(sentence[j]);
    if(min>sentence.indexOf(sentence[j]))
    {
        min=sentence.indexOf(vowel[j]) 
           
    }

    
}

let min1="string class  is going"
let vowel2="AEIOU"
for(let i=0;i <vowel2.length;i++){
    console.log(sentence[i]);
        if(min1>sentence.lastIndexOf(sentence[i]))
        {
            min1=sentence.lastIndexOf(vowel2[i])
        }
    
    
}

//replace
str="sea sheel sead sheel to stores"
console.log(str.replace("sea","lakes"));
 

//replaceall

 str="sea sheel sea sheel to stores to river"
console.log(str.replaceAll("sea","lakes"));
*/