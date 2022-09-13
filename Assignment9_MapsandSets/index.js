/*Q1:  SET METHOD:
        You are given a string (STR) of length N, consisting of only the lower case English alphabet.
        Your task is to remove all the duplicate occurrences of characters in the string.
        Input:
        abcadeecfb
        Output:
        abcdef"*/
/*A:*/
    let str="abcadeecfb";
    let newStr="";
    let s = new Set(str);
    for(let i of s){
      newStr+=i
    }
    console.log(newStr)
    

/*Q2:   MAP METHOD:
        You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)
        Input:
        abcadeecfb
        Output:
        a=2
        b=2
        c=2
        d=1
        e=2
        f=1*/
/*A:*/
    let string ="abcadeecfb";
    let mp = new Map();
    let count = 0;
    for (let i of string) {
        mp.set(i,count);     
    }
    for (let i of string) {
        count = mp.get(i);
        mp.set(i, count + 1);
    }
    for (const [i,value] of mp) {
        console.log(i,'=',value);
    }