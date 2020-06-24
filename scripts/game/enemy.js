class Enemy extends Animation {

    constructor(image, imageWidth, imageHeight, rows, columns, x) {
        super(image, imageWidth, imageHeight, rows, columns, x);
    }

    move() {

        this.x = this.x - 10;

        if (this.x < -this.width) {
            this.x = width;
        } 
    }
}