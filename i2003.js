let img;

function preload(){
  img = loadImage('sky.jpg');
}

let t;

function setup() {
  let rightDiv = document.getElementById("canvas-wrapper");
  let size = Math.min(rightDiv.clientWidth, rightDiv.clientHeight);
  size = Math.max(size, 300);
  let canvas = createCanvas(size, size);
  canvas.parent('canvas-wrapper');
}

function draw() {
  background(50);

  t = document.getElementById("slider");
  let s = parseFloat(t.value);

  tint(255, 255*(1-s));
  imageMode(CENTER);
  image(img, width/2, height/2, width, height);

  fill(160, 165, 170, 255*s);
stroke(0,255*s);
  rectMode(CENTER);
  rect(width/2, height/2 - 29, width/1.5, 30);


  fill(160, 165, 170, 255*s);
  rect(width/2, height/2 + 29, width/1.5, 30);


  fill(255, 248, 220, 255*s);
  rect(width/2, height/2, width/1.5, 28);
}

function windowResized() {
  let rightDiv = document.getElementById("canvas-wrapper");
  let size = Math.min(rightDiv.clientWidth, rightDiv.clientHeight);
  size = Math.max(size, 300);
  resizeCanvas(size, size);
}
