let divs;
function createGrid(y=12) {
    for (x=1;x<=(y*y);x++) {
        let grid = document.createElement('div');
        document.querySelector('.container').appendChild(grid);
        
    }
    divs = document.querySelectorAll('.container>div');
    squareSize = 832/y - 2 +'px'
    divs.forEach(div =>{div.style.cssText = `width: ${squareSize}; height: ${squareSize};` })
    console.log(squareSize)
    
    divs.forEach(div => {div.addEventListener('mouseover', () => {
        div.setAttribute('class', 'hover');
    })})
    console.log(divs)
}
createGrid()



divs = document.querySelectorAll('.container>div')
let resetBtn = document.querySelector('button');
resetBtn.addEventListener('click', () => {
    divs.forEach(div => div.removeAttribute('class'));
    divs.forEach(div => div.remove());
    //console.log(divs)
    gridSize = prompt('Enter Gridsize:', );
    createGrid(gridSize);
});
