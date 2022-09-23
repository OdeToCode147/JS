/* Q1 : Write the code to access element which is having id as "text" */
/*A:*/
let element0 = document.getElementById("text");
console.log(element0);



/* Q2 : Write the code to access element which is having tag as "h1" */
/*A:*/
let element1 = document.getElementsByTagName("h1");
console.log(element1);



/* Q3 : Write the code to access element which is having class as "box" */
/*A:*/
let element2 = document.getElementsByClassName("box");
console.log(element2);



/* Q4 :
        "<h1>Hello </h1>
        Change the heading from ""Hello"" to ""Hello World"" using DOM functions"*/
/*A:*/
function ChangeText(){
    let element3 = document.getElementsByTagName("h1")
    element3[1].innerText="Hello World";
    console.log(element3[1])
}



/* Q5 : Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
/*A:*/
function ChangeDirection(){
    let item = document.getElementsByClassName("flex-container")
    item[0].style.flexDirection = "column";
    item[0].style.alignContent = "space-evenly";
    console.log(item[0]); 
}



/* Q6 : What’s the difference between window vs document?
/*A:*/

/*Window is the topmost object of the DOM hierarchy that is present in the global execution context that holds all the properties of the webpage as keys in a browser. Wheras the Document is an object which contains the DOM - Document Object Model. By accessing the document object, we can access the element in the HTML page with a window.document or just document and add dynamic content to our web page. */



/* Q7 :
        "<h1>Hello </h1>
        Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"
/*A:*/
function ChangeColor(){
    let item = document.getElementById("Color")
    item.style.color = "red";
    item.id ="heading";
    console.log(item[0]);
}



/* Q8 : Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
/*A:*/
function ReplaceText(){
    let item = document.getElementsByTagName("p")
    item[0].innerText = "Welcome to Elevation academy";
    console.log(item[0]);
}



/* Q9 : Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
/*A:*/
function time(){
    var hours = document.getElementById("hours")
    var minutes = document.getElementById("minutes")
    var seconds = document.getElementById("seconds")
    var ampm = document.getElementById("ampm")
    var time = new Date();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm ="AM";
    if(hrs==0){
        hrs==12;
    }
    if(hrs>12){
        hrs=hrs-12;
        am_pm ="PM"
    }
    if(hrs<10){
        hrs="0"+hrs;
    }
    if(mins<10){
        mins="0"+mins;
    }
    if(secs<10){
        secs="0"+secs;
    }
    hours.innerText=hrs;
    minutes.innerText=mins;
    seconds.innerText=secs;
    ampm.innerText=am_pm
}
setInterval(time , 1000);
time();



/* Q10 : Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected
/*A:*/
function yrch(){
    let SelectedYear = document.getElementById("yrselect").value;
    document.getElementById("year").innerText = SelectedYear;
}



/* Q11 : "Create a form having name ,email, phone no. , birth year 
    Add validations - phone no. should start with 91 , it should be 10 digits , email should be domain prepbytes.com , birth year should be > 95"
/*A:*/

function CheckNumber(){
    let a=document.getElementById("contact").value;
    if(!a.startsWith("91")){
        let b = document.getElementById("startcheck");
        b.style.display = "inline";
    }
    else{
        let b = document.getElementById("startcheck");
        b.style.display = "none"
    }
    if(a.length != 10){
        let b = document.getElementById("digitcheck");
        b.style.display = "inline";
    }
    else{
        let b=document.getElementById("digitcheck");
        b.style.display = "none";
    }
}


function CheckEmail(){
    let a=document.getElementById("email").value;
    if(!a.endsWith("@prepbytes.com")){
        let b = document.getElementById("emailcheck");
        b.style.display="inline";
    }
    else{
        let b = document.getElementById("emailcheck");
        b.style.display="none";
    }
}


function CheckBirth(){
    let a = document.getElementById("birthyear").value;
    if (a < 1995) {
      let b = document.getElementById("birthyearcheck");
      b.style.display = "inline";
    }
    else {
      let b = document.getElementById("birthyearcheck");
      b.style.display = "none";
    }
}


function check() {             
    let a = document.getElementById("email").value
    let b = document.getElementById("contact").value
    let c = document.getElementById("birthyear").value
    
    let array = a.split("@")
    let domain = array[array.length - 1]
    let year = parseInt(c.slice(0, 4))

    if(domain != 'prepbytes.com'){
        alert("Please check Email")
    }
    if((b.substr(0, 2) != '91' || b.length != 10)){
        alert("Please check Phone Number")
    }
    if(year < 1995){
        alert("Please check Year of Birth")
    }
}
