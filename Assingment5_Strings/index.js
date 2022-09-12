/* Q1: Count Characters*/ 
/*A:*/
const countCharacters = (S) => 
{
  let B=[];
  let A_Count=0;
  let D_Count=0;
  for(let i=0;i<=S.length;i++){
    if(S[i]==="A"){
      A_Count++;
    }
    else if(S[i]==="D"){
      D_Count++;
    }
    B[0]= A_Count;
    B[1]= D_Count;
  }
  return B;
};


/* Q2: Count the Heads*/ 
/*A:*/
var Count_Occ = (s) => 
{
  let count=1;
    let str='';
    let op="";
    for(let i=0;i<s.length;i++){
      for(j=i+1;j<s.length;j++){
        if(s[i]==s[j]){
          count++;
        }
      }
      if(count>1){
        str=s[i];
        op=op+" "+s[i]+count;
        s=s.replace(str,' ');
        s=s.split(str).join('');
      }
      count=1;
    }
    return op.split(' ').sort().join('');
};


/* Q3: Count the Vowels*/ 
/*A:*/
var Count_Vowels= (S) => 
{
  count = 0;
  for(let i=0;i<=S.length;i++){
    if(S[i]=="A" || S[i]=="E" || S[i]=="I" || S[i]=="O" || S[i]=="U" || S[i]=="a" || S[i]=="e" || S[i]=="i" || S[i]=="o" || S[i]=="u"){
      count++
    }
  }
  return count;
};
 

/* Q4: Concatenate the Strings*/ 
/*A:*/
var Concatenate_Strings = (S1, S2) => 
{
    return S1+S2;
};


/* Q5: Find Length*/ 
/*A:*/
const findLength = (S) => 
{
  return S.length;
};


/* Q6: Find the Winner*/ 
/*A:*/
var Game_Winner = (S) => 
{
  let Count_A=0;
  let Count_D=0;
  for(let i=0;i<=S.length;i++){
    if(S[i]=="A"){
      Count_A++;
    }
    else if(S[i]=="D"){
      Count_D++;
    }
  }
  if(Count_A>Count_D){
    return "Aditya";
  }
  else if(Count_A<Count_D){
    return "Danish";
  }
  else{
    return "Draw";
  }
};


/* Q7: Join Strings*/ 
/*A:*/
const joinStrings = (S, P) => 
{
  return S+P;
};


/* Q8: Plaindrome Check*/ 
/*A:*/
var Palin_Check = (str) =>
{
	let output = "";
  let j = str.length - 1;
  for (let i=j ; i >=0 ; i--){
    output += str[i];
  }
  if(str == output){
    return "True";
  }
  else{
    return "False";
  }
}


/* Q9: Reverse the String*/ 
/*A:*/
var Reverse_String = (str) => 
{
  let rev = "";
  let j = str.length - 1;
  for (let i=j ; i >=0 ; i--){
    rev += str[i];
  }
  return rev; 
};
 

/* Q10: Match the Strings*/ 
/*A:*/
var String_Match = (S1,S2) => 
{
  if(S1==S2){
        return 'YES';
      }
      else{
        return 'NO';
      }
};


/* Q11: String Replace*/ 
/*A:*/
var Replace = (S, pattern , text) => 
{
  return S.replace(pattern,text);
};
 

/* Q12: Split the String*/ 
/*A:*/
var Split_the_string = (S) => 
{
  let arr = S.split(" ");
  return arr;
};


/* Q13: Count the Vowels and Consonants*/ 
/*A:*/
var Count_Vowels= (S) => 
{
  let str = S.toLowerCase();
  let count = 0;
  const vowels = ['a' , 'e', 'i', 'o', 'u'];
  for(let i = 0; i < str.length; i++){
    let con = vowels.includes(str[i])
      if(con === true){
        count++;
    }
}
  return count;
};
var Count_Consonants= (S) => 
{
  let str = S.toLowerCase();
  let count = 0;
  const vowels = ['a' , 'e', 'i', 'o', 'u'];
  for(let i = 0; i < str.length; i++){
    let con = vowels.includes(str[i])
    if(con !== true){
        count++;
    }
}
  return count;
};