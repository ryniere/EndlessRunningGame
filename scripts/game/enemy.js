class Enemy extends Animation {

    constructor(matrix, image, x, animationWidth, animationHeight, spriteWidth, spriteHeight) {
        super(matrix, image, x, animationWidth, animationHeight, spriteWidth, spriteHeight);
    }

    move() {

        this.x = this.x - 10;

        if (this.x < -this.width) {
            this.x = width;
        } 
    }
}