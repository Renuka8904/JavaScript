






let div = document.getElementById("notification")
let btn = document.getElementById("download")

// btn.addEventListener("click",()=>{
//     console.log("We have clicked on btn");
//     btn.disabled = true
//     setTimeout(() => {
//         btn.disabled=false
//         alert("You can download again")
//     }, 5000);
// })


function debounce (){
    let id =0
    return function(){
        clearTimeout(id)
        console.log("New Code is Generated");
        
        id = setTimeout(()=>{
            console.log("This is CODE");
            
        },2000)
    } 
}
btn.onclick= debounce()
// let demo = debounce()
// demo()
// demo()
// demo()
// let  demo2 =debounce()
// demo2()
// demo()





// btn.addEventListener("click",()=>{
//     console.log("We have clicked on Download btn");
// })

// let a= 10
// a =20
//  console.log(a);
 

// btn.onclick= ()=>{console.log("We have clicked on btn");}

// btn.onclick=()=>{   console.log("We have clicked on Download btn");}

