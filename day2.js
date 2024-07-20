
//Activity 1: Arithmatic operator
 
  //Task 1: ADD

  let x = 6;
  let y = 3; 
  console.log( x+ y) ;   //OUTPUT  9

  //Task 2: SUBTRACT
  x= 6 ;
  y= 3;
  console.log( x - y) ;   //OUTPUT 3

  //Task 3: MULTIPLY

  x = 6;
  y = 3;
  console.log(x*y) ;     //output 18

  //Task 4 : DIVIDE
  x = 6;
  y = 3;
  console.log(x/y) ;    //Output  2

  //Task 5 : remainder
  x = 6;
  y =3;
  console.log(x%y) ;  //output :Remainder of x/y = 0

//Activity 2: ASSIGNMENT OPERATION

 //Task 6: Use the += operator to add a number to variable and log the result to console.

 let a= 1;   // a+=b indicates a= a+b.
 a+=2;
 console.log(a) ;   //OUTPUT  a= 3 

 //Task 7: Use the += operator to add a number to variable and log the result to console.

 let b = 4;
 b-=2;
 console.log(b) ;    //OUTPUT 2

//ACTIVITY 3: COMPARISON OPERATOR

 //Task 8: write a program to compare two numbers using < and > operator and log the result to console.

 x = 9;
 y =3 ;

 console.log("Greater than : " , x>y) ;  //OUTPUT : Greater than :  true
 
 console.log("Smaller than : " , x<y) ;  //OUTPUT :Smaller than :  false

 //Task 9 :  write a program to compare two numbers using <= and >= operator and log the result to console.

 console.log(x>=y) ; //OUTPUT  true
 console.log(x<=y) ; //OUTPUT   false

 //Task 10 : write a program to compare two numbers using == and === operator and log the result to console.
 
 x=5;
 y =5;
 console.log( x==y) ;          //OUTPUT true
 console.log( x===y) ;        //OUTPUT  true

//Actvity 4 : LOGICAL OPERATOR 

 //Task 11 : Write a program that uses && operator to combine two conditions and log the result to console.

  x =66;
  y =99 ;
  a = 77 ;
  b =88 ; 
  console.log( (x< y) &&(a<b )) ; // Output : true

 //Task 12 : Write a program that uses || operator to combine two conditions and log the result to console.
    
  console.log((x< y) ||(a>b)) ; // OUTPUT : true

 //Task 13 : Write a program that uses ! operator to negate the condition and log the result to console.
  
  console.log(!(x<=y)) ; //OUTPUT : false

//ACTIVITY 5 : TERNARY OPERATOR 
  
 // Task 14 : write a program that uses ternary operator to check if a number is positive or negative and log the result to console.
  
  let num = -7 ;
  let result  = (num>=0 ? "positive" : "negative" ) ; 
  console.log(" number is :" , result) ; //OUTPUT :  number is : negative

//FEATURE REQUEST :
// 1. Arithmetic operations script

let p = 5;

console.log(p + 2);

console.log(p - 3);

console.log(p * 3);

console.log(p / 3);

console.log( p % 3);

console.log(++p);

console.log(--p);

console.log( p ** 3);

//output
// Addition: p + 2 =  7
// Subtraction: p - 3 = 2
// Multiplication: p * 3 = 15
// Division: p / 3 = 1.6666666666666667
// Remainder: p % 3 = 2
// Increment: ++p = 6
// Decrement: --p = 5
// Exponentiation: p ** 3 = 125


// 2. Comparison and logical operators script

// equal to operator                        
console.log( 3 == 3); //  true

// not equal operator
console.log( 3 != 3);  //  false

// strictly equal to operator
console.log( 2 === '2');  //  false

// greater than operator
console.log(3 > 5);  // false

// less than operator
console.log( 3 < 5);  //  true

// logical AND
console.log((n < 5) && (n > 0));  // false

// logical OR
console.log((n > 2) || (n > 5));  // true

// logical NOT
console.log(!(n == 3));  // true

// 3. ternary operator script
n1>0 ? console.log(n1,"is +ve") : console.log(n1,"is -ve");  //output: 10 is positive