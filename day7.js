//OBJECTS 

//Activity 1: Object Creation and Access
//Activity 2: Object Methods

// BOOK OBJECT SCRIPT

//Task1 Creating Book

let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 2009     
  };
console.log(book);
//Output : { title: 'The Alchemist', author: 'Paulo Coelho', year: 2009 }

//Task2 Access the title and author

console.log("Title:", book.title);   //Output: Title: The Alchemist
console.log("Author:", book.author); //Output: Author: Paulo Coelho

//Task 3 Add a Method

book.getInfo1=function() {
  return `${this.title} is written by ${this.author}`;
}
console.log(book.getInfo1()); // Output : The Alchemist is written by Paulo Coelho

//Task 4  update book's year
book.setYear=function(yr){
  this.year=yr;
};
book.setYear(2024);
console.log(book.year);
//Output : 2024

//Activity 5 Nested Objects
//LIBRARY OBJECT SCRIPT

//Task 5

let book1 = {
  title: "T1",
  author: "A1",
  year: 2021
};

let book2 = {
  title: "T2",
  author: "A2",
  year: 2012
};

let book3 = {
  title: "T3",
  author: "A3",
  year: 2023
};

let library = {
  name: "NIT KKR Library",
  books: [book1, book2, book3]
};
console.log(library);
//{
//   name: 'NIT KKR Library',
//   books: [
//     { title: 'T1', author: 'A1', year: 2021 },
//     { title: 'T2', author: 'A2', year: 2012 },
//     { title: 'T3', author: 'A3', year: 2023 }
//   ]
// }

//Task 6
console.log(library.name);
for(let i of library.books)
{
    console.log(`${i.title} written by ${i.author}`);
}
//Output
// NIT KKR Library
// T1 written by A1
// T2 written by A2
// T3 written by A3


//ACTIVITY-4  'This' keyword
//Task-7 use this keyword

book.getInfo1=function() {
  return `${this.title} is written by ${this.author}`;
}
console.log(book.getInfo1()); //Output : The Alchemist is written by Paulo Coelho

//Activity 5:Object Iteration

//Task8: Using for..in for iteration
for(let i in book)
  {
      console.log(`${i} : ${book[i]}`);
  }
//Output
// title : The Alchemist
// author : Paulo Coelho
// year : 2024
// getInfo1 : function() {
//   return `${this.title} is written by ${this.author}`;
// }
// setYear : function(yr){
//   this.year=yr;
// }

//Task 9  Use Object.keys and object.values
const keys = Object.keys(book);
const values = Object.values(book);
console.log("Keys : " + keys);
console.log("Values : " + values);

//Output
// Keys : title,author,year,getInfo1,setYear
// Values : The Alchemist,Paulo Coelho,2024,function() {
//   return `${this.title} is written by ${this.author}`;
// },function(yr){
//   this.year=yr;
// }