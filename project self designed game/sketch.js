var canvas, backgroundImage;
var gameState = "serve";
 
var form, player, game;

var raptor_img , Xmax_img, AMG_img,urus_img,mega_img,defender_img , BG_img;



var obstacle_img;

function preload(){
  Xmax_img = loadImage("images/Xmaxx.jpg");
  raptor_img = loadImage("images/raptor.jpg");
 urus_img= loadImage("images/urus.jpg");
  AMG_img = loadImage("images/AMG.jpg");
  mega_img = loadImage("images/mega.jpg");
 defender_img = loadImage("images/defender.jpg");
  BG_img = loadImage("images/backgound.jpg");
obstacle_img = loadImage("images/Obstacle.jpg")
}

function setup() {
  createCanvas(1600,800);

raptor= createSprite(300,300);
Xmax = createSprite(300,700);
AMG = createSprite(300,200);
 urus = createSprite(300,400);
mega = createSprite(300,500);
defender = createSprite(300,600);
obstacle = createSprite(400,1000);

raptor.addImage(raptor_img);
Xmax.addImage(Xmax_img);
AMG.addImage(AMG_img);
urus.addImage(urus_img);
mega.addImage(mega_img);
defender.addImage(defender_img);
obstacle.addImage(obstacle_img);

raptor.visible = false;
Xmax.visible = false;
AMG.visible = false;
urus.visible = false;
mega.visible = false;
defender.visible = false;
obstacle.visible = false;



}


function draw() {
  background(BG_img); 
  
  //if(bronco.x<0){
   // bronco.x= bronco.width/2
 // }

if (keyDown ("space")){
  gameState = "play";
  raptor.visible = true;
  Xmax.visible = true;
  AMG.visible = true;
  urus.visible = true;
  mega.visible = true;
  defender.visible = true;
  
  raptor.scale= 0.3;
  Xmax.scale= 0.4;
  AMG.scale= 0.7;
  urus.scale= 0.3;
  mega.scale= 0.4;
  defender.scale= 0.4;
 
  
}

if(gameState=== "play"){


if(keyDown ("up_arrow")){
if(raptor.visible===true){
raptor.y= raptor.y-1;
}
if(Xmax.visible===true){
  Xmax.y= Xmax.y-1;
  }
  if(AMG.visible===true){
    AMG.y= AMG.y-1;
  }
  if(AMG.visible===true){
    AMG.y= AMG.y-1;
  }
  if(urus.visible===true){
    urus.y= urus.y-1;
  }
  if(mega.visible===true){
    mega.y= mega.y-1;
  }
  if(defender.visible===true){
    defender.y= defender.y-1;
  }
}
if(keyDown ("down_arrow")){
  if(raptor.visible===true){
  raptor.y= raptor.y+1;
  }
  if(Xmax.visible===true){
    Xmax.y= Xmax.y+1;
  }
  if(AMG.visible===true){
    AMG.y= AMG.y+1;
  }
  if(urus.visible===true){
    urus.y= urus.y+1;
  }
  if(mega.visible===true){
    mega.y= mega.y+1;
  }
  if(defender.visible===true){
    defender.y= defender.y+1;
  }
}
if(keyDown ("left_arrow")){
  if(raptor.visible===true){
  raptor.x= raptor.x-1;
  }
  if(Xmax.visible===true){
    Xmax.x=Xmax.x-1;
  }
  if(AMG.visible===true){
    AMG.x=AMG.x-1;
  }
  if(urus.visible===true){
    urus.x= urus.x-1;
  }
  if(mega.visible===true){
    mega.x= mega.x-1;
  }
  if(defender.visible===true){
    defender.x = defender.x-1;
  }
}
if(keyDown ("right_arrow")){
  if(raptor.visible===true){
  raptor.x= raptor.x+1;
  }
  if(Xmax.visible===true){
    Xmax.x= Xmax.x+1;
  }
  if(AMG.visible===true){
    AMG.x=AMG.x+1;
  }
  if(urus.visible===true){
    urus.x= urus.x+1;
  }
  if(mega.visible===true){
    mega.x= mega.x+1;
  }
  if(defender.visible===true){
    defender.x= defender.x+1;
  }
}
  if(mousePressedOver(raptor)){
    raptor.visible = true;
    raptor.scale= 0.5;
Xmax.visible = false;
AMG.visible = false;
urus.visible = false;
mega.visible = false;
defender.visible = false;
obstacle.visible =  true;
obstacle.visible =  true;
    obstacle.scale= 0.5;

    raptor.y= 600;
    raptor.x = 1400;
     
    obstacle.velocityX= random(1,10);
    //obstacle.velocityY= random(-1,-10);
    if(obstacle.x>1600||obstacle.x<0){
obstacle.x=0
console.log(obxtacle.x);
obstacle.velocityX= random(1,10);
    }

     }
  if(mousePressedOver(Xmax)){
    raptor.visible = false;
    Xmax.visible = true;
    Xmax.scale= 0.5;
    AMG.visible = false;
    urus.visible = false;
    mega.visible = false;
    defender.visible = false;
        obstacle.visible =  true;
    obstacle.scale= 0.5;

    Xmax.y = 600;
    Xmax.x = 1400;
     
      
     }

    
 
  if(mousePressedOver(AMG)){
    raptor.visible = false;
Xmax.visible = false;
AMG.visible = true;
AMG.scale= 0.5;
urus.visible = false;
mega.visible = false;
defender.visible = false;
obstacle.visible =  true;
obstacle.scale= 0.5;

AMG.y = 600;
     AMG.x = 1400;       
  }
  if(mousePressedOver(urus)){
    raptor.visible = false;
Xmax.visible = false;
AMG.visible = false;
urus.visible = true;
urus.scale= 0.5;
mega.visible = false;
defender.visible = false;

obstacle.visible =  true;
obstacle.scale= 0.5;

urus.y= 600;
    urus.x = 1400;
  }
  if(mousePressedOver(mega)){
    raptor.visible = false;
    Xmax.visible = false;
    AMG.visible = false;
    urus.visible = false;
    mega.visible = true;
    mega.scale= 0.5;
    defender.visible = false;
        obstacle.visible =  true;
    obstacle.scale= 0.5;
  }

  if(mousePressedOver(defender)){

    raptor.visible = false;
Xmax.visible = false;
AMG.visible = false;
urus.visible = false;
mega.visible = false;
defender.visible = true;
defender.scale= 0.5;
obstacle.visible =  true;
obstacle.scale= 0.5;
}
  drawSprites();
  if(raptor.visible===true){

    if(obstacle.isTouching(raptor)){
      gameState = "end"
    }
    } 
    if(AMG.visible===true){

      if(obstacle.isTouching(AMG)){
        gameState = "end"
      }
      } 
      if(urus.visible===true){

        if(obstacle.isTouching(urus)){
          gameState = "end"
        }
        } 
        if(mega.visible===true){

          if(obstacle.isTouching(mega)){
            gameState = "end"
          }
          } 
          if(defender.visible===true){

            if(obstacle.isTouching(defender)){
              gameState = "end"
            }
            } 
            if(Xmax.visible===true){

              if(obstacle.isTouching(Xmax)){
                gameState = "end"
              }
              } 

  } 

if(gameState ==="serve"){
  fill ("red");
  textSize(30); 
  text ("Press space to start the game",800,400)
  
}
if(gameState === "end"){

fill ("red");
textSize(30); 
   
    text ("game Over",800,400)
  }
}

