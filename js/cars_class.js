export default class Car {
    constructor(context, boost, lane) {
        this.context = context
        this.car = new Image()
        this.car.src = "images/opp.png";
        this.offset = -1
        this.lane = lane //Math.floor(Math.random() * 3)
        this.lanePositions = [94, 137, 182]
        this.speed = [1.3, 1.4][Math.floor(Math.random() * 2)]
        this.boost = boost
    }

    update() {
        this.context.drawImage(this.car, this.lanePositions[this.lane], this.offset, 24, 18)
        this.offset = this.offset + this.speed + this.boost
    }


}