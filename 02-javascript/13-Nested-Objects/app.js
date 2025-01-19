const products = [
    { id: 1, name: "Laptop", price: 899.99, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 499.99, category: "Electronics" },
    { id: 3, name: "Headphones", price: 69.99, category: "Accessories" },
    { id: 4, name: "Washing Machine", price: 399.99, category: "Home Appliances" },
    { id: 5, name: "Smart Watch", price: 199.99, category: "Electronics" },
    { id: 6, name: "Bluetooth Speaker", price: 79.99, category: "Accessories" },
    { id: 7, name: "Tablet", price: 299.99, category: "Electronics" },
    { id: 8, name: "Refrigerator", price: 599.99, category: "Home Appliances" },
    { id: 9, name: "Coffee Maker", price: 49.99, category: "Home Appliances" },
    { id: 10, name: "Microwave", price: 89.99, category: "Home Appliances" },
    { id: 11, name: "Air Conditioner", price: 249.99, category: "Home Appliances" },
    { id: 12, name: "Camera", price: 450.00, category: "Electronics" },
    { id: 13, name: "Electric Kettle", price: 29.99, category: "Home Appliances" },
    { id: 14, name: "Blender", price: 59.99, category: "Home Appliances" },
    { id: 15, name: "TV", price: 799.99, category: "Electronics" },
    { id: 16, name: "Shoes", price: 79.99, category: "Clothing" },
    { id: 17, name: "T-shirt", price: 19.99, category: "Clothing" },
    { id: 18, name: "Jeans", price: 39.99, category: "Clothing" },
    { id: 19, name: "Jacket", price: 89.99, category: "Clothing" },
    { id: 20, name: "Sweater", price: 34.99, category: "Clothing" },
    { id: 21, name: "Desk Lamp", price: 24.99, category: "Furniture" },
    { id: 22, name: "Office Chair", price: 149.99, category: "Furniture" },
    { id: 23, name: "Coffee Table", price: 199.99, category: "Furniture" },
    { id: 24, name: "Sofa", price: 399.99, category: "Furniture" },
    { id: 25, name: "Bookshelf", price: 89.99, category: "Furniture" },
    { id: 26, name: "Tote Bag", price: 29.99, category: "Accessories" },
    { id: 27, name: "Wallet", price: 24.99, category: "Accessories" },
    { id: 28, name: "Sunglasses", price: 49.99, category: "Accessories" },
    { id: 29, name: "Backpack", price: 39.99, category: "Accessories" },
    { id: 30, name: "Smartphone Case", price: 14.99, category: "Accessories" }
];


// console.log(products);
const div = document.querySelector("#div");

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    div.innerHTML += `
     <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${products[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${products[i].category}</h6>

                <a href="#" class="card-link">Rs: ${products[i].price}</a> <br><br>
                <button class="btn btn-info text-white">Add to cart</button>
            </div>
        </div>
    `

}


