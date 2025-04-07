/// click on bubble  - mousepressed + dist()
// keep score - variable
// add new bubbles when there is only one left?
// pop bubble - filter? 
// p5.vector
// move - method
// bubbles bounce off edges - p5.vector.reflect
// bubbles bounce off each other - p5.vector.reflect
// time limit - variable

var bubbles = [];
var score = 0;
var timeRemaining = 30;
var currentTime = 0;


let bgColor;

function setup() {
  createCanvas(1500,710);

  // Retrieve the stored background color from localStorage
  let savedColor = localStorage.getItem('bgColor');
  
  if (savedColor) {
    bgColor = savedColor; // Use the saved color if available
  } else {
    bgColor = color(200, 200, 200); // Default color
  }

  background(bgColor);
}

function draw() {
  // Display instructions
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Click to change background color", width / 2, height / 2);
}

function mousePressed() {
  // Change to a random background color
  bgColor = color(random(255), random(255), random(255));
  background(bgColor);
  
  // Save the background color to localStorage
  localStorage.setItem('bgColor', bgColor.toString());
}
