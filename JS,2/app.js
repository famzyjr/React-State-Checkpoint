// // Variables are placeholders to store information and data in your app
// name = 'ahmed'
// console.log(name);

// there are 3 types of variables
// var greet = 'Hello';
// let  greet = 'Hello';
// const greet = 'Hello';

// //  lesson One
// // Prompt is a built in javascript functionality that helps get user through the browser

// // operators: operators are used to assign values, compare values,perform arithmetic operators. Basically, stuff you see in math (+,-,*,/etc)

// // Number('100') converts the string 100 to number 100

// // fruit = window.prompt(
// // 'what is your favourite fruit'
// // )
// // console.log(fruit);

//  food = Number(window.prompt(
//     'what your total'
//    ))
//  toltalPercentage = Number(window.prompt('tip %?') / 100);
//  tipAmount = food * toltalPercentage;
//  total = food +  tipAmount;
// // alert is like prompt() but it is only for output
// console.log('tipAmount',tipAmount);
// console.log('total',total);
// // window.alert(total)
// // window.alert(tipAmount)

// Data Types:Numbers,strings,arrays,objects,boolean: true / true,

// Math operators Multiply: *, Divide:/ Exponents **, Modulo:Remainder %, Add: +, minus: -,

// the Math.floor method rounds a number down to the nearest integer, and returns the result.

// the Math.ceil method rounds a number up to the nearest interger and returns the result

// Math.random returns a round number between 0 and 1

// baby weather app (conditionals)
//  if  rain 'Grab your umbrella '
//   else 'wear your sunglasses'

// let weather = window.prompt('how is the weather');

// if( weather == 'rainy'){
//  console.log(alert('Grab your umbrella ☂️'));
// }else{
//  console.log(alert('wear your sunglasses 😎 '));

// }

// conditionals are used in statement to compare var value/datatypes. They always return true or false equal==, strictlyequalto ===, greater than >, less than <, greater than or equal to >=, less than equal to =<, not equal to !=, not equal value !==

// functions are  javascript block of code designed to perform a particular task is executed when "something" calls it

// function argument are values received by the function when it is called they behave as var however they only live within the function and cannot be accessed outside

// concatentation: appending two or more strings together eg +

//Template literals provide an easy way to interpolate var and expressions into strings interpolating is an efficient way of concatenation eg`${}`.
// string interpolation: this refence a var within a string in this case ${} will be replaced with the value of name

//this is a function called saymyname and it has 0 arguments
// it logs out your name
//  function sayMyName(){
//     console.log('famzy');
//  }
//  sayMyName()  //call a function

//dynamic function this is a function called saymyname2 and it has 1 arguments
// it logs out your name dynamically
//   function sayMyName2(name){
//    console.log(name)
//   }
//   sayMyName2('famzy');

// function greeting(name){
// // concatentation: appending two or more strings together
// //  greet =   'hi ' + name  + ', nice to meet you';
// //Template literals provide an easy way to interpolate var and expressions into strings interpolating is an efficient way of concatenation.
// greet =  `hi ${name}, nice to meet you`
//  console.log(greet);
// }
// greeting('Ahmed')
// the retyrn statement stops the execution of a function and returns a value
// function sum(a, b) {
//   return a + b;
// }
// num1 = sum(1, 2);
// console.log(num1);
// function CalculateFoodTotal(food, tip) {
//  const toltalPercentage = tip / 100;
//  const tipAmount = food * toltalPercentage;
//   const total = sum(food, tipAmount);
//   return total;
// }
// console.log(CalculateFoodTotal(100, 20));

// ES6
// Arrow Function =>
//  arrow function wit explicit return
// const sumArrow = (a,b) =>{
//     return a + b
// }
// arrow function with implicty return: you don't have to use the return keyword if the value is directly after the arrow =>
// const  sumArrow2 = (a,b) => a + b
// console.log(sumArrow2(100, 10));

// Arrays: arrays allow you to store multiple values inside of them
// the index gives you the location of a value within an array. it is similar to a street number

// const groceries = ["bananna", "Apple", "orange", "pea"];
// console.log(groceries);
// console.log(groceries[3]);

// Array methods:push adds one or more elements to the end of an array and returns the new length of the array.
// slice the slice method returns the portion of the array you want in a new array;
// indexOf
// length: length is an array property that returns the number of elements you have in a given array

// groceries.push('cookies')
// console.log(groceries);

// groceries.push('Berries')
// console.log(groceries);

// // array slice
// console.log(groceries.slice(0,6));
// console.log(groceries.slice(1,4));

// array length
// console.log(groceries.length);

// Objects: are type of var quite similar to Arrays but theu have something called key-value pairs
//methods: a method is a property containing a function definition

// const person = { name: "Leonardo", shirt: "white" };
// // dot notation
// console.log(person.name);
// console.log(person.shirt);

// // bracket notation
// console.log(person["shirt"]);
// console.log(person["name"]);

// // assign objects
// person["phone"] = "0333333333333";
// console.log(person.phone);

// // person2
// const personTwo = { name: "Qazi", shirt: "black" };
// console.log(personTwo);
// console.log(personTwo.name);
// console.log(personTwo.shirt);

// const intro = (name, shirt) => {
//   const person = {
//     name: name,
//     shirt: shirt,
//     assets: 100000,
//     liability: 50000,
//     netWorth: function(){
//         return this.assets - this.liability;
//     },
//   };

//   const introduce = `hey my name is ${person.name} and i'm putting on a ${
//     person.shirt
//   } shirt and my net worth is ${person.netWorth()}`;
//   return introduce;
// };

// console.log(intro("famzy", "black"));
// console.log(intro('Leonardo', 'white'));

//For Loops
// const fruits = [
//   "bananna",
//   "Apple",
//   "orange",
//   "pea",
// ];

//old way of writing for loop
// for(let i = 0; i < fruit.length;  i++){
//     console.log(i, fruit[i]);
// }

// new  way of writing for loop
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const double = (numbers) =>{
//     let result = []
//     for(const number of numbers ){
//        result.push(number ** 2)
//     }
//      return result
// }
// console.log(double([1,2,3,4,5,6]));

// Exercises array nd objects: length

// const howManyLetters  =(phrase)=>{
// let result = 0;
// // for of and for in
// for(const index in phrase){
//    console.log(Number(index) + 1);
//    result = Number(index) + 1
// }
// return {'result': result}
// }
// const phrase = window.prompt('write a pharse');
// console.log(howManyLetters(phrase));

//sum up all
// [1,2,3,4]
// result = 1;
// result = 2;
// result  = 3;
// result  = 4;
//  const sumArrays=(numbers)=>{
//   let result = 0;

//   for(const number of numbers){
//     console.log(Number(number) + 1);
//    result = Number(result) + number;

//   }
//   return {'result'  : result}
//  }
//  let num = [1,2,3,4,5]
// //  let numbers = window.prompt('enter your numbers')
//  console.log(sumArrays(num));

// const sumArray = (numbers) => {
//   let result = 0;
//   for (const number of numbers) {
//     console.log(number + 1);
//     result += number;
//   }
//   return { result: result };
// };

// console.log(sumArray(num));
// const num = [1, 2, 3];
// sum up all the numbers in array

// const findMax = (numbers) => {
//   let result = numbers[0];
// // loop
//   for (const number of numbers) {
//     if (number > result) {
//       result = number;
//     }
//   }
//   return {result};
// };

// console.log(findMax([1,2,3,4,1,2,1,10,500]));

const letterFrequency = (pharse) => {
  console.log(pharse);
  //  make a frequency object
  let frequency = {};
  //loop
  for (const letter of pharse) {
    console.log(letter);
    //  check if letter exists in frequenct
    if (letter in frequency) {
      //  increment by 1
      frequency[letter]++; //whatever frequency of letter was increment it by 1
    } else {
      //  otherwise set the value to one
      frequency[letter] = 1;
    }
  }
  return frequency;
};

console.log(letterFrequency(" lol what are you doing later tonight haha! "));

const wordFrequency = (pharse) => {
  // initializing the frequency  into an emptyobject

  //The split() method is a powerful and flexible tool in JavaScript for manipulating strings. It makes it easy to convert a delimited string into an array
   let array  = pharse.split(" ");
  return letterFrequency(array);
};
// const userInput = window.prompt('write your sentence')
// console.log(wordFrequency(userInput));

// incremntal operators
// +=,++,--
