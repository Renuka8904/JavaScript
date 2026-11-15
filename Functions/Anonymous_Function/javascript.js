//Anonymous Function
//(function{}());
//Function without name

//IIFE
//Synta(function{}());
//Immediately Inovked Function Expression

//Features of IIFE
console.log("Private Scope: Hides variables from the global scope so they do not collide with other scripts");
console.log("No Global Pollution: Keeps temporary variables out of window or global object.");
console.log("Immediate Execution: Runs one-time setup code right way without without needing a separate calls via returned function");
console.log("Closures: Preserves state inside variables across multiple calls via returned functions");

let a=50;
(function(){
    console.log(a);
})();
