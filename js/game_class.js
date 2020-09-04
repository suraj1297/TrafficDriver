import Road from "./road_class.js";
import PlayerCar from "./player_car_class.js";
import CarController from "./car_controller_class.js";
import Car from "./cars_class.js";
import ScoreBoard from "./scoreboard_class.js"
import {
    collide
} from "./collide.js"


export default class Game {
    constructor(context, canvas) {
        this.context = context;
        this.canvas = canvas;
        this.road = new Road(this.context, this.canvas);
        this.playerCar = new PlayerCar(this.context);
        this.scoreboard = new ScoreBoard(this)
        this.boost = 0
        this.carController = new CarController(this.road, this.playerCar, this);
        this.traffic = [];
        this.interval = 900;
        this.paused = false;
        this.raceDistance = 1
        this.speed = 1
        this.totalMinutes = 0
        this.totalSeconds = 60
        this.totalMili = 1000
        this.control()
        setInterval(() => this.generateTraffic(), this.interval);
        this.tryAgain = false;
        this.previous = 0
        this.lane = 0
    }

    generateTraffic() {
        if (this.paused) {
            return
        };
        let trafficCar = new Car(this.context, this.boost, this.choseLane());
        this.traffic.push(trafficCar);
    }

    update() {
        if (this.paused) {
            return
        };
        this.road.update();
        this.playerCar.update();
        this.traffic.forEach((draw) => {
            draw.update();
        });
        this.scoreboard.update()

        let isCollide = collide(this.playerCar, this.traffic)
        if (isCollide) {
            const crashElement = document.querySelector(".crash")
            crashElement.style.display = "block";
            document.querySelector("audio").pause()
            this.paused = true
            this.tryAgain = true
        }
    }

    control() {
        document.addEventListener("keydown", e => {
            const key = e.key
            if (key == "ArrowUp" || key == "W" || key == "w") {
                if (this.speed < 4) {
                    this.boost += 0.5
                    this.speed += 0.5

                }
            } else if (key == "ArrowDown" || key == "S" || key == "s") {
                if (this.speed > 1) {
                    this.boost -= 0.5
                    this.speed -= 0.5
                }
            }
        });
    }

    choseLane() {
        if (this.previous == this.lane) {
            let lanes = [0, 1, 2]
            lanes.splice(lanes.indexOf(this.lane), 1)

            let setLane = lanes[Math.floor(Math.random() * 2)]
            this.lane = setLane
            this.previous = this.lane
            return this.lane
        }
    }

}