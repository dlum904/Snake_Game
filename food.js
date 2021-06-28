function Food() {
    // the Food's position on the canvas
    this.pos = {
        x: Math.floor(Math.random() * (width - scl)),
        y: Math.floor(Math.random() * (height - scl))
    }

    // draws the food on the canvas according to its pos
    this.show = function () {
        fill("red");
        rect(this.pos.x, this.pos.y, scl, scl);
    }

    // TODO: when the egg is eaten, we want to spawn it at a new position
    this.spawn = function () {

    }

}