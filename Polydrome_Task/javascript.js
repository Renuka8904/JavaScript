num=prompt("Enter number");
tmp=num;
rev=0;
i=0;
while(num>0){
    ld=num%10;
    rev=rev*10+ld;
    num=Math.floor(num/10);
    i++;
}
if(tmp==rev){
    alert("Palindrome");
}
else{
    alert("It is not palindrome");
}

num =prompt("enter number");
temp=num;
x=num.length;
results=0;
while(num>0){
    ld=num%10;
    num=Math.floor(num/10);
    console.log("result status=",result);
}
if(result==temp){
    alert(armstrong);
}
else{
    alert("not armstrong");
}