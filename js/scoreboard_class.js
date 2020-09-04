import {
    win
} from "./win.js"
import {
    lost
} from "./lost.js";

export default class ScoreBoard {
    constructor(game) {
        this.game = game
        this.timeMeter = document.querySelector(".timer")
        this.distanceMeter = document.querySelector(".goal");
        this.startTime = this.then = Date.now();
        this.distanceTraveled = 0;
        this.elapsedTime = ""
        this.distanceRemaining = this.game.raceDistance;

    }

    update() {
        this.updateKMLeft();
        this.updateTime()
    }

    updateTime() {
        let timeElapsed = Date.now() - this.startTime

        let time = new Date(timeElapsed)
        let minutes = Number.parseInt(this.game.totalMinutes) - Number.parseInt(time.getUTCMinutes())


        let seconds = Number.parseInt(this.game.totalSeconds) - Number.parseInt(time.getUTCSeconds())


        let milliseconds = time.getUTCMilliseconds()
        milliseconds = Math.floor((Number.parseInt(this.game.totalMili) - Number.parseInt(milliseconds)) / 10)


        if (minutes <= 0 && seconds <= 0 && milliseconds <= 0 || seconds < 0) {
            this.game.paused = true
            this.timeMeter.innerHTML = `TIME LEFT 00:00:00`
            document.querySelector("audio").pause()
            lost(this)
            return
        }

        minutes = minutes < 10 ? `0${minutes}` : minutes
        seconds = seconds < 10 ? `0${seconds}` : seconds
        let mili = milliseconds < 10 ? `0${milliseconds}` : milliseconds
        this.elapsedTime = `${minutes}:${seconds}:${mili}`;
        this.timeMeter.innerHTML = `TIME LEFT ${this.elapsedTime}`

    }

    updateKMLeft() {

        this.now = Date.now();
        let deltaTime = this.now - this.then;

        if (deltaTime >= 1000) {
            this.meterPerSecond = this.game.carController.speed * 1000 / (60 * 60);

            this.distanceTraveled += this.meterPerSecond;
            this.then = this.now;

            this.distanceRemaining = (this.game.raceDistance - (this.distanceTraveled / 5)).toFixed(2)

            if (this.distanceRemaining <= 0) {
                this.game.paused = true
                this.distanceMeter.innerHTML = '00 KMs LEFT';
                document.querySelector("audio").pause()
                win(this)
                return
            }

            this.distanceMeter.innerHTML = this.distanceRemaining + ' KMs LEFT';

        }
    }
}