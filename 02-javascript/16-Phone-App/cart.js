var cartItems = JSON.parse(localStorage.getItem('cartItems'));


var div = document.querySelector('.container');
var totalPriceHeading = document.querySelector('#totalPrice');


function renderItems() {
    div.innerHTML = ""
    var totalPrice = 0

    for (let i = 0; i < cartItems.length; i++) {
        console.log(cartItems[i]);
        totalPrice += cartItems[i].price * cartItems[i].quantity

        div.innerHTML += `
    <div class="card bg-dark text-white border border-light w-100 m-5" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${cartItems[i].brand}</h5>
                <h6 class="card-subtitle mb-2 ">${cartItems[i].model}</h6>
                <h6 class="card-subtitle mb-2 ">Quantity 
                <button onclick="addQuantity(${i})">+</button>
                ${cartItems[i].quantity}
                <button  onclick="lessQuantity(${i})" >-</button>
                
                </h6>
                <h3>$ ${cartItems[i].price * cartItems[i].quantity}</h6>
                    <button onclick="deleteItem(${i})" class="btn btn-danger">Delete</button>
            </div>
        </div>
    
    `


    }


    console.log(totalPrice);
    totalPriceHeading.innerHTML = `Total Price: ${totalPrice}`
}


renderItems(cartItems)

function addQuantity(index) {
    console.log('add quantity');
    cartItems[index].quantity += 1
    renderItems()

}
function lessQuantity(index) {
    console.log('less quantity');
    if (cartItems[index].quantity === 1) {
        alert('bhai kiya chah rha ha?')
    } else {
        cartItems[index].quantity -= 1
        renderItems()
    }

}



function deleteItem(index){
    cartItems.splice(index , 1)
    renderItems()
    
}



// cart item jab reload kr rha ho to dobara sa item araha hain

// jab ma dobara home page pa jaka items add kr rah ho to item overwrite horha hain.