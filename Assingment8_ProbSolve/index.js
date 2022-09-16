//Q1 : Find the Smaller Angle
//A:
var Minimal_Angle = (h, m) => 
{
  if (h == 12){
    h = 0;
  }
  if (m == 60){
    m = 0;
    h += 1;
  }
  let h_ang = 0.5 * ((h*60) + m);
  let m_ang = m * 6;
  if(h_ang > m_ang){
    return (h_ang - m_ang);
  }
  else{
    return (m_ang - h_ang);
  }
};


//Q1 : Check whether the year is Leap year or not.
//A:
var Check_Leap = (year) => 
{
  if((year%100===0 && year%400===0) || (year%4===0 && year%100!==0)){
    return "Leap Year";
  }
 else{
   return "Non Leap Year";
 }
};


//Q3 : Perfect Number Check
//A:
var Perfect_Check = (N) => 
{
  let sum = 0;
  for(let i = 1; i <= N/2 ; i++){
    if(N%i === 0){
      sum += i;
    }
  }
  if(sum === N && sum !== 0){
    return "YES";
  } 
  else{
    return "NO";
  }
};


//Q4 : Reverse the Number
//A:
var Reverse_Number = (N) => 
{
  let rev = parseFloat(N.toString().split('').reverse().join(''));
  return rev;
};


//Q4 : Substring Check
//A:
var Substring_Check = (S1, S2) => 
{
  let result = S1.includes(S2);
  if(result === true){
    return "YES";
  }
  else{
    return "NO";
  }
};