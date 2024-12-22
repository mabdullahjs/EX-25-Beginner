// console.log("Hello World");


// functions

// ()

// alert("hello world")

// piece of code 






// function greetUser() {
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
// }

// greetUser()
// greetUser()





// function hello(){
//     console.log("hello world!");
// }

// hello()




// function sum(num1){ //parameter receive
//     console.log("sum completed" , num1)
// }

// sum(20)
// sum(50)






// function sum(num1 , num2){ //parameter receive
//     console.log("total ===> " , num1 + num2)
// }

// sum(30 , 20) // argument send krna
// sum(70 , 90) // argument send krna






// nested function


// function greet(){
//     function user(username){
//         console.log("hello " +  username)
//     }

//     user("abdullah")
//     console.log("parent function")
// }

// greet()


// total(20, 30, 40)



// undefined kiya ha
// undefined kio derha ha
// hal kiya ha iska


// undefined

// var username = "Abdullah"; // declared // assign
// var username; // declared // assign
// console.log(username);


// function user(names){
//     console.log('username ==> ' , names);

// }
// user()

// null

// var username = null;
// console.log(username);




// NaN

// var username = "abdullah";
// console.log(+username);









// function greetUser (username , email , age){
//     console.log("my name is " + username + " and my email is " + email + " and my age is " + age)
// }

// greetUser("Muhammad Abdullah" , "mabdullah2037@gmail.com" , 21)
// greetUser("Usman" , "usman@gmail.com" , 17)
// greetUser("faraz chohan" , "faraz@gmail.com")




// global variable
// local variable

// var username = "Abdullah" // global variable

// function hello(){
//     var age = 21 // local variable
//     console.log("hello world");
//     console.log(username);
//     console.log(age);
// }
// console.log(age);

// hello()





// function hello(username){
//     console.log("my name is " + username);

// }

// hello("abdullah")
// hello("usman")
// hello("ammmar")







// var num1 = +prompt("enter num one")
// var num2 = +prompt("enter num two")
// var operator = prompt("enter operator");

// if(operator === "+"){
//     console.log("add hoga" , num1 + num2);

// } else if(operator === "-"){
//     console.log("minus hoga", num1 - num2);

// } else if(operator === "*"){
//     console.log("multiply hoga", num1 * num2);

// } else if(operator === "/"){
//     console.log("divide hoga", num1 / num2);

// } else {
//     console.log("invalid operator");

// }






// var year = 2025;

// if(year % 4 === 0){
//     console.log("leap year");
// }else {
//     console.log("not a leap year");
// }


// var globalUsername = "abc"

// function sum(num1 , num2){ //parameter
//     console.log(num1 + num2)
//     var localVariable = "awaami nahi ha"
//     console.log(globalUsername);

// }
// console.log(localVariable);

// sum(20 , 30) // argument send krna




// function parentFunc (){
//     console.log("parent function");

//     function childrenFunc(){
//         console.log("children");
//     }
//     childrenFunc()
// }
// parentFunc()




// return


// var username = prompt("enter your username");
// console.log(username);


// function greet(){
//     return "hello world"
// }

// var userGreeting = greet()
// console.log(userGreeting);



// function sum(num1 , num2) {
//     return num1 + num2
// }

// // console.log(sum(10 , 30));
// console.log( sum(10 , 30));



// function calculatePercentage (sub1 , sub2 , sub3){
//     var total = 300;
//     var obtainedMarks = sub1 + sub2 + sub3

//     var percentage = obtainedMarks / total * 100;

//     return percentage
// }


// var usmanPer = calculatePercentage(100 , 30 ,40)
// console.log(usmanPer);


// DOM

// Document Object model

// function vs method




// var h1 = document.querySelector("#head");
// var p = document.querySelector("#para");

// console.log(h1.innerHTML);
// h1.innerHTML = "changed through javascript"

// p.innerHTML = "javascript wala para ha bhai."


// var div = document.querySelector(".container")

// div.innerHTML = "<ul><li>home</li><li>about</li><li>contact</li></ul>"

// h1.innerHTML = "Changed through javascript"



// var head = document.querySelector("#head")
// head.innerHTML = "changed through js"

// function changeText (){
//     console.log("hello world");   
// }



