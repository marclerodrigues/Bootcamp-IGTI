const start = () => {
    const rangeRed = document.querySelector('#rangeRed');
    const rangeGreen = document.querySelector('#rangeGreen');
    const blue = document.querySelector('#rangeBlue');
    
    const inputRed = document.querySelector('#inputRed');
    const inputGreen = document.querySelector('#inputGreen');
    const inputBlue = document.querySelector('#inputBlue');

    const divSquare = document.querySelector('#square');
    
    rangeRed.addEventListener('input', 
    setColor(rangeRed, rangeGreen, rangeBlue, divSquare));
    rangeGreen.addEventListener('input', 
    setColor(rangeRed, rangeGreen, rangeBlue, divSquare));
    rangeBlue.addEventListener('input', 
    setColor(rangeRed, rangeGreen, rangeBlue, divSquare));

    setColor(rangeRed, rangeGreen, rangeBlue, divSquare);
};

window.addEventListener('load', start);

function setColor(rangeRed, rangeGreen, rangeBlue, divSquare) {
    divSquare.style.backgroundColor = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`;
}

