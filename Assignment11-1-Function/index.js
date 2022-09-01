// Q1 : Create one function with zero parameter having a console statement;
//A :
function test(){
    console.log("Hello")
}
test()

// Q2 : Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7".
//A :
function Adder(a,b){
    console.log(a+b)
}
Adder(3,4)

// Q3 : Create one arrow function.
//A:
let arrow = (c,d) => {
    console.log(c , d)
}
arrow(4,5)

// Q4 : "Print output: 
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();"
//A :
console.log("The Answer is", undefined)

//Q5 : Print output: 
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };
//A:
console.log("The Answers are", undefined, "&" , 21);

//Q6 : "Print output
// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };"
//A:
console.log("a is not defined since the syntax for function declaration is wrong and the execution of the code will stop at a() and won't proceed after that")
//Q7 : Write a function that accepts parameter n and returns factorial of n
//A:
let factorial = 1
function fact(n){
    for(let i=1 ; i<=n ; i++){
        factorial*=i;
    }
}
fact(5)
console.log(factorial);
