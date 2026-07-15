// const mobileButton = document.getElementById("mobile-button");
// const laptopButton = document.getElementById("laptop-button");

// laptopButton.onclick=function(){
//     document.getElementById("laptop-section").style.display = "none";
//     document.getElementById("mobile-section").style.display = "flex";
// }
// mobileButton.onclick=function(){
//     document.getElementById("mobile-section").style.display = "none";
//     document.getElementById("laptop-section").style.display = "flex";
// }


// method - 2-----------


const button=document.getElementById("laptop-button");
const name=document.getElementById("name");
const price=document.getElementById("price");
const image=document.getElementById("image");

button.onclick=function(){
    image.setAttribute("src","iphone.png");
    name.textContent="Iphone 14";
    price.textContent="79999";
}