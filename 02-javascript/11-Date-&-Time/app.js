// console.log("hello world");

// let username = "abdullah";
// console.log(username);


// let arr = ['abdullah',  'usman' , 'ammar'];

// console.log(arr);

// console.log(typeof(arr));

// push
// splice
// slice
// index of
// includes



// for (let i = 10; i >= 1; i--){
//     console.log(i);

// }


// function apnaFunc (username , age , bol){ // parameter receive krna
//     console.log("mera function haa..");
//     console.log(username);
//     console.log(age);
//     console.log(bol);

// }

// apnaFunc("abdullah" , 20 , true) // argument bhejjna







// const username = prompt("enter username")

// console.log(username);




// function merafunc(){
//     console.log("hello mera func");

//     return "hello"

// }

// const username = merafunc();
// console.log(username);









// function sum(num1 , num2){
//     return num1 + num2
// }

// const total = sum(20 , 40);
// const totalNum = sum(90 , 290);
// console.log(total);
// console.log(totalNum);










// const head = document.querySelector("h1");

// function changeVal(){
//     head.innerHTML = "asasdas"
// }










// const num = 20;

// if(num > 50){

// } else {

// }




// const currentDate = new Date();
// console.log(currentDate);


// const currentDate = new Date();
// const myBirthDate = new Date("November 27, 2003  13:25:00");
// console.log(myBirthDate);
// console.log(myBirthDate.getDay());
// console.log(myBirthDate.getMonth());
// console.log(myBirthDate.getDate());
// console.log(myBirthDate.getDate());
// console.log(myBirthDate.getHours());
// console.log(myBirthDate.getTime());


// console.log('currentDate ===> ' , currentDate.getTime());
// console.log('BirthDate ===> ' , myBirthDate.getTime());

// const remainingMilliseconds = currentDate.getTime() - myBirthDate.getTime()
// console.log(remainingMilliseconds / 1000 / 60 / 60 / 24 / 365);








// function calculateWastedTime(birthdate, username) {
//     // console.log(`username is ${username} and his birth date is ${birthdate} `);


//     const remainingMilliseconds = new Date().getTime() - birthdate.getTime();
//     const calculateYear = remainingMilliseconds / 1000 / 60 / 60 / 24 / 365

//     return `username is ${username} and wasted years is ${Math.round(calculateYear)}`


// }

// const farazWastedYears = calculateWastedTime(new Date('June 14, 2002'), "faraz chohan");

// const muqeetWastedYears = calculateWastedTime(new Date("October 31 , 2005") , "Muqeet");

// console.log(muqeetWastedYears);










// const currentDate = new Date();
// // currentDate.setHours(15)
// // currentDate.setMinutes(50)
// // currentDate.setSeconds(59)
// console.log(currentDate.toTimeString());
