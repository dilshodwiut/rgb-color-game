const cells = document.querySelectorAll(".cell");
const row2 = document.querySelectorAll(".row2");
const easy = document.querySelector("#easy");
const hard = document.querySelector("#hard");
const restart = document.querySelector("#restart");
const header = document.querySelectorAll(".rgb_header");
const announcer = document.querySelector("#announcer");

window.addEventListener("load", restarter);

restart.addEventListener("click", restarter);

easy.addEventListener("click", function () {
  easy.classList.add("white");
  hard.classList.remove("white");
  restarter();
});

hard.addEventListener("click", function () {
  hard.classList.add("white");
  easy.classList.remove("white");
  restarter();
});

function restarter() {
  correctColor = colorGenerator();
  document.querySelector("header h1").textContent = correctColor;
  announcer.textContent = "Which one?";
  restart.textContent = "New Colors";
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.background = colorGenerator();
  }
  for (let i = 0; i < header.length; i++) {
    header[i].style.background = "#4682B4";
  }

  if (easy.classList.contains("white")) {
    for (let i = 0; i < row2.length; i++) {
      row2[i].style.visibility = "hidden";
    }
    for (let i = 0; i < cells.length - 3; i++) {
      cells[i].style.visibility = "visible";
    }
    cells[Math.round(Math.random() * 2)].style.background = correctColor;
  } else {
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.visibility = "visible";
    }
    cells[Math.round(Math.random() * 5)].style.background = correctColor;
  }
  checkColor(correctColor);
}

function checkColor(color) {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
      if (cells[i].style.backgroundColor === color) {
        for (let i = 0; i < header.length; i++) {
          header[i].style.background = color;
        }
        for (let i = 0; i < cells.length; i++) {
          if (easy.classList.contains("white")) {
            for (let i = 0; i < cells.length - 3; i++) {
              cells[i].style.visibility = "visible";
            }
          } else {
            cells[i].style.visibility = "visible";
          }
          cells[i].style.background = color;
        }
        announcer.textContent = "Correct!";
        restart.textContent = "Play Again?";
      } else {
        announcer.textContent = "Try Again";
        cells[i].style.visibility = "hidden";
      }
    });
  }
}

function colorGenerator() {
  let r, g, b;
  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
