Q1 : Calculator
A :
const Calculator = (A, B, C) => 
{
  switch(A){
    case "+" :{
      return(B+C);
      break;
    }
    case "-" :{
      return(B-C);
      break;
    }
    case "*" :{
      return(B*C);
      break;
    }
    case "/" :{
      return(B/C);
    }
  }
};

Q2 : Check whether the condition is fulfilled or not?
A :
const Check_divisibility = (N) => {
    if(N%6==0 && N%9==0){
    return("Divisible by both")  
    }
    else{
      return("Not Divisible by both")
    }
};

Q3 : Eligible Voter
A :
const isEligible = (a) => {
    if(a>18){
      return("Eligible for Voting")
    }
    else{
      return("Not Eligible for Voting")
    }
};

Q4 : Find Relation
A :
const findRelation = (x,y) => {
    if (x < y)
          return (x+" is smaller than "+y);
    else if (x > y)
          return (x+" is greater than "+y);
    else if (x == y)
          return (x+" is equal to "+y);
};


Q5 : Find Grades
A :
const findGrades = (a) => {
    if(a<=10){
      return("E")
    }
    else if(a>=11 && a<=20){
      return("D")
    }
    else if(a>=21 && a<=30){
      return("C")
    }
    else if(a>=31 && a<=40){
      return("B")
    }
    else{
      return("A")
    }
};

Q6 : Get Value
A :
const getValue = (a) => {
    if(a=="p" || a=="P"){
      return("PrepBytes");
    }
    else if(a=="Z" || a=="z"){
      return("Zenith");
    }
    else if(a=="E" || a=="e"){
      return("Expert Coder");
    }
    else{
      return("Data Structure")
    }
  };
Q7 : Find the maximum out of three numbers.
A :
const Max_out_of_three = (A,B,C) => {
    if ((A>B) && (A>C))
        return (A);
    else if (B>C)
        return (B);
    else if (A=B=C)
        return ("-1");
    else
        return (C);
  };

Q8 : Second Smallest
A :
const findSndSmallest = (x,y,z) => {
    if((x>y)&&(x>z)){
      if(y>z){
        return (y)
      }
      else{
        return (z)
      }
    } 
    else if((y>x)&&(y>z)){
      if(x>z){
        return (x)
      }
      else{
        return (z)
      }
    } 
    else{
      if(x>y){
        return (x)
      }
      else{
        return (y)
      }
    }
  };

  Q9 : Check whether the triangle is Acute or Obtuse
  A :
  const Triangle_Check = (A,B,C) => {
    if(A>90 || B>90 || C>90)
    return("obtuse")
    else{
      return("acute")
    }
  };