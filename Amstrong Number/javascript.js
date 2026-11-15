//153
//amstrong= 1**35**3+3**3=153

let num=153;
res=0;
rem=0;
for(i=0;i<3;i++){
    rem=num%10;
    cube=rem**3;
    res=res+cube;
    num=Math.floor(num/10);
//parseInt to convert the decimal into Integer Number
}
if(res==153){
    console.log("Amstrong");
}
else{
    console.log("Not Amstrong");
}


//Duck Number 
//If number containing Zero means it is duck
let n=909;
let flag=false;
for(i=0;i<3;i++){
    rem=n%10;
   
    if(rem==0){
        flag=true;
    }

    n=Math.floor(n/10);
}
if(flag==true){
    console.log("Duck Number");
}
else{
    console.log("Not Duck")
}