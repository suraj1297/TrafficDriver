export default class CarController {
    constructor(road, playerCar, game) {
        this.road = road
        this.playerCar = playerCar
        this.control()
        this.speed = 1
        this.rightLeft = 44
        this.count = 1
        this.game = game
    }

    control() {
        document.addEventListener("keydown", e => {
            const key = e.key
            if (key == "ArrowUp" || key == "W" || key == "w") {
                if (this.count < 4) {
                    this.speed += 0.5
                    this.road.speedUp = this.speed
                    this.count++
                    this.game.boost += 0.1

                }
                this.speedDial()
            } else if (key == "ArrowDown" || key == "S" || key == "s") {
                if (this.count > 1) {
                    this.speed -= 0.5
                    this.road.speedUp = this.speed
                    this.count--
                    this.game.boost -= 0.1
                }
                this.speedDial()
            } else if (key == "ArrowRight" || key == "D" || key == "d") {
                if (this.playerCar.positionX < 175) {
                    this.playerCar.positionX += this.rightLeft
                    this.playerCar.getLane()
                }
            } else if (key == "ArrowLeft" || key == "A" || key == "a") {
                if (this.playerCar.positionX > 91) {
                    this.playerCar.positionX -= this.rightLeft
                    this.playerCar.getLane()
                }
            }
        });
    }


    speedDial() {
        const speedElement = document.querySelector(".speed")
        speedElement.textContent = `${this.count != 1?this.count*2:this.count}0 Km/Hr`
    }
}