let img;

function preload() {
  img = loadImage('sky.webp');
}

let t;

function setup() {
  let rightDiv = document.getElementById("canvas-wrapper");
  // Use the smaller dimension for a square canvas
  let size = Math.min(rightDiv.clientWidth, rightDiv.clientHeight);
  size = Math.max(size, 300);
  let canvas = createCanvas(size, size, WEBGL);
  canvas.parent('canvas-wrapper');
}

function draw() {
  background(50);

  t = document.getElementById("slider");
  let s = parseFloat(t.value);

  
  tint(255, 255 * (1 - s));
  imageMode(CENTER);
  // In WEBGL, (0,0) is the canvas center
  image(img, 0, 0, width, height);

  
  push();
  rotateX(PI / 2);
  rotateY(0);
  rotateZ(0);
stroke(0,255*s);
  fill(255, 255 * s);
  plane(500, 500);
  pop();

  rotateY(frameCount * 0.11);
  rotateZ(-PI / 30);

  push();
  fill(255, 255 * s);
  stroke(0, 255 * s);
  translate(0, -height / 10, 0);
  cylinder(width / 5, height / 40);
  noStroke();
  cylinder(width / 160, height / 5);
  pop();
}

function windowResized() {
  let rightDiv = document.getElementById("canvas-wrapper");
  let size = Math.min(rightDiv.clientWidth, rightDiv.clientHeight);
  size = Math.max(size, 300);
  resizeCanvas(size, size);
}

