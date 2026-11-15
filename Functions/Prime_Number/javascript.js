//Function Calling Statement you can call anywhere
isPrimeNumber(19);
function isPrimeNumber(num){
    let flag=true;
    for(i=2;i<num;i++){
        if(num%i==0){
            flag=false;
            break;
        }
    }
    if(num<2) flag=false;
    console.log((flag)?"Prime Number":"Not Prime Number");
}

