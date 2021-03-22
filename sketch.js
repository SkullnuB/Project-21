var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1200,600);

    block1 = createSprite(180,575,275,30);
    block1.shapeColor="red";
    block2 = createSprite(485,575,250,30);
    block2.shapeColor="green";
    block3 = createSprite(770,575,250,30);
    block3.shapeColor="blue";
    block4 = createSprite(1050,575,250,30);
    block4.shapeColor="yellow";
    ball = createSprite(random(20,750),100,30,30);
    ball.shapeColor="white";
    ball.velocityX = 5;
    ball.velocityY = 5;
    
}

function draw() {
    background(rgb(169,169,169));

edges=createEdgeSprites();

ball.bounceOff(edges);
if(block1.isTouching(ball) && ball.bounceOff(block1)){
ball.shapeColor = "red";
}

if(block2.isTouching(ball) && ball.bounceOff(block2)){
ball.shapeColor = "green";
}

if(block3.isTouching(ball) && ball.bounceOff(block3)){
ball.shapeColor = "blue";
}

 if(block4.isTouching(ball) && ball.bounceOff(block4)){
 ball.shapeColor = "yellow";
 }

drawSprites();

}
