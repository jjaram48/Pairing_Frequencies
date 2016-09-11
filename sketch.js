var col = [];

function setup() {
  createCanvas(400,400);
}

function freq_generate (){
  for (var i = 0; i < width; i++) {
    col [i]= map(i, 0, width, 0, 255);
  }
}

function draw() {
background(0);
  freq_generate();
  for (var i = 0; i < col.length; i++) {
    stroke(col[i]);
    line( i, 0, i, height)
  }
}
