//ACTIVITY 1: if else statement

//Task 1
//NUMBER CHECK SCRIPT
  let num = -11;
  if(num>0){
    console.log("number is positive.") ;
  }
  else if(num==0){
    console.log("number is zero") ;
  }
  else{
    console.log("number is negative") ;   //OUTPUT : number is negative
  } 

//Task 2 
// VOTING ELIGIBILITY SCRIPT
  let age = 15 ;
  if(age>=18) {
    console.log("eligible to vote") ;
  } 
  else{
    console.log("not eligible to vote") ;   //OUTPUT : not eligible to vote
  }
 
  
// Activity 2 : NESTED IF-ELSE STATEMENTS

//Task 3  : largest of three numbers 
  let a = 54 ;
  let b = 9 ;
  let c = -1 ;
  if(a>=b) {
    if(a>=c){ console.log( a," is the largest number") ;}  
    else{ console.log(c," is the largest number.") ;  }    
  }
  else {
    if(b>=c) { console.log(b," is the largest number");}    
    else {console.log(c," is the largest number") ; } 
  }                
//OUTPUT : 54 is the largest number                    
 
   
//Activity 3: Switch Case

//Task 4                                      
//DAY OF THE WEEK SCRIPT
  let day = 3;
  switch(day) {
     case 1: 
       console.log("sunday") ;
       break ;
     case 2: 
       console.log("monday") ;
       break ;   
     case 3: 
       console.log("tuesday") ;
       break ;
     case 4: 
       console.log("wednesday") ;
       break ;
     case 5: 
       console.log("thursday") ;
       break ;
     case 6: 
       console.log("friday") ;
       break ;
     case 7: 
       console.log("saturday") ;
       break ;
     default :
     console.log("Invalid day") ;     //OUTPUT : tuesday
    }

//Task 5                   
//GRADE ASSIGNMENT SCRIPT 
   let score = 80; 
   let grade;
   switch (true) {
       case (score >= 90 && score <= 100):
           grade = 'A';
           break;
       case (score >= 80 && score < 90):
           grade = 'B';
           break;
       case (score >= 70 && score < 80):
           grade = 'C';
           break;
       case (score >= 60 && score < 70):
           grade = 'D';
           break;
       case (score < 60):
           grade = 'F';
           break;
       default:
           grade = 'Invalid score';
 }
   console.log("The grade is ",grade);  // Output: "The grade is B"

//ACTIVITY 4: Conditional (ternary) operator

//Task 6 even or odd       
  num = 14 ;
  console.log(num%2==0 ? "number is even." : "number is odd.") ;    //OUTPUT :number is even.

//Activity 5 
  
// Task 7
//Leap Year script
let year = 2024 ;
if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        console.log(year , " is a leap year");
    }
else {
    console.log(year, " is not a leap year");
    }         
//OUTPUT :2024 is a leap year.