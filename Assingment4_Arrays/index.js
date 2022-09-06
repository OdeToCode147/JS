/* Q1: Find the Product.*/ 
/*A:*/
const Find_Prod = (array, N) => 
{
  let Prod=1;
  for(let i=0;i<N;i++){
    Prod*=array[i];
  }
  return Prod;
}

/* Q2: Find the Sum.*/ 
/*A:*/
const Find_Sum = (array, N) => 
{
  let sum=0;
  for(let i=0;i<N;i++){
    sum+=array[i];
  }
  return sum;
};

/* Q3: Count Occurrences*/ 
/*A:*/
const findCount = (N, K, Arr) => 
{
  let count=0;
  for(let i=0;i<N;i++){
    if(Arr[i]==K){
      count+=1;
    }
  }
  return count;
};

/* Q4: Even Odd*/ 
/*A:*/
const findEvenOdd = (N, Arr) => 
{
  let B=[]
    let evensum=0
    let oddsum=0
    for(let i=0;i<N;i++){
      if(Arr[i]%2===0){
        evensum+=Arr[i]
      }
      else{
        oddsum+=Arr[i]
      }
      
    }
    B[0]=evensum
    B[1]=oddsum
    return B
};

/* Q5: Find whether the number is present or not*/ 
/*A:*/
const Find_Num = (array,N,M) => 
{
  for(let i=0;i<N;i++){
    if(array[i]===M){
      return "YES"
    }
  }
  return "NO"
};

/* Q6: Higher Age*/ 
/*A:*/
const highAge = (N, Arr) => 
{
  let arr=[]
  let j=0
  for(let i=0;i<N;i++){
    if(Arr[i]>=18){
      arr[j++]=Arr[i]
    }
  }
  return arr
};

/* Q7: Increment the Array Elements*/ 
/*A:*/
const Inc_Arr = (arr,N) => 
{
  for(let i = 0; i < N; i++){
    arr[i] += 1;
  }
  console.log(...arr);
};

/* Q8: Pass or Fail*/ 
/*A:*/
const isAllPass = (N, Arr) => 
{
    let count=0;
  for(let i=0;i<N;i++){
    if(Arr[i]>=32){
      count=count+1;
    }
    else{
      break;
    }
  }
  if(count===N){
    return "YES";
  }
  return "NO";
};

/* Q9: Unique Color Shirt*/ 
/*A:*/
function Unique_Shirts (arr,N) {
    let shirt="";
    let count=0;
      for(let i=0;i<N;i++){
        let sum=0;
        for(let j=0;j<N;j++){
          if(arr[i]==arr[j]){
            sum++;
          }
        }
          if(sum==1){
            shirt=shirt+arr[i];
            count++;
          }
    }
    return count;
   }

/* Q10: Min and Max*/ 
/*A:*/
function arrayMin(arr) {
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
      if(arr[i]<min){
        min=arr[i];
      }
    }
    return min;
  }
  
  function arrayMax(arr) {
    let max=arr[0];
    for(let i=1; i<arr.length; i++){
      if(arr[i]>max){
        max = arr[i];
      }
    }
    return max;
  }

/* Q11: Birthday Game*/ 
/*A:*/
function Birthday_Game(arr,D ,M) {
 
    let counter = 0;
     for(let i = 0; i < arr.length - 1; i++){
          let subArray = arr.slice(i, i+M);
          if (subArray.length === M) {
             let sum = subArray.reduce((a,b) => a + b, 0);
             if(sum === D){
                  counter += 1;
              }
           }
     }
     return counter;
}