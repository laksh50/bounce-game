var ball1,ball2;


function setup () {
var canvas = createCanvas (1200,800);
ball1 = createSprite(200,300,40,70);
ball2 = createSprite(200,600,20,50);
ball1.velocityY = 7;
ball2.velocityY = -7;
}



function draw () {
background(0);   
if(ball1.y - ball2.y < ball1.height/2 + ball2.height/2 &&
  ball2.y - ball1.y <ball2.height/2 + ball1.height/2 ){
  ball1.velocityY = ball1.velocityY * (-1);
  ball2.velocityY = ball2.velocityY * (-1);
   
  }
   
drawSprites() ;
}