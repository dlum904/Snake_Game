let scl = 20;
let pliskin;
let egg;

// p4 setup function, setus up the initial canvas
function setup() {
    createCanvas(600, 600);
    pliskin = new Snake();
    egg = new Food();
    frameRate(10);      // p5 function to control framerate
}

// p4 draw function, will continuosly draw.
function draw() {
    background(51);
    pliskin.update();
    pliskin.show();
    egg.show();
}

// p4 keyPressed function, for listening for keypcodes
function keyPressed() {
    if (keyCode === UP_ARROW) {
        console.log("UP")
        pliskin.delta.x = 0;
        pliskin.delta.y = -1;
    } else if (keyCode === DOWN_ARROW) {
        console.log("DOWN")
        pliskin.delta.x = 0;
        pliskin.delta.y = 1;
    } else if (keyCode === LEFT_ARROW) {
        console.log("LEFT")
        pliskin.delta.x = -1;
        pliskin.delta.y = 0;
    } else if (keyCode === RIGHT_ARROW) {
        console.log("RIGHT")
        pliskin.delta.x = 1;
        pliskin.delta.y = 0;
    }
}