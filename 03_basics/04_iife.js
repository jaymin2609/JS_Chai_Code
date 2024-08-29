// Immediately Invoked Function Expressions (IIFE)
console.log("IIFE");

(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})();
// chai()

(()=>{
    console.log(`DB COnnected 2`);
    
})();

((name)=>{
    console.log(`DB COnnected 2 ${name}`);
})('jaymin');


