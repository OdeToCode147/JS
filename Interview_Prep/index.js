// Q.1. What is the difference between == && ===?

/* 
In java script "==" and "===" is a comparision oprators.
1] == in JavaScript is used for comparing two variables, compare only values but it ignores the datatype of variable.
 Ex: console.log(17 == '17');
 output: true
2]  === is used for comparing two variables, but this operator also checks datatype and compares two values hence it is strict equality comparator.

Ex: console.log(17 === '17');
output: false;
*/


// Q.2. What is the spread operator?

/* 
Spread operator helps us to expand the strings or array literals or object literals using ... (Spread operator) in Function calls. We can use the spread operator to pass an array of numbers as a individual function arguments and quickly copy all or part of array and object into another array or object. 

Ex :
Let a;
a=[1,2,3,4];
let b=[…a];
console.log(b)
output : [1,2,3,4]
*/


// Q.3. What is the difference between var let and const?

/* 
JavaScript allows users to declare a variable using 3 keywords namely - var, let, and const.
-var keyword is oldest keyword and var declarations are globally scoped or function scoped while let and const are block scoped but main difference comes as -
var variables : can be updated and re-declared within its scope;
let variables : can be updated but not re-declared;
const variables : can neither be updated nor re-declared.
*/


// Q.4. What is execution context.

/* 
Whenever any code is run in JavaScriptThe browser's JavaScript engine, it then creates a special environment to handle the transformation and execution of this JavaScript code. This environment is known as the Execution Context. The Execution Context contains the code that's currently running, and everything that aids in its execution. During the Execution Context run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed. There are two kinds of Execution Context in JavaScript:
1.Global Execution Context (GEC)
2.Function Execution Context (FEC)
*/


// Q.5. What is meant by first class functions?

/* 
A Programming Language is said to have first class function if 
    1. function in that language are treated like any other variable  so We can assign a function to an variable 
    2. we can pass a function as an argument 
    3. function can be returned by another function
*/


// Q.6. What are closures? Give an example of closure.

/* 
A closure is the combination of a function and the lexical environment within which that function was declared. In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created inside another function at the function creation time.
Ex :
function outer(){
               let a=10;
               function inner(){
                   console.log(a);
               }
               inner()
           }
           outer();
*/


// Q.7. Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()

/*
The call(), apply() and, bind() methods are all predefined JavaScript methods.

Function.call() - can be used to invoke (call) 
  a method with an owner object as an argument (parameter). With call() , an object can use a method belonging to another object
Ex:
const person = {
      fullName: function() {
        return this.firstName + " " + this.lastName;
      }
    }
    const person1 = {
      firstName:"Surya",
      lastName: "Vamsi"
    }
    const person2 = {
      firstName:"Srikar",
      lastName: "Chaganti"
    }

      person.fullName.call(person1);



Function.prototype.apply() : allows you to call a function but the arguments are provided as an array unlike seperately in call(). 

Ex:
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"Surya",
  lastName: "Vamsi"
}

person.fullName.call(person1, "Hyderabad", "India");


The bind() - creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function  is called. With the bind() method, an object can borrow a method from another object.
Ex :
const person = {
  firstName:"Surya",
  lastName: "Vamsi",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Srikar",
  lastName: "Chaganti",
}
let fullName = person.fullName.bind(member);
*/