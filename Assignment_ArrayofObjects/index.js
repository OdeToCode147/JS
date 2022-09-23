//Q1.
let starks = [
    {name:"Eddard Stark",id:101,marks:98},
    {name:"Jon Snow",id:112,marks:100},
    {name:"Robb Stark",id:123,marks:95},
    {name:"Sansa Stark",id:134,marks:75},
    {name:"Arya Stark",id:145,marks:90},
    {name:"Bran Stark",id:156,marks:60},
    {name:"Rickon Stark",id:167,marks:25},
    {name:"Catelyn Stark",id:178,marks:55}
];

let arr = starks.map(x => x.name.toUpperCase());
console.log(arr);


//Q2.

let arr1 = starks.filter(x => x.marks > 50);
console.log(arr1);

//Q3.
let arr2 = starks.filter((x) =>x.marks > 50&&x.id>120);
console.log(arr2);

//Q4.

let arr3 = starks.reduce((acc, cur) => acc + cur.marks,0);
console.log(arr3);

//Q5.

let arr4 = starks.filter(x => x.marks > 50);
for(let i = 0; i<arr4.length; i++){
    console.log(arr4[i].name);
}

//Q6.

let arr5 = starks.filter(x => x.id > 120);
let arr6 = arr5.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr6);

//Q7.

for(let x of starks){
    if(x.marks<50){
        
        x.marks = x.marks + 15;
    }
}

let arr7 = starks.filter(x => x.marks > 50);
let arr8 = arr7.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr8);


//Q8.

let student1 = {
    name : "Satya",
    class : 8,
    roll_no : 12345
}

let student2 = {
    name : "Surya",
    class : 9,
    roll_no : 23456
}
let student3 = {
    name : "Vamsi",
    class : 10,
    roll_no : 34567
}

let student4 = {
    name : "Bhargav",
    class : 11,
    roll_no : 45678
}
let student5 = {
    name : "Srikar",
    class : 12,
    roll_no : 56789
}

let student6 = {
    name : "Ruthwik",
    class : 12,
    roll_no : 56789
}
let students =[{...student1},{...student2},{...student3},{...student4},{...student5},{...student6}];
console.log(students);