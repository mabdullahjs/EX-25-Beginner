// console.log("hello world!");


// variable banana ka 3 tareeqa hain

// var ==> reassign or redeclare krskta hain
// let ==> redeclare nahi krskta reassign krskta hain
// const ==> na redeclare na hi reassign





// var username = "abdullah"; // initialize declare
// console.log(username);
// username = "usman"; // reassign;
// console.log(username);
// var username = "ammar" // redeclare
// console.log(username);



// let username = "abdullah";
// // username = "usman"
// let username = "usman"
// console.log(username);


// let username;
// console.log(username);



// const username = "abdullah"
// console.log(username);


// ES6
// ECMA SCRIPT


// const arr = ['abdullah']
// // arr.push("usman")
// arr = ['usman']
// console.log(arr);


// CRUD

// create
// read
// update
// delete



// let fruits = ['apple' , 'banana' , 'orange']
// const ol = document.querySelector(".list");

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
//     ol.innerHTML += `<li>${fruits[i]}</li>`

// }















const ol = document.querySelector(".list");
const input = document.querySelector("#input");
let arr = []

function renderArr() {
    ol.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`
    }
}

function addTodo() {
    // console.log(input.value)
    arr.push(input.value)
    renderArr()

   
    // console.log(arr);

    input.value = ""
}


function deleteTodo(index) {
    console.log("todo deleted");
    console.log(arr[index]);
    arr.splice(index, 1);
    renderArr()
}




function editTodo (index){
    console.log("todo edited" , index)
    const updatedValue = prompt("enter updated value")
    arr.splice(index , 1 , updatedValue)
    renderArr()
}



function deleteAll(){
    console.log("delete all")
    ol.innerHTML = ""
    arr = []
}