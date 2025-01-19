// console.log("hello world!");



// Hoisting.

// console.log(username);
// var username = "abdullah";


// var username;
// console.log(username);

// var username;
// console.log(username);
// var username = "abdullah"

// hello()

// function hello() {
//     console.log("hello world");
// }




// let grade = ''
// switch (grade){
//     case 'A':
//         console.log("grade A haa")
//         break
//     case 'B':
//         console.log("b grade");
//         break
//     case 'C':
//         console.log("c grade");
//         break
//     default: 
//     console.log("default chalaiga");

// }










// settimeout & setinterval


// setTimeout(function (){
//     console.log("console after two second")
// } , 2000)


// function ka reference pass krna.

// setTimeout(hello , 1000)


// setTimeout(function (){
//     alert("aik number maal ha.")
// } , 2000)


// const interval = setInterval(function (){
//    console.log("interval");

// } , 100)

// function stopInterval(){
//     clearInterval(interval)
// }



// const hourContainer = document.querySelector(".hour")
// const minuteContainer = document.querySelector(".minute")
// const secondContainer = document.querySelector(".second")

// let minute = 0
// let hour = 0
// let second = 0

// function startWatch() {
//     console.log("stop watch")
//     setInterval(function () {
//         if (second === 60) {
//             second = 0;
//             minute += 1;
//             minuteContainer.innerHTML = minute

//             return
//         }
//         second += 1;
//         if (second < 10) {
//             secondContainer.innerHTML = "0" + second
//             return
//         }

//         secondContainer.innerHTML = second


//     }, 100)
// }
// function stopWatch() {
//     console.log("stop watch")
// }
// function refreshWatch() {
//     console.log("stop watch")
// }


// function hello (){
//     if(false){
//         console.log('hello');
//         return
//     }

//     console.log('console after if');

// }

// const arr = [1, 2, 4]
// console.log(arr);




// collection of keys and values is called object

// const obj = {
//     username: "abdullah",
//     age: 21,
//     email: 'mabdullah2037@gmail.com'
// }

// console.log(obj.username)


// const hello = function () {
//     console.log("hello");

// }

// hello()


// const user = {
//     username: "mabdullahjs",
//     fullName: "Muhammad Abdullah",
//     age: 21,
//     email: 'mabdullah2037@gmail.com',
//     isLoggedIn: true,
//     hobbies: ['eating', 'sleeping', 'travelling', 'cooking'],
//     greetUser: function () {
//         console.log(`hello world ${this.username}`);
//         console.log(this);


//     }
// }

// user.greetUser()
// console.log();


// console.log(user.hobbies[2])

// console.log(user.fullName);
// console.log(user['fullName']);

// console.log(user.fullName);

// console.log(user);
// //update
// user.fullName = 'Muhammad Abdullah khan'
// // new value
// user.gender = "male"

// // delete value
// delete user.email

// console.log(user);

// console.log(user);

// user.greetUser()














// this

// object ka under greetuser ka function ka undar jab this ko call kiya to parent object yaani user ka object hi agaya

// globally jab this ko call kya to mera pass window object aagaya

// html ka undar onclick ma pass kiya to wohi wala element uth ka agaya.


// console.log(this)


// function checkThis(abc){
//     console.log(abc.innerHTML);
//     abc.innerHTML = "changed"


// }



// const users = [
//     {
//         id: 1,
//         title: 'hello'
//     },
//     {
//         id: 2,
//         title: 'hello'
//     },
//     {
//         id: 3,
//         title: 'hello'
//     },
//     {
//         id: 4,
//         title: 'hello'
//     },
// ]







// // console.log(users[0].title)

// for(let i = 0; i < users.length; i++){
//     console.log(users[i].title);

// }












const users = [
    { id: 1, name: "Alice Johnson", age: 29, email: "alice.johnson@example.com" },
    { id: 2, name: "Bob Smith", age: 34, email: "bob.smith@example.com" },
    { id: 3, name: "Charlie Brown", age: 22, email: "charlie.brown@example.com" },
    { id: 4, name: "David Lee", age: 41, email: "david.lee@example.com" },
    { id: 5, name: "Eve Carter", age: 25, email: "eve.carter@example.com" },
    { id: 6, name: "Frank Miller", age: 30, email: "frank.miller@example.com" },
    { id: 7, name: "Grace Williams", age: 38, email: "grace.williams@example.com" },
    { id: 8, name: "Hannah Clark", age: 27, email: "hannah.clark@example.com" },
    { id: 9, name: "Isaac Davis", age: 32, email: "isaac.davis@example.com" },
    { id: 10, name: "Jack Martinez", age: 26, email: "jack.martinez@example.com" }
];


const div = document.querySelector(".container");
for(let i = 0; i < users.length; i++){
    console.log(users[i].email);
    div.innerHTML += `
    <div class="children">
    <p>Name: ${users[i].name}</p>
    <p>Email: ${users[i].email}</p>
    <p>age: ${users[i].age}</p>
    </div>
    `
    
}