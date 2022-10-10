// Q.1. How many operators do we have in JS ?

/* 
An operator is capable of manipulating a certain value or operand based on it's mathematical and logical computations. There are various operators supported by JavaScript, namely -

    1. Arithmetic Operators:
        Includes + (Addition),– (Subtraction), * (Multiplication), / (Division), % (Modulus), + + (Increment) and – – (Decrement)

    2. Comparison Operators: 
        Includes = =(Equal),!= (Not Equal), ===(Equal with type), > (Greater than), > = (Greater than or Equal to),< (Less than),<= (Less than or Equal to)

    3. Logical Operators: 
        Includes &&(Logical AND),||(Logical OR),!(Logical NOT)

    4. Assignment Operators: 
        Includes = (Assignment Operator), += (Add and Assignment Operator),  – = (Subtract and Assignment Operator), *= (Multiply and Assignment), /= (Divide and Assignment), %= (Modules and Assignment)
*/


// Q.2. What are pure functions?

/* 
Pure Function is a function that always returns the same result if the same arguments are passed. It does not depend on any state, or data change during a program’s execution rather it only depends on its input arguments.
*/


// Q.3. What is callback hell

/* 
Callback Hell is an anti-pattern with multiple nested callbacks that forms a pyramid like structure which makes code hard to read and debug when dealing with asynchronous logic. We need to avoid it as much as possible.
*/


// Q.4. What are promises and why do we need them?

/* 
Promise is a constructor function , which takes two arguments/parameters, resolve and reject.If the promise has been resolved properly then it will go to the .then block and if the promise has been rejected due to some errors then it will go to the .catch block.  Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.
Example :      
    const promise = new Promise(
        (resolve) => {
            setTimeout(() => {
            resolve("I'm a Promise!");
        }, 5000);
    },
    (reject) => {}
    );
    promise.then((value) => console.log(value))
*/


// Q.5. What is promise chaining

/* 
The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining.
Example:
    new Promise(function(resolve, reject) {
    
      setTimeout(() => resolve(1), 1000);
    
    }).then(function(result) {
    
      console.log(result);
      return result * 2;
    
    }).then(function(result) {
    
      console.log(result); 
      return result * 3;
    
    }).then(function(result) {
    
      console.log(result); 
      return result * 4;
    
    });
    
*/


// Q.6. Give an example of async/await

/* 
An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
*/

// Q.7. What is the purpose of async/await keywords?

/*
The purpose of async and await is to simplify the syntax necessary to consume promise-based APIs. The behavior of async and await is similar to combining generators and promises. Async functions always return a promise. To avoid of multiple .then blocks(promise chaining) by using async/await.
*/
