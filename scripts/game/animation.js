class Animation {

    constructor(matrix, image, x, animationWidth, animationHeight, spriteWidth, spriteHeight) {
        this.matrix = matrix;
        this.image = image;
        this.width = animationWidth;
        this.height = animationHeight;
        this.x = x;
        this.y  = height  - this.height;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.currentFrame = 0;
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.height, this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], this.spriteWidth, this.spriteHeight);
        this.animate();
    }

    animate() {
        this.currentFrame = (this.currentFrame >= this.matrix.length - 1) ? 0 : this.currentFrame  +  1;
    }
}