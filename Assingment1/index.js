Q1 : Add two Numbers
A :
const AddTwoNumbers = (a,b) => {
    return a+b;
};

Q2 : Find if the conditions are obeyed or not?
A :
const Is_Valid = (a,b) => {
    return((a<10)&&(a>b))
  };

Q3 : Check the conditons
A :
  const Check = (A, B) => 
{
  c = A%10;
  d = B%10;
    return((c==0)||(d==0))
};

Q4 : Find the first digit of a 4 digit number
A :
const First_Digit = (n) => {
  a=n%10;
  i=n-a;
  b=i/10;
  c=b%10;
  j=b-c;
  d=j/10;
  e=d%10;
  k=d-e;
  f=k/10;
  d=f%10;
  return(d)
};

Q5 : Find the last digit of a 4 digit number
A :
const Last_Digit = (n) => {
  a=n%10;
  return(a)
};

Q6 : Find the remainder
A :
const Find_the_remainder = (a,b) => {
  return(b%a)
};
Q7 : Multipy two Numbers
A :
const Multiply_two_number = (a,b) => {
    return(a*b)
};

Q8 : Marks Calculator
A :
const Sum = (A, B, C) => 
{
 return(A+B+C);
};

const Average = (A, B, C) => 
{
 avg=(A+B+C)/3;
 return (avg);
};

