// NO TOUCHING! (please)
//const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
///////const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
// phrase="stop";
// function getColor(phrase){
//     //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
//    if (phrase === 'stop'){
//        console.log("red")
//    }
//    else if(phrase==='slow'){
//        console.log("yellow")
//    }
//    else if (phrase==='go')
//    {
//        console.log("green")
//    }
//    else{
//        console.log("purple")
//    }
// }
//     //AND THIS LINE
    
// const password=prompt("please enter pass")

// if(password.length>=6){
//     if(password.indexOf(' ')===-1){
//         console.log("valid password")
//     }
//     else{
//         console.log("no spaces allowed")
//     }
// }
// else{
//     console.log("to short")
// }


// // Change the value of num, so that "YOU GOT ME!" prints out
// const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// // DO NOT TOUCH ANYTHING BELOW (please) 
// if(num <= 100) {
//     if(num >= 50) {
//         console.log("HEY!");
//     }
// } else {
//     if (num < 103) {
//         if(num % 2 === 0){
//             console.log("YOU GOT ME!");
//         }
//     }
// }
// const mystery = 'Pivaaaa7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// // LEAVE THIS CODE ALONE! (pretty please)
// if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
//     console.log("YOU GOT IT!!!");
// }
// DO NOT TOUCH!!! (please)
// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
// ];
// airplaneSeats[3][1]="ivan";


//PLEASE DON'T TOUCH THIS LINE!
// const restaurant = {
//     name: 'Ichiran Ramen',
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }

// //YOUR CODE GOES DOWN HERE:
// const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for(let i = 0; i <people.length; i++){
//     console.log(people[i].toUpperCase())
// }

// const SECRET="ivajuric";

// let guess=prompt("enter secret code");

// while(guess!==SECRET){
//     guess=prompt("enter again!");
// }
// console.log("bravo!")

// let input=prompt("enter something")
// while(true){
//     input=prompt(input);
//     if(input==="quit")
//     break;
// }
// console.log("ok, you win!")


//GUESSING GAME!!!
// let maximum=parseInt(prompt("enter maximum number:"));
// while(!maximum){
//     maximum=parseInt(prompt("enter valid number"));
// }

// const targetNum = Math.floor(Math.random()*maximum)+1;
// let guess=parseInt(prompt("enter your guess"));
// let attempts=1;

// while(guess!==targetNum){
// attempts++;

// if(guess>targetNum)
// {
//     guess=parseInt(prompt("too high, guess again"));
// } 
// else
// {
//     guess=parseInt(prompt("too low, guess again"));
// }
// }
// console.log(`correct, it took you ${attempts} guesses`);

//FOR OF LOOP!!!!!!!!!!!!!!!!!!!!!!!!!

// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// for( let double of numbers){
//     let squere=double * double;
//     console.log(squere);
// }

// for(let num of numbers){
//     console.log(num * num);
// }

//FOR IN JE ZA ITERACIJU U OBJEKTIMA, ALI SAMO DAJE KEY

// const scores={
//     iva:2,
//     marin:55,
//     goran:22,
//     mirela:4,
//     ema:99,
//     josi:2
// }

// for(let person in scores){
//     console.log(`${person} scored ${scores[person]}`)
// }
// let total=0;
// for(let score of Object.values(scores)){
//     total+=score;
// }
// console.log(total/scores.length)

 //TODO APP

//  let input=prompt("what would u like to do");
//  const todos=["collect eggs", "cleaning box"];

//  while(input!=="quit" && input!=="q"){

//     if(input==="list")
//     {
//         console.log("------")
//         for(let i=0; i<todos.length; i++)
//         {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log("------")

//     }
//     else if(input==="new"){
//         const newtodo=prompt("ok, what is new to do?");
//         todos.push(newtodo);
//         console.log(`${newtodo} is added to list`);
//     }
//     else if(input==="delete"){
//         const index=parseInt(prompt("ok, enter an index to delete:"));
//         if(!Number.isNaN(index)){
//             const deleted=todos.splice(index, 1);
//             console.log(`ok, deleted stuff is: ${deleted[0]}`); //jer je deleted array
//         }
//         else{
//             console.log("unknown index!")
//         }
//     }
//     input=prompt("what would u like to do?");

//  }
//  console.log("ok, quit the app")

//functions!!!

// let die1=Math.floor(Math.random()*6)+1;

// let die1=rollDie(6);
// let die2=rollDie(12);
// let die3=rollDie(24);

// function sing(){
//     console.log("leave me alone")
// }

// function greet(firstname, lastname){
//     console.log(`hi, ${firstname}, ${lastname[0]}. `)
// }
// // function rant(message) {
// //     console.log(message.toUpperCase());
// //     console.log(message.toUpperCase());
// //     console.log(message.toUpperCase());
// // }

// function repeat(post, num){
//     for(let i=0; i<num; i++){
//         console.log(post);
//     }
// }
// function isSnakeEyes(first, second){
// if(first===1 && second===1){
//     console.log("snake eyes")
// }
// else{
//     console.log("not snake eyes")
// }
// }
// function add(x,y){
//     if(typeof x!=="number" && typeof y!=="number")
//     return false;
    
//     let sum=x+y;
//     return sum;
// }

// function capitalize(str){
//     return str[0].toUpperCase()+str.slice(1); 
// }
// function returnDay(num){
//     let days=["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

//     return days[num-1];
// }
// function isShortsWeather(temp){
//     if(temp>75)
//     return true;
//     else return false;
// }
// function lastElement(arr){
//     if(!arr.length) return null;
//     return arr[arr.length-1];
// }
// function sumArray(nums){
//    let total=0;

//    for(let num of nums){
//        total+=num;
//    }
//    return total;
// }

//FUNCTION EXPRESSION
// const add=function (x,y){
//     return x+y;
// }
 
//prosljeđivanje funkcije kao argument
// function callTwice(func){
//     func();
//     func();
// }
// function rollDie(){
//     const roll=Math.floor(Math.random()*6)+1
//     console.log(roll)
// }
// callTwice(rollDie)

//FUNCTION FACTORY

// function makeBeetwenFunc(min, max){
//     return function(num){
//         return num >=min && num<=max;
//     }
// }

//DEFINING METHODS
// const myMath={
//     PI:3.14,
//     square: function(num){
//         return num*num;
//     },
//     cube(num){    //skraćeni način
//         return num**3
//     }
// }

// const square={
//     area(side){
//         return side**2;
//     },
//     perimeter(side){
//         return side * 4;
//     }
// }

//THIS!!! pristupamo elementima iz objekta unutar metode
//this pristupa prozoru prije, vraća se unazad na prethodne vrijednosti
// const cat={
//     name:"blue steele",
//     color:"grey",
//     breed:"scottish",
//     meow(){
//         console.log(this.color);

//     }
// }
// const hen={
//     name:"helen",
//     eggCount:0,
//     layAnEgg(){
//         console.log("EGG");
//         this.eggCount++;
//     }
// }
