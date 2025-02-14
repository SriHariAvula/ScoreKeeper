const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");

const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");
const games = document.querySelector("#games");

let p1 = 0;
let p2 = 0;
let noOfGames = 5;
let gameOver = false;

games.addEventListener("change", function (e) {
  noOfGames = parseInt(this.value);
  resetfunc();
});

p1Button.addEventListener("click", function () {
  if (gameOver === false) {
    if (noOfGames !== p1) {
      p1 += 1;
      p1Score.innerText = p1;
      if (p1 === noOfGames) {
        gameOver = true;
      }
    }
  }
});

p2Button.addEventListener("click", function () {
  if (gameOver === false) {
    if (noOfGames !== p2) {
      p2 += 1;
      p2Score.innerText = p2;
      if (p2 === noOfGames) {
        gameOver = true;
      }
    }
  }
});

function resetfunc() {
  p1 = 0;
  p1Score.innerText = p1;
  p2 = 0;
  p2Score.innerText = 0;
  gameOver = false;
}

reset.addEventListener("click", resetfunc);
