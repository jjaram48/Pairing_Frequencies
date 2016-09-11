var x;
var col = [];

function setup() {
  createCanvas(400,400);
}



function draw() {
background(0);
  for (var x = 0; x < width; x++) {
    col [x]= map(x, 0, width, 0, 255);
    stroke(col[x]);
    line( x, 0, x, height);
  }
}
