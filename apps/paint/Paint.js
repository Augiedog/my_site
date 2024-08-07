let brush = 'black'
// You can change the brush variable in your console to change color.
const painting = document.querySelector('.painting')
document.getElementById('brushColor').textContent = `Current Color is ${brush}`

painting.addEventListener('click', function(e){
  e.target.style.backgroundColor = brush  
})  

let palette = document.querySelectorAll('.color-choice')
for(let i = 0; i < palette.length; i++){
  palette[i].addEventListener('click', function () {
    brush = palette[i].id
     document.getElementById('brushColor').textContent = `Current Color is ${brush}`
     document.getElementById('brushColor').style.color = (brush)
    console.log(brush)
  })
}

document.getElementById('goBack').addEventListener('click', function() {
  window.location='../../index.html'
  window.alert("Your Painting will not be saved")
})

document.getElementById('clear').addEventListener('click', function() {
  location.reload()
})
