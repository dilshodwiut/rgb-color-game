let correctColor = colorGenerator()
let cells = document.querySelectorAll(".cell")
let row2 = document.querySelectorAll(".row2")
let easy = document.querySelector("#easy")
let hard = document.querySelector("#hard")
let restart = document.querySelector("#restart")
let header = document.querySelectorAll(".rgb_header")
let announcer = document.querySelector("#announcer")
restarter()

restart.addEventListener("click", restarter)

easy.addEventListener("click", function(){
  easy.classList.add("white")
  hard.classList.remove("white")
  restarter()
})

hard.addEventListener("click", function(){
  hard.classList.add("white")
  easy.classList.remove("white")
  restarter()
})

for (let i = 0; i < cells.length; i++){
  cells[i].addEventListener("click", function () {
    if (cells[i].style.background === correctColor) {
      for (let i = 0; i < header.length; i++){
        header[i].style.background = correctColor;
      }
      for (let i = 0; i < cells.length; i++) {
      	if (easy.classList.contains("white")){
      		for (let i = 0; i < cells.length - 3; i++){
      			cells[i].style.visibility = "visible"
      		}
      	} else {
      		cells[i].style.visibility = "visible"
      	}
      	cells[i].style.background = correctColor
      }
      announcer.textContent = "Correct!"
      restart.textContent = "Play Again?"
    } else {
      announcer.textContent = "Try Again"
      cells[i].style.visibility = "hidden"
    }
  })
}

function restarter(){
  correctColor = colorGenerator()
  const rgbHeader = document.querySelector("header h1").textContent = correctColor
  announcer.textContent = "Which one?"
  restart.textContent = "New Colors"
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.background = colorGenerator()
  }
  for (let i = 0; i < header.length; i++) {
    header[i].style.background = "#4682B4";
  }

  if (easy.classList.contains("white")){
    for (let i = 0; i < row2.length; i++){
      row2[i].style.visibility = "hidden"
    }
    for (let i = 0; i < cells.length - 3; i++){
      cells[i].style.visibility = "visible"
    }
    cells[Math.round(Math.random() * 2)].style.background = correctColor
  } else {
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.visibility = "visible"
    }
    cells[Math.round(Math.random() * 5)].style.background = correctColor
  }
}

function colorGenerator(){
  let r, g, b
  r = Math.round(Math.random() * 255)
  g = Math.round(Math.random() * 255)
  b = Math.round(Math.random() * 255)
  return "rgb(" + r + ", " + g + ", " + b + ")"
}