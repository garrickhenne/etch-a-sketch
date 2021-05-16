
const container = document.querySelector('.container');



const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', (e) => {
    let num = prompt("How many squares would you like? Up to 60", 16);
    if (num > 60) {
        alert("Try Again...");
        return;
    }
    createGrid(num);
});

function checkForExisting() {
    // TODO: Check to see if grid is made and remove it if so
    if (container.childElementCount > 0) {
        container.innerHTML = '';
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeColor(e) {
    const r = getRandomInt(0,256);
    const g = getRandomInt(0,256);
    const b = getRandomInt(0,256);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function createGrid(dimension) {
    checkForExisting();

    container.style.gridTemplateColumns = `repeat(${dimension},1fr)`;
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.backgroundColor = 'white';
            container.appendChild(square);
        }
    }

    let squares = document.querySelectorAll('.square');

    squares.forEach((sqr) => {
        sqr.addEventListener("mouseover", changeColor);
});
}

createGrid(16);


