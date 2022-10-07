// Q.1. What is the use of setTimeout?

/* 
The setTimeout() is a JavaScript method that's used to call a function or evaluate an expression after a specified number of milliseconds.
Example:

   setTimeout(function () {
     console.log("Hello World");
   }, 3000);
*/


// Q.2. What is an event loop and call stack?

/* 
Event loop:
    The Event Loop is a queue of callback functions that are pulled into the global execution context whenever it becomes empty. When an asynchronous function executes, the callback function is pushed into the queue. The JavaScript engine doesn't start processing the event loop until the asynchronous function has finished executing the code.

Call stack:
    Call Stack is a data structure for javascript interpreters to keep track of function calls (creates execution context) in the program. It has two major actions, When we call a function for its execution, we are pushing it to the stack. When the execution is completed, the function is popped out of the stack.
*/


// Q.3. What are arrow functions?

/* 
An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target. These functions are best suited for non-method functions, and they cannot be used as constructors.
*/


// Q.4. What is a Temporal Dead Zone?

/* 
Temporal Dead Zone is the time period during which the let and const declarations cannot be accessed. In this perios if we try to access the variable before it's declaration we will get an error of reference error. It starts when the code execution enters the block which contains the let or const declaration and continues until the declaration has executed.
*/


// Q.5. What is hoisting?

/* 
Hoisting is a java script mechamism in which classes , variable , function declaration move to the top of their scope before code execution, in java script only hoists are intialized even before their delcaration. 
*/


// Q.6. What is the DOM?

/* 
DOM stands for Document Object Model. It is a programming interface that allows us to create, change and remove elements from the document. We can also add events to these elements to make our page more dynamic.
*/

// Q.7. Difference between undefined vs not defined vs NaN

/*
Undefined:
    If Declared variable are not assinged with any value to it then JavaScript considers it as undefined.
     
Not-Undefined:
    If the variable name which is being accessed doesn’t exist in the memory space then JavaScript considers it as not defined.

NaN:
    NaN represents not a number, this indicates that the value of the variable is not legitimate number
    Example : 2e5.
*/
