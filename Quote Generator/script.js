const quote=[
    "Success comes from consistency",
    "practice makes a man perfect",
    "Believe in yourself",
    "Never stop learning",
    "Dream big and work hard"
];

const button=document.getElementById('btn')
const disp=document.getElementById('show')

button.onclick=function(){
    const rdm=Math.floor(Math.random()*quote.length);
    const qt=quote[rdm];

    disp.textContent = `" ${qt} "`;
};