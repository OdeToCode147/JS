/* Q1:
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter()); */

/* A:
   Counter is not defined */



/* Q2:
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

/* A:
   1 is logged at line number 28  
   0 is logged at line number 30  */



/* Q3:
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter()); */
/* A:
   3 is logged 3 times */



/* Q4:
Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

/* A: */
let outer = function (length) {
    inner = function (breadth) {
    let area = length*breadth;
    console.log("the area of ractangle is" , area);
    };
  };
  outer(20);
  inner(50);


  
/* Q5:
Take a variable in outer function and create an inner function to increase the counter every time it is called

/* A: */

let outer1 = function () {
    variableCount = 0;
    inner1 = function () {
    variableCount += 1;
      console.log("the count is" , variableCount);
    };
  };
  
  outer1();
  inner1(); //output wil be 1
  inner1(); //output wil be 2
  inner1(); //output wil be 3
  inner1(); //output wil be 4
  inner1(); //output wil be 5



/* Q6:
Print Output

var a = 12;
(function () {
  alert(a);
})();*/

/* A:
   The window will alert with a value of 12 */



/* Q7:
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

/* A:
   The window will alert with a value of 12 */



/* Q8:
var globalVar = ""xyz"";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        ""outerArg = "" + outerArg + ""\n"" +
        ""innerArg = "" + innerArg + ""\n"" +
        ""outerVar = "" + outerVar + ""\n"" +
        ""innerVar = "" + innerVar + ""\n"" +
        ""globalVar = "" + globalVar);
    
    })(456);
})(123); */
/* A:
   outerArg = 123
   innerArg = 456
   outerVar = a
   innerVar = b
   globalVar = xyz */