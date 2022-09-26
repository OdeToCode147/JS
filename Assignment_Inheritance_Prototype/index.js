/* Q1:
   Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype */
/* A: */
let parent = {
    player: "Rohit Sharma",
    speclization: "Opening Batsman",
    dominance: "Right Hand"
};
let child = {
    player: "KL Rahul",
    dominance: "Left Hand"
};

child.__proto__ = parent;
console.log(child.speclization);



/* Q2:
   Write code to explain prototype chaining */
/* A: */
function cricket() {
    this.name = 'Virat Kohli'
}
cricket.prototype.name = 'Rohit Sharma';
cricket.prototype.role = "Captain";
const cricket1 = new cricket();
console.log(cricket1.name);
console.log(cricket1.role);



/* Q3:
   Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays*/
/* A: */
Array.prototype.sum = function(){
    return this.reduce((num1,num2) => num1+num2);
}
const arr1 = [1,2,3,4,5];
console.log(arr1.sum()); 

const arr2 = [12,13,45,34,23,56,78];
console.log(arr2.sum()); 

const arr3 = [20,34,67,45,32,70];
console.log(arr3.sum()); 

const arr4 = [2,90,34,4,56,78];
console.log(arr4.sum()); 

const arr5 = [2,4,5,6,7];
console.log(arr5.sum()); 



/* Q4:
   Write a JavaScript function to retrieve all the names of object's own and inherited properties. */
/* A: */
function Batsman() {
    this.player1 = "Rohit Sharma"
    this.player2 = "KL Rahul"
    this.player3 = "Virat Kohli"
    this.player4 = "Suryakumar Yadav"
    WicketKeeper.call(this)
    AllRounder.call(this)
    Bowlers.call(this)
}
function WicketKeeper(){
    this.player5 = "Rishabh Pant"
}
function AllRounder(){
    this.player6 = "Hardik Pandya"
    this.player7 = "Ravindra Jadeja"
}
function Bowlers() {
    this.player8 = "Jaspit Bumrah"
    this.player9 = "Bhuvaneshwar Kumar"
    this.player10 = "Axar Patel"
    this.player11 = "Yuzvendra Chahal"
}
let team = new Batsman();
console.log(team);
let name = function(Obj){
    for(let i in Obj){
        console.log(i);
    }
}
name(team);