

let a="CD";
console.log(a.length);  //2

while(true){

    let grade=prompt("Enter the grade");
    if(grade.length>1){
        alert("grade is of single alphabet");
        continue;
    }
    else if(grade.length<1){
        alert("You have to enter the grade");

    }
    else{
        grade=grade.toUpperCase();
        let c=20;
        let flag=true;
        console.log(grade);
        switch(grade){
            case "A":alert("You have passed Exams, Got Get break");break;
            case "B":alert("You have passed Exams, go Study");break;
            case "C":alert("You have passed, Go Sleep");
            case "D":alert("You have faled in Exams, Go Die");break;
            default:flag=false; 
                     alert("You have entered wrong Grades");break;
        }
        if(flag){
            
            break;
        }
    }
}

