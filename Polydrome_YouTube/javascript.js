/*let n=prompt("Enter a number");
result=0;
q=n;
for(i=1;i<n.length;i++){
     remainder=q%10;
     result=result*10+remainder;
     q=parseInt(q/10); 
}
if(result==n){
    alert("Polydrome Number");
}
else{
    alert("Not Polydrome");
}*/

//Polydrome Numbers
let num="189";
console.log("Number is:",num)
let rem;
let res=0;
let q=num;
for(i=0;i<num.length;i++){
    rem=q%10;
    console.log("Rem =",rem);
    res=res*10+rem;
    console.log("Reverse of 189 is:",res);
    q=Math.floor(q/10);
    console.log("Qoefficient q=",q)
}

console.log(~8); //Formula (n+1) 
