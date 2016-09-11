var col = [];       //  STORES ALL SINGLE VALUES
var avg_col= [];    //  STORES THE FINAL AVERAGES
var num_avgs = 3;       //  DEFINES THE NUMBER OF AVERAGES
var part_avgs = []; // STORES PARTIAL AVERAGES

function setup() {
  createCanvas(400,400);
  freq_generate();
}

function freq_generate (){    // GENERATES THE SPECTRUM OF FREQUENCIES
  for (var i = 0; i < width; i++) {
    col [i]= map(i, 0, width, 0, 255);
  }
}

function calc_total_average (){     //  TOTAL AVERAGE
  var sum = 0;
  for( var i = 0; i < col.length; i++ ){
      sum += parseInt( col[i], 10 ); //don't forget to add the base 10
  }
  var avgs = sum/col.length;

  for( var i = 0; i < col.length; i++ ){
       col[i] = avgs;
  }
    println(num_avgs);
}

function calc_partial_averages (){    //  PARTIAL AVERAGES

for (var i = 0; i < col.length/num_avgs; i++) { //
  var sum = 0;
  part_avgs[i]
}


  for( var j = 0; j < col.length; j++ ){
      sum += parseInt( col[i], 10 ); //don't forget to add the base 10
  }
  var avgs = sum/col.length;
    println(avgs);
}

function draw() {
background(0);
  calc_total_average();
  for (var i = 0; i < col.length; i++) {    //  PLOTS THE FREQUENCIES ACCORDING
    stroke(col[i]);
    line( i, 0, i, height)
  }
  // calc_partial_averages();
}
