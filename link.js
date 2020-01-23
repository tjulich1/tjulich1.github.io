function Link(image, x, y, speed, game) {
    this.ctx =  game.ctx;
    this.game = game;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.image = image;
    this.animation = new Animation(image, 18, 24, 144, 0.2, 8, true, 2);
};

Link.prototype.draw = function() {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
};

Link.prototype.update = function() {

};