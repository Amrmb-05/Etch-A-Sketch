for (x=1;x<=(16*16);x++) {
    let grid = document.createElement('div');
    document.querySelector('.container').appendChild(grid);
}
let divs = document.querySelectorAll('.container>div')
console.log(divs)

divs.forEach(div => {div.addEventListener('mouseover', () => {
    div.setAttribute('class', 'hover');
})
});