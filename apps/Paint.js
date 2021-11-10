let brush = 'black'
const painting = document.querySelector('.painting')
document.getElementById('brushColor').textContent = `${brush}`

painting.addEventListener('click', function(e){
  e.target.style.backgroundColor = brush  
})  
// Now, you can change the selectedColor variable (either in your code or in your console) to change the color pixels turn when you click them.

let palette = document.querySelectorAll('.color-choice')
for(let i = 0; i < palette.length; i++){
  palette[i].addEventListener('click', function () {
    brush = palette[i].id
     document.getElementById('brushColor').textContent = `${brush}`
    console.log(brush)
  })
}
