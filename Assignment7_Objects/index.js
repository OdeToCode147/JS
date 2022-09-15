/*Q1: Create a Function*/
/*A:*/
function Check(obj1){
    obj1.setter = function(){
      console.log(this.name);
    };
  }


/*Q2: Delete a Property*/
/*A:*/
function Check(obj1) {
    let x = delete(obj1.rollno);
    return x;
  }


  /*Q3: Check whether the Package is Dream Package or not*/
/*A:*/
function Check(obj1) {
    if(obj1.salary > 500000){
     return "Dream";
   }
   else{
     return "NotDream";
   }   
 }


/*Q4: Check whether the Object has a parameter or not*/
/*A:*/
function Check(obj1) {
    let size = Object.keys(obj1).length;
    if(size > 0){
      return "true";
    }
    else{
      return "false";
    }
  }


  /*Q5: Merge the Objects*/
/*A:*/
function Check(obj1,obj2) {
    return Object.assign(obj1, obj2);
  }


/*Q6: Object Multiplyer*/
/*A:*/
function Check(a,obj1) {
    obj1.id = obj1.id*a;
    obj1.houseno = obj1.houseno*a;
    return obj1;
  }


  /*Q7: Find the Sum of Data Members*/
/*A:*/
function Check(obj1) {
    return (obj1.p1+obj1.p2+obj1.p3);
  }


/*Q8: Check whether the Objects are same or not.*/
/*A:*/
function check(obj1,a,b) {
    if ((obj1.name === a)&&(obj1.id === b)){
      return true
    }
    else{
          return false
        } 
  }