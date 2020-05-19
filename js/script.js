//Choose random colors
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
const colors2=['black', 'blue', 'grey','white', 'yellow', 'fuchsia']; //second color array

body.style.backgroundImage = 'linear-gradient(to right, red, yellow)'; //Css gradient
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
const colorIndex2= parseInt(Math.random()*colors2.length) //Second color picker
body.style.backgroundImage = 'linear-gradient(to right,'+ colors[colorIndex] + ',' + colors2[colorIndex2] + ')';
}
