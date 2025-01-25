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


// console.log(products[1]);
const div = document.querySelector("#div");

for (let i = 0; i < products.length; i++) {
    // console.log(products[i]);
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


// const data = [
//     {
//         id: 1,
//         name: 'John',
//         hobbies: ['Reading', 'Cycling', 'Cooking'],
//         address: {
//             street: '123 Main St',
//             city: 'Springfield',
//             country: 'USA'
//         }
//     },
//     {
//         id: 2,
//         name: 'Alice',
//         hobbies: ['Painting', 'Traveling'],
//         address: {
//             street: '456 Oak St',
//             city: 'Shelbyville',
//             country: 'USA'
//         }
//     }
// ];

// console.log(data[1].address.street);



const complexData = [
    {
        id: 1,
        name: 'John',
        contact: {
            email: 'john@example.com',
            phone: '123-456-7890',
            socialMedia: {
                facebook: 'john.fb',
                twitter: 'john_twtr',
                instagram: 'john_ig'
            }
        },
        projects: [
            {
                projectId: 101,
                title: 'Project Alpha',
                tasks: [
                    {
                        taskId: 1,
                        taskName: 'Design the layout',
                        assignedTo: 'John',
                        deadline: '2025-03-01',
                        subTasks: [
                            {
                                subTaskId: 1,
                                description: 'Create wireframe',
                                status: 'Completed'
                            },
                            {
                                subTaskId: 2,
                                description: 'Review mockups',
                                status: 'In Progress'
                            }
                        ]
                    },
                    {
                        taskId: 2,
                        taskName: 'Develop frontend',
                        assignedTo: 'Alice',
                        deadline: '2025-04-15',
                        subTasks: [
                            {
                                subTaskId: 1,
                                description: 'Set up HTML structure',
                                status: 'Not Started'
                            },
                            {
                                subTaskId: 2,
                                description: 'Integrate API',
                                status: 'Not Started'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Alice',
        contact: {
            email: 'alice@example.com',
            phone: '987-654-3210',
            socialMedia: {
                facebook: 'alice.fb',
                twitter: 'alice_twtr',
                instagram: 'alice_ig'
            }
        },
        projects: [
            {
                projectId: 102,
                title: 'Project Beta',
                tasks: [
                    {
                        taskId: 1,
                        taskName: 'Write backend API',
                        assignedTo: 'Alice',
                        deadline: '2025-02-20',
                        subTasks: [
                            {
                                subTaskId: 1,
                                description: 'Design API endpoints',
                                status: 'Completed'
                            },
                            {
                                subTaskId: 2,
                                description: 'Implement API logic',
                                status: 'In Progress'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];


console.log(complexData[0].projects[0].tasks[0].subTasks[0].description);


// functions && return keyword 
// document.queryselector
// Loops
// array && nested array && array methods (push , splice , indexof , includes, slice)
// array ko screen pa render krwana
// object && nested object