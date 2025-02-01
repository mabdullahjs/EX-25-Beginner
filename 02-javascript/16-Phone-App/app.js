// console.log('hello world!');


// var heading = document.querySelector('#head');


// function changeText() {
//     heading.innerHTML = "changed through javascript"
// }

// var div = document.querySelector('.container');

// var fruits = ['apple' , 'banana' , 'orange' , 'pineapple'];

// for(var i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
//     div.innerHTML += `<p>${fruits[i]}</p>`
// }



// var users = {
//     username: 'abdullah',
//     email: 'mabdullah2037@gmail.com',
//     age: 21,
//     isLoggedIn: true,
//     hobbies: ['eating' , 'sleeping' , 'coding'],
//     greetUser: function(){
//         console.log(`hello ${this.username}`) 
//         return `hello ${this.username}`
//     }
// }

// // console.log(users.username);
// // console.log(users['hobbies'][2]);

// console.log(users.greetUser());
// array of object
// aik array ka undar multiple object hain to unko screen pa kaisa render krwayenga.




var phones = [
    {
        brand: "Samsung",
        model: "Galaxy S21",
        ram: 8,
        rom: 128,
        camera: "64 megapixel",
        price: 799,
    },
    {
        brand: "Apple",
        model: "iPhone 13",
        ram: 4,
        rom: 128,
        camera: "12 megapixel",
        price: 799,
    },
    {
        brand: "OnePlus",
        model: "9",
        ram: 12,
        rom: 256,
        camera: "48 megapixel",
        price: 729,
    },
    {
        brand: "Google",
        model: "Pixel 6",
        ram: 8,
        rom: 128,
        camera: "50 megapixel",
        price: 599,
    },
    {
        brand: "Xiaomi",
        model: "Mi 11",
        ram: 8,
        rom: 256,
        camera: "108 megapixel",
        price: 749,
    },
    {
        brand: "Sony",
        model: "Xperia 1 III",
        ram: 12,
        rom: 256,
        camera: "12 megapixel",
        price: 1299,
    },
    {
        brand: "Oppo",
        model: "Find X3 Pro",
        ram: 12,
        rom: 256,
        camera: "50 megapixel",
        price: 1149,
    },
    {
        brand: "Vivo",
        model: "X60 Pro",
        ram: 12,
        rom: 256,
        camera: "48 megapixel",
        price: 999,
    },
    {
        brand: "Nokia",
        model: "G50",
        ram: 4,
        rom: 128,
        camera: "48 megapixel",
        price: 299,
    },
    {
        brand: "Motorola",
        model: "Edge 20",
        ram: 8,
        rom: 256,
        camera: "108 megapixel",
        price: 599,
    },
    {
        brand: "Realme",
        model: "GT",
        ram: 12,
        rom: 256,
        camera: "64 megapixel",
        price: 499,
    },
    {
        brand: "Asus",
        model: "ROG Phone 5",
        ram: 16,
        rom: 512,
        camera: "64 megapixel",
        price: 999,
    },
    {
        brand: "HTC",
        model: "Desire 21 Pro",
        ram: 8,
        rom: 128,
        camera: "48 megapixel",
        price: 399,
    },
    {
        brand: "Huawei",
        model: "P40 Pro",
        ram: 8,
        rom: 256,
        camera: "50 megapixel",
        price: 899,
    },
    {
        brand: "LG",
        model: "Wing",
        ram: 8,
        rom: 256,
        camera: "64 megapixel",
        price: 999,
    },
    {
        brand: "ZTE",
        model: "Axon 20",
        ram: 8,
        rom: 128,
        camera: "64 megapixel",
        price: 399,
    },
    {
        brand: "BlackBerry",
        model: "KEY2",
        ram: 6,
        rom: 64,
        camera: "12 megapixel",
        price: 649,
    },
    {
        brand: "Lenovo",
        model: "Legion Phone Duel",
        ram: 16,
        rom: 512,
        camera: "64 megapixel",
        price: 999,
    },
    {
        brand: "Alcatel",
        model: "3L",
        ram: 4,
        rom: 64,
        camera: "48 megapixel",
        price: 199,
    },
    {
        brand: "TCL",
        model: "10 Pro",
        ram: 6,
        rom: 128,
        camera: "64 megapixel",
        price: 449,
    },
];


var div = document.querySelector('#container');

for (var i = 0; i < phones.length; i++) {
    console.log(i);
    
    div.innerHTML += `
    <div class="card bg-dark text-white border border-light" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${phones[i].brand}</h5>
                <h6 class="card-subtitle mb-2 ">${phones[i].model}</h6>
                <h3>$ ${phones[i].price}</h6>
                    <button onclick="addToCart(${i})" class="btn btn-primary">add to cart</button>
            </div>
        </div>
    `

}



function addToCart(index){    
    console.log(phones[index]);
    
}



// array of object ko screen pa render krwana ha.
// add to cart btn pa jab click kro to pata chaljaye kis phone pa click kra ha.