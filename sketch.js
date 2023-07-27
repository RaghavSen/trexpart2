
var trex ,trex_running;
var ground,groundimage;
function preload(){
trex_running=  loadAnimation("trex1.png","trex3.png","trex4.png"); 
groundimage=loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 
 trex= createSprite (100,150,50,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  trex.x=50;
  ground= createSprite(300,180,600,10);
  ground.addImage(groundimage);

}

function draw(){
  background("white")
  trex.velocityY=trex.velocityY+0.8
if(keyDown("space"))
{
  trex.velocityY=-10
}

trex.collide(ground);
  drawSprites();

}
