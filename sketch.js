var col = [];       //  STORES ALL SINGLE VALUES
var avg_col= [];    //  STORES THE FINAL AVERAGES
var num_avgs = 5;       //  DEFINES THE NUMBER OF AVERAGES
var part_avgs = []; // STORES PARTIAL AVERAGES

function setup() {
  createCanvas(400,400);
  freq_generate();
    // calc_total_average();
  calc_partial_averages();
}

function freq_generate (){    // GENERATES THE SPECTRUM OF FREQUENCIES
  for (var i = 0; i < width; i++) {
    col [i]= map(i, 0, width, 0, 255);
  }
}

function calc_total_average (){     //  TOTAL AVERAGE
  var sum = 0;
  for( var i = 0; i < col.length; i++ ){    // CALCULATES THE AVERAGE
      sum += parseInt( col[i], 10 ); //don't forget to add the base 10
  }
  var avgs = sum/col.length;

  for( var i = 0; i < col.length; i++ ){    // RETURNS THE AVERAGE VALUE TO THE COLOR ARRAY
       col[i] = avgs;
  }
}


function calc_partial_averages (){    //  PARTIAL AVERAGES
var sum = 0;
  for (var i = 0; i < num_avgs; i++) {
    var sum = 0;
    var part = round(i*(col.length/num_avgs));         // TELLS ME WHERE IN WHICH SECTION THE CALCULATION TAKES PLACE
    var cut = round((i+1)*(col.length/num_avgs));      // ESTABLISHES THE CUT POINT
    for( var j = part; j < cut; j++ ){
        sum += parseInt( col[j], 10 ); //don't forget to add the base 10
        // println("j: " + j);
        // println("sum: " + sum);
    }
    part_avgs[i] = sum/col.length;

  }

  for( var i = 0; i < num_avgs; i++ ){    // RETURNS THE AVERAGE VALUE TO THE COLOR ARRAY
    var part = round(i*(col.length/num_avgs));         // TELLS ME WHERE IN WHICH SECTION THE CALCULATION TAKES PLACE
    var cut = round((i+1)*(col.length/num_avgs));      // ESTABLISHES THE CUT POINT
    for( var j = part; j < cut; j++ ){    // RETURNS THE AVERAGE VALUE TO THE COLOR ARRAY
      col[j] = part_avgs[i];
    }
  }
}

function draw() {
  background(0);
  for (var i = 0; i < col.length; i++) {    //  PLOTS THE FREQUENCIES ACCORDING
    stroke(col[i]);
    line( i, 0, i, height)
  }
}
