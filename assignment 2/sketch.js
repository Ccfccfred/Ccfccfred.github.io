//--------------------------------------
//https://p5js.org/examples/angles-and-motion-aim/

function setup(){
    createCanvas(windowWidth,windowHeight)
    colorMode(HSB)  

    angleMode(DEGREES);
    describe('two eyes that follow the cursor.')
}

function draw(){
    background(0);

    //left eye
    let leftX = random(0,width)//i edited the positions of the eyes so they scatter
    let leftY= random(0,height)

    //angle between eye and mouse

    let leftAngle = atan2(mouseY-leftY, mouseX-leftX)

    push();
    translate(leftX,leftY)
    fill(255)
    ellipse(0,0,50,50);
    rotate(leftAngle)
    fill(0)
    ellipse(12.5,0,25,25)
    pop()
// Draw right eye

let rightX = random(0, width);//i edited this piece for the eyes to scatter
let rightY = random(0, height);

// Calculate angle between right eye and angle
let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

push();
translate(rightX, rightY);
fill(255);
ellipse(0, 0, 50, 50);
rotate(rightAngle);
fill(0);
ellipse(12.5, 0, 25, 25);
pop();
}
//---------------------------------------
//https://p5js.org/examples/animation-and-variables-animation-with-events/

function mousePressed() {
    // Start/stop the animation loop
    if (isLooping()) {
      noLoop();
    } else {
      loop();
    }
  }
  //i wanted a way for the eyes to scatter at a rapid pace
  //--------------------

function keyPressed(){
  // Draw one frame
  redraw();
}



