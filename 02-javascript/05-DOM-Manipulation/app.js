// var heading = document.querySelector("#heading")

// var num = 0

// function changeval(){
//     num += 1
//     heading.innerHTML = "changed " + num
//     console.log("value changed");
// }


//counter

// var h1 = document.querySelector("#count");

// var num = 0

// function increment(){
//     num += 1
//     h1.innerHTML = num
//     console.log("increment")
// }
// function decrement(){
//     num = num - 1
//     if(num < 0){
//         alert("decrement nahi hoskta")
//     }else {
//         h1.innerHTML = num
//         console.log("decrement")
//     }
// }


// var fullname = document.querySelector("#fullname");

// function getValue(){
//     console.log(fullname.value);
//     fullname.value = ""
       
// }



// var username = document.querySelector("#username");
// var result = document.querySelector("#result");


// function greetUser(){
//     console.log(username.value)

//     result.innerHTML = "Assalam Alikum " + username.value
// }

// function clearScreen(){
//     result.innerHTML = ""
// }





var h1 = document.querySelector("#heading");


function changeText (){
    console.log(h1.innerHTML);
    if(h1.innerHTML === "change through javascript"){
        h1.innerHTML = "hello world"
    }else {
        h1.innerHTML = "change through javascript"
    }
    
}



// return ka keyword
// element ki value kaisa leni ha
// input ki value kaisa leni ha
// button ka uper js ka function kaisa call krwana ha