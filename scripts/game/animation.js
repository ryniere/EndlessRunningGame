class Animation {

    constructor(image, imageWidth, imageHeight, rows, columns, x) {
        this.matrix = [];
        this.spriteWidth = imageWidth / rows;
        this.spriteHeight = imageHeight / columns;
        this.image = image;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = x;
        this.y  = height  - this.height;

        for(let i = 0; i < columns; i++) {
            for(let j = 0; j < rows; j++) {
                this.matrix.push([j*this.spriteWidth, i*this.spriteHeight]);
            }
        }
        
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