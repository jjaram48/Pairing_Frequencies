var x;
var col = 0;

function setup() {
  createCanvas(400,400);
}

function draw() {
background(0);
  for (var x = 0; x < width; x++) {
    col = map(x, 0, width, 0, 255);
    stroke(col);
    line( x, 0, x, height);
  }

}
