// console.log("hello world");


// var head = document.querySelector("#head");



// function changeText(){
//     head.innerHTML = "changed through javascript"
//     console.log("hello world")
// }


// var email = document.querySelector("#email");
// var password = document.querySelector("#password");


// function getValues(){
//     console.log(email.value)
//     console.log(password.value)
// }





// var head = document.querySelector("#head");

// function changeColor(){
//     head.style.backgroundColor = "#ff0000"
//     head.style.color = 'white'
//     head.style.padding = "100px"
//     console.log("hello")
// }



// var head = document.querySelector("#head");

// function changeColor(){
//     head.innerHTML = "changed"
//     head.style.border = "1px solid black"
//     head.style.backgroundColor = "#000000";
//     head.style.color = "#ffffff"
// }



// Array


// var username = ["abdullah" , "usman" , "ammar"];
// console.log(username);


// var mixedArr = [1, 2, 'abc' , true];




// var fruits = ["kiwi" , "orange" , "apple" , "banana"];
// // console.log(fruits.length);
// console.log(fruits)
// console.log(fruits[3]);


// index || 0 sa start hota ha
// length


// function vs method

// alert() //function
// prompt() // function

// function hello(){

// }

// hello() // function

// console.log()// method



//push || array ka end ma add krdeta ha
//pop || end sa delete krdeta ha
//unshift || start ma add krta ha
//shift || start sa delete krta ha
//splice || kahi sa bhi edit delete ya add krwana ho
//slice 
//split
//join
//reverse
//concat // rehta ha
//sort // rehta haa
//indexof




// var fruits = ["kiwi", "orange", "apple", "banana" , "mango" , "watermelon" , "chiko" , "melon" , "strawberry"];
// fruits.push("watermelon"); 
// fruits.unshift("mango")

// fruits.pop()
// fruits.shift()

// fruits.splice(2 , 4)
// fruits.splice(6 , 0 , "updated" , "updated 2" , "updated 3")





// var fruits = ["kiwi", "orange", "apple", "banana", "mango", "watermelon", "chiko", "melon", "strawberry"];

// //splice(starting index , kitna delete krna hain)
// // fruits.splice(5 , 2)
// // fruits.splice(1, 0, "updated", true, 20)

// // slice ka method array ki shallow copy banadeta ha.

// // var copiedArr = fruits.slice(3 , 7)


// console.log(copiedArr);



// split ka method string ko array ma convert krna ka kaam ata ha

// var username = "Muhammad Abdullah Khan";

// var arr = username.split()
// console.log(arr);






// join ka method aik arr ko string ma convert krna ka kaam ata ha

// const username = ["Muhammad" , "Abdullah" , "khan"];

// var str = username.join("z")
// console.log(str);






// var arr = [1, 2, 3, 4, 5];

// var reverseArr = arr.reverse();
// console.log(reverseArr);





// aik string ko reverse krdo

// "hello world" "dlrow olleh"

// var str = "hello world";
// var reverseStr = str.split("").reverse().join("")
// console.log(converStr);


// function reverseStr (str){
//     return str.split("").reverse().join("")
// }

// console.log(reverseStr("abdullah"));
// console.log(reverseStr("faraz"));




// indexof



var fruits = ["kiwi", "orange", "apple", "banana", "mango", "watermelon", "chiko", "melon", "strawberry"];


// var index = fruits.indexOf("adasdsa");
// console.log(index);


var input = document.querySelector("#input");

function getFruit(){
    console.log("user value ==>" , input.value);
    const index = fruits.indexOf(input.value);
    console.log(index);

    if(index === -1){
        console.log("fruit mujood nahi ha");
        
    }else {
        console.log("fruit mujood ha.");
        
    }
    
    
}