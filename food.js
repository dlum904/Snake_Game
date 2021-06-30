function Food() {
    // the Food's position on the canvas
    this.pos = {
        x: Math.ceil((Math.floor(Math.random() * (width - scl)) + 1) / scl) * scl,
        y: Math.ceil((Math.floor(Math.random() * (height - scl)) + 1) / scl) * scl
    }

    // draws the food on the canvas according to its pos
    this.show = function () {
        fill("red");
        rect(this.pos.x, this.pos.y, scl, scl);
    }

    // when the egg is eaten, we want to spawn it at a new position
    this.spawn = function () {
        this.pos = {
            x: Math.ceil((Math.floor(Math.random() * (width - scl)) + 1) / scl) * scl ,
            y: Math.ceil((Math.floor(Math.random() * (height - scl)) + 1) / scl) * scl
        }
        console.log(this.pos)
    }

}