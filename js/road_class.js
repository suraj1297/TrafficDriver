export default class Road {
    constructor(context, canvas) {
        this.context = context;
        this.road = new Image();
        this.road.src = "images/road.png";
        this.yoffset = -85;
        this.canvas = canvas;
        this.speedUp = 1;
    }

    update() {
        if (this.yoffset >= 0) this.yoffset = -85;
        this.context.drawImage(this.road, 0, this.yoffset, this.canvas.width, 85);
        this.context.drawImage(
            this.road,
            0,
            this.yoffset + 85,
            this.canvas.width,
            85
        );
        this.context.drawImage(
            this.road,
            0,
            [this.yoffset + 170],
            this.canvas.width,
            85
        );
        this.yoffset += this.speedUp;
    }
}