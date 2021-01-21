//assigning variables
var canvas;
var redSur,blueSur,greenSur,yellowSur;
var box;
var edgeSprite1,edgeSprite2,edgeSprite3,edgeSprite4;
var music;

//loading music
function preload(){
    music = loadSound("music.mp3");
}

function setup(){

    //creating the canvas area
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    redSur = createSprite(100,595,200,10);
    redSur.shapeColor = "red";
    blueSur = createSprite(300,595,200,10);
    blueSur.shapeColor = "blue";
    greenSur = createSprite(500,595,200,10);
    greenSur.shapeColor = "green";
    yellowSur = createSprite(700,595,200,10);
    yellowSur.shapeColor = "yellow";

    //create box sprite and give velocity
    box = createSprite(random(20,580),100,30,30);
    box.shapeColor = "white";
    box.velocityX = -10;
    box.velocityY = 10;

}

function draw() {

    background(rgb(169,169,169));
  
    music.play();

    //calling the edgeSprite() function in draw() function
    edgeSprite(); 

    fill("red");
    textSize(20);
    text("!If the box touches the red surface, it stops moving!",10,50);

    //if the box touches the red surface, it stops noving
    if(box.isTouching(redSur)){
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    //detecting if the box is touching surfaces
    if(redSur.isTouching(box) && box.bounceOff(redSur)){
        box.shapeColor = "red";
    }
    if(blueSur.isTouching(box) && box.bounceOff(blueSur)){
        box.shapeColor = "blue";
    }
    if(greenSur.isTouching(box) && box.bounceOff(greenSur)){
        box.shapeColor = "green";
    }
    if(yellowSur.isTouching(box) && box.bounceOff(yellowSur)){
        box.shapeColor = "yellow";
    }

    //displaying the sprites
    drawSprites();
}

//function to create the edge-sprites
function edgeSprite(){
    edgeSprite1 = createSprite(0,300,1,600);
    edgeSprite2 = createSprite(800,300,1,600);
    edgeSprite3 = createSprite(400,0,800,1);

    box.bounceOff(edgeSprite1);
    box.bounceOff(edgeSprite2);
    box.bounceOff(edgeSprite3);
}