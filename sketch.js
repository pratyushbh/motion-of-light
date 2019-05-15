var canvawidth = window.innerWidth;
var canvaheight = window.innerHeight;
alert(canvawidth)
function setup() {
  createCanvas(canvaheight, (canvawidth*2));
}
var size = 50
var accelration = 0;
var x = 100;
var y = 100;
function accelrate(){
  accelration = accelration + 0.1;
  size = size + 0.01;
  if (accelration === 100){
  }
  if(accelration === 2997){
   accelration = 0;
   size = 50;
  }
  console.log(accelration);
}
function draw() {
  x = x + accelration;
  y = y-3;
  background(50);
  if(x >= canvawidth){
   x=0;
   y=200;
   y-6;
  }
  if(x === 0){
   x ;
  }
  ellipse(x,100 ,size,50);
  accelrate();
}