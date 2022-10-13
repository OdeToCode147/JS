/*Q1. Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button*/
function addtext(){
    parent = document.getElementById("Q1")
    heading = document.createElement("h1")
    heading.innerText = "MERN stack"
    parent.appendChild(heading)
}
    


/*Q2. Write code to get 1st H1 element from a webpage using DOM*/
let q2 = document.getElementsByTagName("h1")[0]
console.log(q2)
    


/*Q3. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second*/
function clock(){
    let hours = document.getElementById("hours")
    let mins = document.getElementById("mins")
    let secs = document.getElementById("secs")
    let period = document.getElementById("period")
    var time = new Date();
    let a = time.getHours();
    let b = time.getMinutes();
    let c = time.getSeconds();
    mins.innerText = b;
    secs.innerText = c;
    if(a>12){
        period.innerText = "PM";
        a-=12;
        hours.innerText = a;
    }
    else{
        period.innerText = "AM";
        hours.innerText = a;
    }
}
setInterval(clock,1000)
    


/*Q4. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"*/
function replaceText(){
    let a = document.getElementById("texttochange")
    a.innerText = "Welcome to Elevation academy"
}
    


/*Q5. Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text*/
function hideText(){
    document.getElementById("texttohide").style.display = "none";
}


/* Q6. Given an array of 0's and 1's find out number of 0's*/

let arr = [1,0,1,1,0,1,0,0,0,0,1,0,1,0,0];
var count = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]==0){
        count+=1;
    }
}
console.log(count)

/* Q7. Given an array find out total no. of odd and even nos.*/

let arr1 = [2,4,3,7,5,6,55];
var even = 0;
var odd = 0;
for(let i=0; i<arr1.length; i++){
    if(arr1[i]%2==0){
        even+=1;
    }
    else{
        odd+=1;
    }
}
console.log(odd , even)


/* Q8. Given a string find out number of vowels*/

function findVowels(str){
    var total = 0;
    for(let i=0; i<str.length; i++){

        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' ){
          total+=1;
        }
    }
    console.log(total)
}
findVowels('Surya'.toLowerCase())


/* Q9. Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same.*/


let obj1 = {
  name: "Surya",
  arr: [1, 7, 13, 24, 35],
};
let obj2 = {
  name: "Vamsi",
  arr: [1, 7, 13, 24, 25],
};

function check(obj1, obj2) {
  let n = obj1.arr.length;
  let length = 0;
  for (let i in obj1.arr) {
    if (obj1.arr[i] === obj2.arr[i]) {
      length++;
    }
  }
  if (length === n) {
    console.log("Equal");
  } else {
    console.log("Not Equal");
  }
}
check(obj1, obj2);

