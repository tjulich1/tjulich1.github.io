function BackgroundElement(image, game, xCoord, yCoord) {
    this.x = xCoord;
    this.y = yCoord;
    this.image = image;
    this.game = game;
    this.ctx = game.ctx;
};

BackgroundElement.prototype.draw = function () {
    this.ctx.drawImage(this.image, this.x, this.y);
};

BackgroundElement.prototype.update = function() {};