const loadText=document.querySelector('.loading-text');
const bg=document.querySelector('.bg');
let load=0;
let blurInterval=setInterval(blur,30);
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function blur(){
    load++;
    if(load>99){clearInterval(blurInterval);}
    loadText.innerText=`${load}%`;
    loadText.style.opacity= scale(load,0,100,1,0);
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

