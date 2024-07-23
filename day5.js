//ACTIVITY-1:Function Declaration
//Task-1
// Even or Odd FUnction Script
function evenOrOdd(num)
{
    if(num%2==0)
        return "even"
    else
        return "odd"
}
console.log(evenOrOdd(88)); //even
console.log(evenOrOdd(89)); //odd

// Task 2
// Square Calculation Functon Script
function square(n)
{
    return n*n;
}
let n=15;
console.log(`${n}^2 = ${square(n)}`);
//Output : 15^2 = 225

//ACTIVITY-2:Function Expression

//Task-3:  find max number
const maximum = function(a,b){
    if(a>b) 
        return a;
    else 
        return b;
}
console.log(`The Maximum number is ${maximum(2,7)}`)  //7


//Task 4 
//Concatenation Function Script
const concatenate = function(str1,str2){
    return str1+str2;
}
str1="Shakshi";
str2=" Yadav";
console.log(`Concatenation of string : ${concatenate(str1,str2)}`);
//Output  Concatenation of string : Shakshi Yadav


//ACTIVITY-3: Arrow Functions
//Task-5
// Sum Calculation Arrow function Script
const sum=(a,b)=>a+b ;
console.log(sum(100,7))  //107


//Task-6 check for a specific character in string
const checkString=(s1,s2)=>{
        for(let i=0; i<s1.length;i++){
            if(s1[i]==s2) 
                return true;   
        } 
        return false;
}
    console.log(checkString("shakshi",'s'))  //true
    console.log(checkString("Coding",'c'))  //false
  
    
//ACTIVITY-4:Function Parameters and Default Values

//Task-7:Product of numbers
function Product(x,y=3){
    return x*y;
}
console.log(Product(10))  

//Task-8:Greetings to a person
function greet(name,age=18)
{
    return `Hello ${name}!.Your age is ${age}`;
}
console.log(greet("shakshi"))      //Hello shakshi!.Your age is 18
console.log(greet("kaushiki",19))    //Hello kaushiki!.Your age is 19 


//ACTIVITY-5:Higher-Order Functions
//Task-9:
//Higher Order Function Script

function repeatFun(fn,times){
    for(let i=0;i<times;i++)
      fn()
}
function fun(){
    console.log("hey! how are you?!")
}
repeatFun(fun,3) //prints hey! how are you?! 3 times


// Task 10
function f1(n){
    return n*n;
}
function f2(n){
    return n-5;
}
function func(f1,f2,val){
    let result=f1(val);
    return f2(result);
}
console.log(func(f1,f2,3));    // Output : 4