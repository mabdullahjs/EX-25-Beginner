// console.log('hello world');


// const obj = {
//     user: 'mabdullah',
//     age: 21,
//     isLoggedIn: true,
//     greetUser: function (){
//         return `hello ${this.user}`
//     }
// }

// console.log(obj.greetUser());


// object literal


// const user = {
//     name: 'abdullah',
//     age: 21
// }


// console.log(user);




// constructor function

// function User (name , age){
//     this.name = name
//     this.age = age
// }


// const abdullah = new User('abdullah' , 21);
// const usman = new User('usman' , 21);
// const ammar = new User('ammar' , 21);
// const sami = new User('sami' , 21);

// console.log(abdullah);
// console.log(usman);
// console.log(ammar);
// console.log(sami);










const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')




form.addEventListener('submit' , (event)=>{
    event.preventDefault()

    const obj = {
        email: email.value,
        password: password.value,
        username: username.value
    }

    console.log(obj);

    localStorage.setItem('user' , JSON.stringify(obj))
    

    email.value = ""
    password.value = ""
    username.value = ""

    // window.location = "about.html"
})



