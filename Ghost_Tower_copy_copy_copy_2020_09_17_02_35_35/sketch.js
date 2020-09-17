var towerImage,tower;
var doorImage,door,doorgroup;
var climberImage,climber,climbergroup;
var ghost,ghostImage;
var invisableBlock,invisableBlockGroup;
var gamestate="play";


function preload(){
 towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png");
  ghostImage=loadImage("ghost-standing.png");
}


function setup(){
 createCanvas(600,600); 
tower=createSprite(300,300);
  tower.addImage("tower",towerImage);
  tower.velocityY=1;
  ghost=createSprite(200,200,50,50);
  ghost.scale=0.3;
  ghost.addImage("ghost",ghostImage);
  doorgroup=new Group();
  climbergroup=new Group();
  invisableBlockGroup=new Group();
}
function draw(){
 background(0);
  if(gamestate==="play"){
    
  if(keyDown(LEFT_ARROW)){
   ghost.x=ghost.x-3; 
  }
  
  if(keyDown(RIGHT_ARROW)){
   ghost.x=ghost.x+3; 
  }
  
  if(keyDown("space")){
  ghost.velocityY=-5  
  }
    ghost.velocityY=ghost.velocityY+0.8;
  if(tower.y>400){
   tower.y=300; 
  }
  if(climbergroup.isTouching(ghost)){
    ghost.velocityY=0
  }
  
  if(invisableBlockGroup.isTouching(ghost) || ghost.y>600){
  ghost.destroy();  
  }
  
  spawnDoors();
  drawSprites();
   }
  if(gamestate==="end"){
   stroke("yellow");
    fill("yellow")
    textSize(30);
    text("GameOver",230,250);
   } 
  }
function spawnDoors(){
 if(frameCount%240===0){
  var door=createSprite(200,-50);
   door.addImage(doorImage);
   var climber=createSprite(200,10);
   climber.addImage(climberImage);
   var invisableBlock=createSprite(200,15);
   invisableBlock.width=climber.width;
   invisableBlock.height=2;
   door.x=Math.round(random(120,400));
   door.velocityY=1;
   climber.x=door.x
   climber.velocityY=1;
   invisableBlock.x=door.x;
   invisableBlock.velocityY=1;
   door.lifetime=800;
   climber.lifetime=800;
   invisableBlock.lifetime=800;
   doorgroup.add(door);
   climbergroup.add(climber)
   invisableBlock.debug=true;
   invisableBlockGroup.add(invisableBlock);
   ghost.depth=door.depth;
   ghost.depth+=1;
 }
}

