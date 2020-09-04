import Game from "./game_class.js"
import Car from "./cars_class.js"

const canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d", {
  alpha: false
});

let game = new Game(context, canvas)
document.querySelector(".goal").innerHTML = `${game.raceDistance < 10? "0"+game.raceDistance:game.raceDistance} KMs LEFT`



requestAnimationFrame(gameLoop);

function gameLoop() {
  game.update()
  requestAnimationFrame(gameLoop);
};

document.addEventListener("keydown", e => {
  if (e.key == "Enter" && game.paused && game.tryAgain) {
    start()
  }
})

document.getElementById("start").onclick = () => {
  document.querySelector(".win").style.display = "none"
  start()

}

document.getElementById("play-again").onclick = () => {
  document.querySelector(".lost").style.display = "none"
  start()
}

function start() {
  game = new Game(context, canvas)
  const crashElement = document.querySelector(".crash")
  crashElement.style.display = "none";

  document.querySelector("audio").play()

  let timeMeter = document.querySelector(".timer")
  let elapsedTime = `${game.totalMinutes}:${game.totalSeconds}:${game.totalMili}`;
  timeMeter.innerHTML = `TIME LEFT ${elapsedTime}`
  document.querySelector(".speed").innerHTML = "10 Km/Hr"
  document.querySelector(".goal").innerHTML = `${game.raceDistance < 10? game.raceDistance+".00":game.raceDistance} KMs LEFT`

}


let time = {
  "min": 0,
  "sec": 0
}

const timeStored = localStorage.getItem('time');
if (timeStored) {
  console.log("Found")
} else {
  localStorage.setItem("time", JSON.stringify(time))
}