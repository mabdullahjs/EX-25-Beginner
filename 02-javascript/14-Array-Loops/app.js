// console.log('hello world!');


// const head = document.querySelector('h1')
// const head = document.getElementById('head');
// const head = document.getElementsByClassName('head')
// const head = document.querySelectorAll('p');
// console.log(head);

// head[2].innerHTML = "para 3"


// function changeElement(){
//     console.log(head[0].innerHTML);
//     head[0].innerHTML = "changed"
//     head[0].style.color = "white"
//     head[0].style.backgroundColor = "red";
    
// }





// const ul = document.querySelector('ul');

// firstchild
// lastchild
// next sibling
// remove
// addeventlistner
// stoppropogation
// preventdefault

// console.log(ul.firstChild.nextSibling);
// console.log(ul.nodeName);



const h1 = document.querySelector('h1');
const btn = document.querySelector('#btn');
function changeText (){
    console.log("function chal rha ha");
    
    h1.innerHTML = "changed"
}


// event
// kisi bhi specific action pa koi bhi task krwana.

// btn.addEventListener('click' , changeText)

// btn.addEventListener('click' , function (){
//     console.log("hello add event listner");
      
// })



// btn.addEventListener('mouseout' , function (){
//     console.log("mouse over");
    
// })


// const image = document.querySelector("#img");

// image.addEventListener('mouseover' , function (){
//     image.src = "https://e7.pngegg.com/pngimages/922/441/png-clipart-creative-bulb-lightbulb-energy-saving-lamps-thumbnail.png"
// })

// image.addEventListener('mouseout', function (){
//     img.src = "https://www.citypng.com/public/uploads/preview/transparent-hd-real-light-bulb-704081695125968fldw2x56hs.png"
// })



const ul = document.querySelector('.images');
const image = document.querySelector('#image-2');

ul.addEventListener('click' , function(event){
    // console.log(event.target.nodeName);
    if(event.target.nodeName === 'IMG'){
        event.target.parentNode.remove()
    }
    
    // console.log('ul click horhi ha bhai');
    
})

// image.addEventListener('click' , function (event){
//     event.stopPropagation()
    
//     console.log('image clicked');
    
// })


// bubbling
// capturing


const li = document.querySelector('#anchor-tag');

li.addEventListener('click' , function (event){
    event.preventDefault()
    console.log('li clicked');
    
})