// Activity 1  Array Creation and Access 
// Activity 2  Array Methods (Basic)

//ARRAY MANIPULATION SCRIPT

// Task 1: Create an array 
let a=[1,3,5,7,9];
console.log(a);                 //[ 1, 3, 5, 7, 9 ]

//Task2  Access the last and first element
console.log(a[0]);              // 1
console.log(a[a.length-1]);     // 9

//Task 3 push method (push at last)
a.push(11);
console.log(a);                  // [ 1, 3, 5, 7, 9, 11 ]

//Task 4 pop method (pop from last)
 a.pop();
 console.log(a);                 // [ 1, 3, 5, 7, 9 ]

// Task 5 Shift method  (1st element is removed)
a.shift();
console.log(a);               // [ 3, 5, 7, 9 ]
a.shift();
console.log(a);               // [ 5, 7, 9 ]

//Task 6 Unshift Method (add the mention element at 1st)
a.unshift(12);
console.log(a);    // [ 12, 5, 7, 9 ]


//Activity 3: Array Methods(Intermediate)
// ARRAY TRANSFORMATION SCRIPT

//Task7: Map Method

let newArr=a.map(val =>{
    return val*val;
})
console.log(newArr);    // [ 144, 25, 49, 81 ]
//or
//let newArr=a.map(val => val*val);

//Task 8 Filter Method
let newArr2=a.filter(val =>val % 2 === 0 ? val : undefined);
console.log(newArr2);    // [ 12 ]

// //Task 8 Reduce Method
let sum=a.reduce((acc,cur)=> acc+cur,0);
console.log(sum);    // 33

// //OR
// let b=[1,2,3];
// const sum=(acc,cur)=>{
//     return acc+cur;
// }
// const d=b.reduce(sum,0);
// console.log(d);

// Activity 4 Array Iteration

// ARRAY ITERATION SCRIPT
// Task 9: For Loop
//Task 10 for loop 
for(let i=0;i<a.length;i++)
    {
        console.log(a[i]);
    }
//output
// 12
// 5
// 7
// 9

//Task 11 forEach loop 
const print=(n)=>{
    console.log(n);
}
a.forEach(print);


// Activity 5 Multi-dimensional Arrays

//TWO DIMENTIONAL ARRAY SCRRIPT
//Task 12  2-dimensional array 

const arr=[[1,2],[3,4],[5,6],[7,8]];
console.log(arr);
//output 
//[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]

//Task 13 Access and log a specific element from the 2-dimensional array
console.log(arr[0][1]); 
//output 2

    