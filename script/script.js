let gridSize = 16
function createGrid(y) {
    for (x=1;x<=(y*y);x++) {
        let grid = document.createElement('div');
        document.querySelector('.container').appendChild(grid);
    }
}
createGrid(gridSize)
let divs = document.querySelectorAll('.container>div')
console.log(divs)

divs.forEach(div => {div.addEventListener('mouseover', () => {
    div.setAttribute('class', 'hover');
})
});

let resetBtn = document.querySelector('button');
resetBtn.addEventListener('click', () => {
    divs.forEach(div => {div.removeAttribute('class')

    })
})

let squareSize = 832/gridSize - 2 +'px'
console.log(squareSize)
divs.forEach(div =>{div.style.cssText = `width: ${squareSize}; height: ${squareSize}` })


resetBtn.addEventListener('click', () => {
    gridSize = prompt('Enter Gridsize:', )
    
})

