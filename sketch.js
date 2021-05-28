var btn_red;
var btn_green;
var btn_blue;

var r=0;
var g=0;
var b=0;

function setup() {
  createCanvas(1595, 755);

  btn_red=createButton("Red");
  btn_red.position(60,60);
  btn_red.style("background-color:red");

  btn_green=createButton("Green");
  btn_green.position(120,120);
  btn_green.style("background-color:green");

  btn_blue=createButton("Blue");
  btn_blue.position(180,180);
  btn_blue.style("background-color:blue");

  btn_yellow=createButton("Yellow");
  btn_yellow.position(240,240);
  btn_yellow.style("background-color:yellow");

  btn_pink=createButton("Pink");
  btn_pink.position(300,300);
  btn_pink.style("background-color:pink");

  btn_black=createButton("Black");
  btn_black.position(360,360);
  btn_black.style("background-color:black;color:white");

  btn_red.mousePressed(red_bg);
  btn_green.mousePressed(green_bg);
  btn_blue.mousePressed(blue_bg);
  btn_yellow.mousePressed(yellow_bg);
  btn_pink.mousePressed(pink_bg);
  btn_black.mousePressed(black_bg);
}

function draw() {
  background(r,g,b);
}

function red_bg() {
  r=255;
  g=0;
  b=0;
}
function green_bg() {
  r=0;
  g=255;
  b=0;
}
function blue_bg() {
  r=0;
  g=0;
  b=255;
}
function yellow_bg() {
  r=255;
  g=255;
  b=0;
}
function pink_bg() {
  r=255;
  g=10;
  b=255;
}
function black_bg() {
  r=0;
  g=0;
  b=0;
}

