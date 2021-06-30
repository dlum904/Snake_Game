function Snake() {
    // the Snake's position on the canvas
    this.pos = {
        x: 0,
        y: 0
    }
    // the Snake's deltas
    this.delta = {
        x: 1,
        y: 0
    }

    // updates the snake's location according to the deltas
    this.update = function () {
        this.pos.x += this.delta.x*scl;
        this.pos.y += this.delta.y*scl;

        // p5 function used to constrain a number between a minimum and maximum limit.
        this.pos.x = constrain(this.pos.x, 0, width - scl);
        this.pos.y = constrain(this.pos.y, 0, height - scl);
    }

    // draws the snake on the canvas according to its pos
    this.show = function () {
        fill(255);
        rect(this.pos.x, this.pos.y, scl, scl);
    }

    // TODO: tells us if the snake is at the same pos as the food
    this.eat = function (food) {
        if (this.pos.x === food.pos.x && this.pos.y === food.pos.y) return true;
        return false
    }
}