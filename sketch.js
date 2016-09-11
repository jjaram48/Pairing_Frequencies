var col = []; //  STORES ALL SINGLE VALUES
var avg_col = []; //  STORES THE FINAL AVERAGES
var num_avgs = 3; //  DEFINES THE NUMBER OF AVERAGES
var part_avgs = []; // STORES PARTIAL AVERAGES
var sum = 0;
var sum_ = 0;

function setup() {
  createCanvas(800, 200);
  freq_generate();
  // calc_total_average();
  calc_partial_averages();
}

function freq_generate() { // GENERATES THE SPECTRUM OF FREQUENCIES
  for (var i = 0; i < width; i++) {
    col[i] = map(i, 0, width, 0, 255);
  }
}

function calc_total_average() { //  TOTAL AVERAGE
  var sum = 0;
  for (var i = 0; i < col.length; i++) { // CALCULATES THE AVERAGE
    sum += int(col[i]);
  }
  var avgs = sum / col.length;

  for (var _i = 0; _i < col.length; _i++) { // RETURNS THE AVERAGE VALUE TO THE COLOR ARRAY
    col[_i] = avgs;
  }
}


function calc_partial_averages() { //  PARTIAL AVERAGES
  var sum_ = 0;
  for (var i = 0; i < num_avgs; i++) {
    var sum_ = 0;
    var part = int(i * (col.length / num_avgs)); // TELLS ME WHERE IN WHICH SECTION THE CALCULATION TAKES PLACE
    var cut = int((i + 1) * (col.length / num_avgs)); // ESTABLISHES THE CUT POINT
    for (var j = part; j < cut; j++) {
      sum_ += int(col[j]);
      println("j: " + j);
      println("sum_: " + sum_);
    }
    part_avgs[i] = sum_ / col.length;
  }

  for (var i_ = 0; i_ < num_avgs; i_++) { // RETURNS THE AVERAGE VALUE TO THE COLOR ARRAY
    var part_ = int(i_ * (col.length / num_avgs)); // TELLS ME WHERE IN WHICH SECTION THE CALCULATION TAKES PLACE
    var cut_ = int((i_ + 1) * (col.length / num_avgs)); // ESTABLISHES THE CUT POINT
    for (var j_ = part_; j_ < cut_; j_++) { // RETURNS THE AVERAGE VALUE TO THE COLOR ARRAY
      col[j_] = part_avgs[i_];
    }
  }
}

function draw() {
  background(255);
  for (var i = 0; i < col.length; i++) { //  PLOTS THE FREQUENCIES ACCORDINGLY
    stroke(col[i]);
    line(i, 0, i, height);
  }
}