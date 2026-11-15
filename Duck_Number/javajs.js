//Hosting
//Taking variable Declaration top of the Execution Scope that is called Hostin
//What variables are Hosted
//The var and Named function are Hosted


//Duck Number Program
//If Number contains Zero means it is duck number
//045 not a duck number 045=45 thats why

let n=123045;
flag=false;
while(n>0){
    let rem=n%10;
    if(rem==0){
        flag=true;
        break;
    }
   n=Math.floor(n/10);
}
if(flag==true){
    console.log("Duck Number");
}
else{
    console.log("Not Duck Number");
}

//Neon Number
// Example 9*9=81, 8+1=9
let num=9;  //81
let mult=num*num;
let res=0;
let temp1=0;
while(mult>=1){
   temp1=mult%10;   //81%10=1,  8%10=8
    res=res+temp1; //0+1=1,   1+8=9
    mult=Math.floor(mult/10); //81/10=8    8/10=0.8
}

if(res==num){
    console.log("Neon Number");
}
else{
    console.log("Not Neon Number");
}

//Harshad Number 
//Means 48 =4+8=12 48%12==0
let num1=48;
let temp2=0;
let sum=0;
while(num1=>1){
    temp2=num1%10; //48%10==8, 4%10=4
    sum=sum+temp2;  //0+8=8, 8+4=12
    num1=Math.floor(num1/10); //4
}
if(48%sum==0){
    console.log("Harshad Number");
}
else{
    console.log("Not Harshad Number");
}

//Fibonacci S`equence
let a=0;
let b=1
let c;
let num2=10;
let temp3;
for(i=0;i<num2;i++){
    console.log(a);
    console.log(b);
    c=a+b;
    a=b;
    b=c;
}