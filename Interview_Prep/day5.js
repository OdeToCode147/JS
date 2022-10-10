// Q.1. What is the for-in loop in JavaScript? Give its syntax.

/* 
The for-in loop in Javascript is a basic control statement that allows us to iterate over all property keys of an object. The statements of code found within the loop body will be executed as in each iteration of the loop, a key is assigned to the key variable.

syntax:

const string = 'Hello World'; 
 for (let i in string) {
    console.log(string[i]);
  }
*/


// Q.2. Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript.

/* 
Local scope: 
Local Scope occurs when we create a variable inside a function. By doing that, the visibility and accessibility of the variable is only allowed within that function.

Block scoped: 
A block scope variable is defined within a block that will not be accessible from outside the block. A block can reside inside a function, and a block scoped variable will not be available outside the block even if the block is inside a function.

function scope: 
Each function creates a new scope. Variables defined inside a function are not accessible from outside the function. Variables declared with var, let and const are quite similar when declared inside a function.

scope chain: 
The scope chain is used to resolve the value of variable names in javascript. Without a scope chain the Javascript engine wouldn't know which value to pick for a certain variable name if there are multiple defined at different scopes.
*/


// Q.3. What is difference between null and undefined and where to use what?

/* 
Undefined means a variable has been declared but has not yet been assigned with a value. undefined is a type by itself (undefined). Unassigned variables are initialized by JavaScript with a default value of undefined.
Ex:  var a;

    console.log(a); //Undefined

Null is used to define something programmically empty. It can be assigned to a variable as a representation of no value. JavaScript never sets a value to null. 
Ex: var b = null;
    alert(b + 100); //100
*/


// Q.4. what is Symbol?

/* 
Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined. It's a very peculiar data type. Once we create a symbol, its value is kept private and for internal use. In this Every Symbol value returned from symbol() is unique. Even if same description is used for a symbol, they return unique values.
Ex: 
    let s1= Symbol(5);
    let s2= Symbol(5);
    console.log(s1==s2)   // false
*/


// Q.5. Write code to explain map and filter in arrays.

/* 
Map(): A Map object holds key-value pairs where values of any type can be used as either keys or values. In addition, a Map object remembers the original insertion order of the keys.
Example :
const n = [1, 2, 3, 4]; 
const double = n.map(item => item * 2);
console.log(double);

Filter(): Filter() is an Array method that is used to return a new array with only those elements that meet a specific criteria. Because the filter() method is a method of the Array object, it must be invoked through a particular instance of the Array class.
const students = [ { name: 'Surya', grade: 92 }, { name: 'Vamsi', grade: 88 },]; 
const studentGrade = students.filter(student => student.grade >= 90); 
return studentGrades;     
*/


// Q.6. Explain passed by value and passed by reference.

/* 
Passed by value:

"Passing by value" means that you pass the actual value of the variable into the function.
Example :
let n1 = 70
let n2 = n1
console.log(n1) // 70
console.log(n2) // 70
n1 = 40
console.log(n1) // 40
console.log(n2) // 70

Passed by reference:

"Passing by reference" means that you pass the variable itself into the function not just the value. 
Example :
let obj1 = {name: "Surya"}
let obj2 = obj1;
console.log(obj1)   {name: "Surya"}
console.log(obj2)   {name: "Surya"}
obj1.name = "Vamsi"
console.log(obj1)   {name: "Vamsi"}
console.log(obj2)   {name: "Vamsi"}
*/


// Q.7. Please explain Self Invoking Function and its code.
/*
Self Invoking Function: In JavaScript, Self invoking functions are nameless self-executing functions and invoked immediately after defining them without being called. These self-invoking functions will execute automatically when followed by ( ). Without ( ), a function cannot be self-invoked. We cannot self-invoke a function declaration.
Example: 
    (function(){
        console.log(:Hello World")
    })();
*/
