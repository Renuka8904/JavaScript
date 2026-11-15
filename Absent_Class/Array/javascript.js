arr=[];
console.log(arr.push(100)); //1
//push() method add the elment at the end and return length of array
console.log(arr.push(40));//2

console.log(arr);

arr=[5,8,5,9,5,4,8,3,5,54,21,2];
let odd=[];
let even=[];


console.log(arr.shift(5));
//removes firt element from an array

console.log(arr);
console.log(arr.unshift(5));
console.log(arr);

let fruit=["apple","orange","banana","pitch","Mangoes"];
console.log(fruit);

fruit.splice(2,0,"Chiku");
console.log(fruit);

//the splice method of an array accepts three arguments statt index,elments to add and returns the removed element

console.log(fruit.indexOf("orange"));
console.log(fruit.includes("orange"));

//
let arr1=[0,1,2,3,0,4];
Ans=[1,2,3,4,0,0];

let i=0;
res=[];
sum=[];
for(i=0;i<6;i++){
    if(arr1[i]==0){
      arr1.splice(i,1);
      arr1.push(0);
    }
}
console.log(arr1);

//2 pointer mehod
arr2=[0,1,3,5,0];
left=0;
let right=arr2.length-1;
while(left<right){
    if(arr2[left]==0 && arr2[right]!=0){
        let temp=arr2[left];
        arr2[left]=arr2[right];
        arr2[right]=temp;
        right--;
        left++;
    }
    else if(arr2[right]==0){
        right--;
    }
    else{
        left++;
    }
}
console.log(arr2);

arr2.sort();

console.log(arr2);

arr=[0,1,8,2,0,5,0,10,11];
arr.sort();

let alphaArray=["a","c","r","aad","aab","d"];
alphaArray.sort();

console.log(alphaArray);
console.log(arr);

arr.sort((a,b)=> {return a-b})
console.log(arr);

arr.sort((a,b)=> {return b-a});
console.log(arr);
