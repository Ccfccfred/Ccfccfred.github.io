var x = 0
var y = 0

function setup(){
    createCanvas(720,480);
}


function draw(){
    background('#4b1fb7') // automatic semicolon insertion
    rect(x,y,10,10);
    x = x + 5;
    x = x % 700
    y = y + 1;
    y = y % 500;
}


