export default class PlayerCar {
    constructor(context) {
        this.context = context
        this.car = new Image()
        this.car.src = "images/bluecar.png";
        this.positionX = 133
        this.positionY = 125
        this.lane = 2
    }

    update() {
        this.context.drawImage(this.car, this.positionX, this.positionY, 30, 20);
    }

    getLane() {
        switch (this.positionX) {
            case 89:
                this.lane = 1
                break;
            case 133:
                this.lane = 2
                break;
            case 177:
                this.lane = 3
                break;
        }
    }
}