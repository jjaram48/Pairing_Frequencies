var col = [];       //  STORES ALL SINGLE VALUES
var avg_col= [];    //  STORES THE FINAL AVERAGES
var avgs = 3;       //  DEFINES THE NUMBER OF AVERAGES

function setup() {
  createCanvas(400,400);
}

function freq_generate (){    // GENERATES THE SPECTRUM OF FREQUENCIES
  for (var i = 0; i < width; i++) {
    col [i]= map(i, 0, width, 0, 255);
  }
}

function calc_averages (){
  var sum = 0;
  for( var i = 0; i < col.length; i++ ){
      sum += parseInt( col[i], 10 ); //don't forget to add the base
  }
  var avgs = sum/col.length;
    println(avgs);
}

function draw() {
background(0);
  freq_generate();
  for (var i = 0; i < col.length; i++) {    //  PLOTS THE FREQUENCIES ACCORDING
    stroke(col[i]);
    line( i, 0, i, height)
  }
  calc_averages();
}
