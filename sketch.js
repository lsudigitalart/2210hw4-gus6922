var x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 50;


function setup() {
  createCanvas(640, 360);
  noStroke();



}

function draw() {
  background(161,215,50);
ellipseMode(CENTER);


  fill(161,225,50);
  ellipse(160,0,320,480);
  fill(161,225,50);
  ellipse(160,320,320,480);
  fill(161,225,50);
  ellipse(160,160,320,480);


  fill(161,215,50);
  ellipse(320,0,320,480);
  fill(161,215,50);
  ellipse(320,320,320,480);
  fill(161,215,50);
  ellipse(320,160,320,480);

  fill(161,225,50);
  ellipse(480,0,320,480);
  fill(161,225,50);
  ellipse(480,320,320,480);
  fill(161,225,50);
  ellipse(480,160,320,480);

  fill(161,215,50);
  ellipse(640,0,320,480);
  fill(161,215,50);
  ellipse(640,320,320,480);
  fill(161,215,50);
  ellipse(640,160,320,480);


  // fill(161,189,50);
  // ellipse(320,90,320);
  //
  // fill(161,100,50);
  // ellipse(480,90,320);
  //
  // fill(161,189,50);
  // ellipse(160,180,320);
  //
  // fill(161,189,50);
  // ellipse(320,270,320);
  //
  // fill(161,100,50);
  // ellipse(480,360,320);


ellipseMode(CENTER);
  fill(100, 166, 199);
  ellipse(mouseX, height/2, mouseY/2+10, mouseY/2+10);

  fill(238, 190, 65);
  ellipse(mouseX, height/2, mouseY/4+5, mouseY/4+5);

   inverseX = width-mouseX;
   inverseY = height-mouseY;

  fill(226, 100, 143);
  ellipse(inverseX, height/2, (inverseY/2)+10, (inverseY/2)+10);

  fill(223, 98, 89);
  ellipse(inverseX, height/2, (inverseY/4)+5, (inverseY/4)+5);

  // dx = mouseX - x;
  // dy = mouseY - y;
  // angle1 = atan2(dy, dx);
  // x = mouseX - (cos(angle1) * segLength);
  // y = mouseY - (sin(angle1) * segLength);
  // inverseX = width-mouseX;
  // inverseY = height-mouseY;
  //
  // segment(x, y, angle1);
  // ellipseMode(CORNER);
  // fill(255,255,255);
  // ellipse(x, y, 20);




}
// function segment(x, y, a) {
//   push();
//   translate(x, y);
//   rotate(a);
//   line(0, 0, segLength, 0);
//   pop();
// }
