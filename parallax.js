function ParallaxEffectElement(image, x, y, speed, game) {
    this.image = image;
    this.ctx = game.ctx;
    this.game = game;
    this.x = x;
    this.y = y;
    this.imageHeight = image.height;
    this.imageWidth = image.width;
    this.elapsedTime = 0;
    this.speed = speed;
    this.offset = 2;
};

ParallaxEffectElement.prototype.draw = function() {
    this.elapsedTime += this.game.clockTick;
    if (this.elapsedTime > this.speed) {
        this.elapsedTime = 0;
        this.x += this.offset;
        this.x = this.x % this.imageWidth;
    }
    this.ctx.drawImage(this.image, this.x, 0, this.imageWidth-this.x, this.imageHeight, 0, this.y, this.imageWidth-this.x, this.imageHeight);
    this.ctx.drawImage(this.image, 0, 0, this.x+1, this.imageHeight, this.ctx.canvas.width-this.x, this.y, this.x, this.imageHeight);
};

ParallaxEffectElement.prototype.update = function() {};