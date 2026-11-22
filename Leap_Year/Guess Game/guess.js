let guess=6;
let my_number=5;
//prompt("enter your number:");
let i=0;
while(guess!==my_number){
    console.log("your guess is wrong, try again");
    my_number=Number(prompt("enter number again"));
    i++;
}
console.log("Congratulation you finally guess the number after"+i+ " attempt");