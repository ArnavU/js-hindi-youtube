// Immediately Invoked Function Expressions (IIFE)
// Advantages-
/*
Encapsulation:
Avoiding Global Pollution:
Variable Hoisting Prevention:
Isolation from External Code:
Closure and Preserving State:
Cleaner Syntax:
Immediate Execution:
Better Code Readability:
Preventing Access to Internal Details:
Compatibility:
*/

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); 
// After an IIFE a semicolon is must

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// note: 
/*
"IIFE avoids polluting the global namespace" means that Immediately Invoked Function Expressions (IIFE) help prevent the unintended creation of variables or functions in the global scope, reducing the risk of naming conflicts and improving code encapsulation.

In JavaScript, variables and functions declared outside of any function or block have global scope, which means they are accessible from anywhere in the script. This can lead to naming collisions, where variables or functions with the same name are defined in different parts of a program, potentially causing unexpected behavior or errors.
*/