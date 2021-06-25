let solid = new Snake();
let scl = 20;

function setup() {
    createCanvas(600, 600);
    frameRate(10);
}

function draw() {
    background(51);
    solid.update();
    solid.show()
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        console.log("UP")
        solid.delta.x = 0;
        solid.delta.y = -1;
    } else if (keyCode === DOWN_ARROW) {
        console.log("DOWN")
        solid.delta.x = 0;
        solid.delta.y = 1;
    } else if (keyCode === LEFT_ARROW) {
        console.log("LEFT")
        solid.delta.x = -1;
        solid.delta.y = 0;
    } else if (keyCode === RIGHT_ARROW) {
        console.log("RIGHT")
        solid.delta.x = 1;
        solid.delta.y = 0;
    }
}