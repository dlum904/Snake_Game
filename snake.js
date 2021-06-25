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

    this.update = function () {
        this.pos.x += this.delta.x*scl;
        this.pos.y += this.delta.y*scl;

        this.pos.x = constrain(this.pos.x, 0, width - scl);
        this.pos.y = constrain(this.pos.y, 0, height - scl);
    }

    this.show = function () {
        fill(255);
        rect(this.pos.x, this.pos.y, scl, scl);
    }
}