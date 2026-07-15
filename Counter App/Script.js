let count = 0;

let countDisplay = document.getElementById("count");
let clickButton = document.getElementById("btn");

clickButton.onclick = function() {
    count = count + 1; 

    countDisplay.innerText = count; 
};