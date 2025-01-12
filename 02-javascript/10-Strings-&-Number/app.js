// console.log("hello world");

// toLowerCase
// toUpperCase
// length
// charAt
// indexOf
// slice
// replace
// replaceall
// split

// const username = "Abdullah";
// console.log(username.toLowerCase());



// const cleanestCities = ["karachi", "larkana", "sukkur", "tando allah yar", "mirpurkhas"];

// console.log(cleanestCities.includes("saadss"));

// includes
// indexof
// for chalalo custom

// const input = document.querySelector("#city");
// const result = document.querySelector("#result");
// function checkCity(){

//     for (let i = 0; i < cleanestCities.length; i++) {

//         if(cleanestCities[i] === input.value){
//             console.log("cleanest city haa");
//             result.innerHTML = "cleanest city haa"
//         }else {
//             console.log("cleanest city nahi ha");
//             result.innerHTML = "cleanest nahi haa"
//         }
//     }
// }


// function checkCity() {


//     if (cleanestCities.includes(input.value.toLowerCase())) {
//         console.log("cleanest city ha");
//         result.innerHTML = "cleanest city haa"
//     } else {
//         console.log("cleanest city nahu ha");
//         result.innerHTML = "cleanest city nahi haa"
//     }

// }

// "karachi" === ["karachi" , "larkana" , "sukkur" , "tando allah yar" , "mirpurkhas"];


// form sa value lena
// btn ka click pa console krwadena
// jo value user na di ha wo check krna ha array ma mujood ha ya nahi ha
// agar mujood ha to screen pa print krwado you live in thee cleanest city
// warna bekaar ha jeena.



// const username = "Abdullah";
// console.log(username.toUpperCase());
// console.log(username.length);
// console.log(username[0]);

// const copyStr = username.slice(1 , 5)
// console.log(copyStr);



// const str = "Ali and Sami are best and friends. They play cricket Ali and Sami and football Ali and Sami together."

// console.log(str.replace("Ali" , "Abdullah"))
// console.log(str.replaceAll("Ali" , "Abdullah"))


// console.log(str.split(' '));



















// const cleanestCities = ["karachi", "larkana", "sukkur", "tando allah yar", "mirpurkhas"];

// function meraIncludes(arr, val) {
//     let includesInArr = false;
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(cleanestCities[i]);

//         if (cleanestCities[i] === val) {
//             includesInArr = true
//         }
//     }

//     return includesInArr


// }

// console.log(meraIncludes(cleanestCities, "asdsadsa"));





// Number methods

//round
//ceil
//floor
//random
//parseInt
//parseFloat


// console.log(Math.round(2.4));
// console.log(Math.ceil(3.001));
// console.log(Math.floor(2.6756765));


// console.log(Math.random()*5);
// console.log(Math.ceil(Math.random()*10));





// const num = "324234sadsad";

// console.log(num);

// console.log(Number(num));
// console.log(+num);
// console.log(parseInt(num));
// console.log(parseFloat(num));





// Toss App

//heads ==> 1
//tails ==> 2


// random number 1 ya 2


// aik value daiga user
// aik value random sa generate krwayenga


const masjidImage = "https://en.numista.com/catalogue/photos/pakistan/424-original.jpg"

const chandImage = "https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg"


// const result = document.querySelector("#result");
// const img = document.querySelector("#img");


// function toss(userVal){
//     // console.log(userVal);
//     const randomNumber = Math.ceil(Math.random()*2)
//     console.log(randomNumber);

//     if(randomNumber === userVal){
//         console.log("toss jeet gaye");
//         result.innerHTML = "toss jeet gaye"
        
//     }else {
//         console.log("toss haar gaye");
//         result.innerHTML = "toss haar gaye"
        
//     }

//     if(randomNumber === 1){
//         img.src = masjidImage
//     }else {
//         img.src = chandImage
//     }
    

// }
























