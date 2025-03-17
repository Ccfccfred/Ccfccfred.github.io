

function setup(){
    createCanvas( windowWidth,windowHeight);
}

function draw(){
    background(250, 150, 100, 20)
    fill('red')
    if(mouseX < 200){
        rect(mouseX,mouseY,100,100)
    }else{
        rect(mouseX,mouseY,50,50,25)
     }

     if(mouseX < 200){
        rect(mouseX,mouseY, 100,100)
     }else{
        rect(mouseX,mouseY,50,50,25)
     }

     for(var i = 0; i<1000; i++){
        rect((i*10)%width,(i*10)%innerHeight,150,10)
     }

     for(var i=0; i<1500;i++){
        rect((i*15)%width,(i*15)%innerHeight,25,5)
     }
}