const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalID;
const colorChanging = function(){
    if (!intervalID) {
        intervalID = setInterval(changeColorInLoop, 1000)
    };
    function changeColorInLoop() {
        document.body.style.backgroundColor = randomColor()
    };
};

const stopChanging = function(){
   clearInterval(intervalID);
   intervalID = null; 
};


document.querySelector('#start').addEventListener('click' ,colorChanging)
document.querySelector('#stop').addEventListener('click' ,stopChanging)



