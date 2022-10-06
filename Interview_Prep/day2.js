// Q.1. What is creation phase and execution phase?

/* 
Execution context consists of two phases :- Creation Phase and the Execution Phase.

  Creation Phase :
  During the creation phase of the execution context, JS allocates memory space for the functions and variables. In case of functions, the whole function body is stored but in case of the variables, it is declared and assigned a default value undefined.
  example:
  var a = undefined;

Execution Phase:
 In this phase JavaScript engine executes the code on a line-by-line basis meaning one line at a time. It is in this phase where the variables are assigned the values actually supplied for them. 
  example:
  var a = 9;
*/


// Q.2. What are objects in javascript?

/* 
Objects in JavaScript can be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. The key of a property can be a string And the value of a property can be any value.
example: 
    let Student = {
        Name : "Surya",
        Age : "23"
    }
*/


// Q.3. What are function constructors?

/* 
The constructor method is a special method for creating and initializing an object created within a class. In JavaScript, a constructor gets called when you declare an object using the new keyword. The purpose of a constructor is to create an object and set values if there are any object properties present. If you do not specify a constructor method, a default constructor is used.
Example :
    class Employee {
        constructor() {
            this.name = "Surya";
        }
    }
    var employeeObject = new Employee();
    console.log(employeeObject.name);
*/


// Q.4. Explain prototypes.

/* 
Prototype is a nothing but a special type of object to which we can add additional properties that can be accessed across all the instances Javascript is a prototype based language that means whenever we create a function, javascript engine adds a prototype property inside the function, prototype property besically is an objectwhere we can attached methods and properties in a prototype object which enable all the other object t0 inherit these method and property.
*/


// Q.5. What is prototype chain

/* 
Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.The prototype on object instance is available through Object. getPrototypeOf(object) or (proto) property whereas prototype on constructors function is available through Object.prototype.
*/


// Q.6. Give an example of inheritance using function constructor

/* 
-In JavaScript, when a child element is inheriting the properties of it's parents then it is known as Inheritance.
Example :
function student(name, age) {
        this.name = name;
        this.age = age;
};
function newstudent(name, age,  specialization) {
        student.call(this, name, age);        
        this.specialization = specialization;
}
let stud1 = new student("Surya" , 23) 
let stud2 = new newstudent("Vamsi" , 23, 'EEE')
console.log(stud1);
console.log(stud12);


// Q.7. What are callbacks?

/*
A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action.
Ex :
    function callbackFunction(name) {
        console.log("Hello " + name);
    }
    function outerFunction(callback) {
        let name = prompt("Please enter your name.");
        callback(name);
    }
    outerFunction(callbackFunction);
*/