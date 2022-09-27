/* Q1:
Write one example explaining how you can write a callback function ? */
/*A: */

// function
function message(name, callback) {
    console.log('Hi' , name);
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
message("Surya" , callMe());



/* Q2:
Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
Explain callback hell.
Numbers
1
2
3
4
5
6
7 */
/*A: */
function CallbackHell(){
    setTimeout(() => {
        console.log("1")
        setTimeout(() => {
            console.log("2")
            setTimeout(() => {
                console.log("3")
                setTimeout(() => {
                    console.log("4")
                    setTimeout(() => {
                        console.log("5")
                        setTimeout(() => {
                            console.log("6")
                            setTimeout(() => {
                                console.log("7")
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
CallbackHell()



/* Q3:
Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
Numbers
1
2
3
4
5
6
7 */
/*A: */

let hell = new Promise((resolve , reject) =>{
    setTimeout(() => {
        resolve(console.log("1"))
    }, 1000);
}).then( ()=> new Promise((resolve , reject) =>{
    setTimeout(() => {
        resolve(console.log("2"))
    }, 1000);
})).then( ()=> new Promise((resolve , reject) =>{
    setTimeout(() => {
        resolve(console.log("3"))
    }, 1000);
})).then( ()=> new Promise((resolve , reject) =>{
    setTimeout(() => {
        resolve(console.log("4"))
    }, 1000);
})).then( ()=> new Promise((resolve , reject) =>{
    setTimeout(() => {
        resolve(console.log("5"))
    }, 1000);
})).then( ()=> new Promise((resolve , reject) =>{
    setTimeout(() => {
        resolve(console.log("6"))
    }, 1000);
})).then( ()=> new Promise((resolve , reject) =>{
    setTimeout(() => {
        resolve(console.log("7"))
    }, 1000);
}));



/* Q4:
Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected  */
/*A: */
let getPromise = (val) => {
    return new Promise((resolve,reject) =>{
     if(val =="yes"){
        resolve(val)
     }
     else{
        reject("Promise Rejected")
     }
    })
 }
 getPromise("yes").then((data)=>{
     console.log(data);
 }).catch((error)=>{
     console.log(error);
 })



 /* Q5:
Create examples to explain callback function
/*A: */

// Main function
let mainFunction = (callback) => {
    setTimeout(() => {
        callback([1, 2, 3]);
    }, 1000)
}
  
// Add function
const add = (array) => {
    let sum = 0;
    for(let i of array) {
        sum += i;
    }
    console.log(sum);
}
  
// Calling main function
mainFunction(add);



/* Q6:
Create examples to explain callback hell function
/*A: */
let obj = document.getElementsByClassName("word");
let hel = (obj) => {
    setTimeout(() => {
        obj[0].style.opacity = "0"
        setTimeout(() => {
            obj[1].style.opacity = "0"
            setTimeout(() => {
                obj[2].style.opacity = "0"
            }, 1000);
        }, 1000);
    }, 1000);
}
hel(obj)



/* Q7:
Create examples to explain promises function
/*A: */
function promises(any) {
    document.getElementById("promise").innerHTML = any;
  }
  
  let myPromise = new Promise(function(Resolve, Reject) {
    let x = 0;
    if (x == 0) {
        setTimeout(() => {
            Resolve("OK");  
        }, 1000);
    } else {
        setTimeout(() => {
            Reject("Error");  
        }, 1000);
    }
  });
  
  myPromise.then(
    function(value) {promises(value);},
    function(error) {promises(error);}
  );



/* Q8:
Create examples to explain async await function
/*A: */
function Calling() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Second');
      }, 2000);
    });
  }
  async function asyncCall() {
    console.log('First');
    const result = await Calling();
    console.log(result);
  }
  asyncCall();



/* Q9:
Create examples to explain promise.all function
/*A: */
let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'resolved');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});