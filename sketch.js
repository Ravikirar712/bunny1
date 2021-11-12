var bunny;
var target;
var brick1;
var brick2;
var brick3;
var brick4;
var brick5;
var brick6;
var brick7;
var brick8;
var brick9;
function preload()
{

}

function setup() {
createCanvas(600,600);
edges = createEdgeSprites();
bunny = createSprite(50,550,15,15);
target = createSprite(550,50,30,30);
brick1 = createSprite(70,235,120,20);
brick2 = createSprite(220,235,120,20);
brick3 = createSprite(370,235,120,20);
brick4 = createSprite(520,235,120,20);
brick5 = createSprite(50,300,90,20);
brick6 = createSprite(180,300,90,20);
brick7 = createSprite(310,300,90,20);
brick8 = createSprite(440,300,90,20);
brick9 = createSprite(570,300,90,20);

//bunny.velocityX = 5;   //right
//bunny.velocityY = -5;  //top
//brick1.velocityX = 10;   // Right
//brick2.velocityX = 10;
//brick3.velocityX = 10;
//brick4.velocityX = 10;
//brick5.velocityX = -10;  // Top
//brick6.velocityX = -10; 
//brick7.velocityX = -10; 
//brick8.velocityX = -10; 
//brick9.velocityX = -10; 
bunny.shapeColor="yellow";
target.shapeColor="blue";
brick1.shapeColor="red";
brick2.shapeColor="red";
brick3.shapeColor="red";
brick4.shapeColor="red";
brick5.shapeColor="red";
brick6.shapeColor="red";
brick7.shapeColor="red";
brick8.shapeColor="red";
brick9.shapeColor="red";
}

function draw() {
background("black")

bunny.bounceOff(edges[0]);
bunny.bounceOff(edges[1]);
bunny.bounceOff(edges[2]);
bunny.bounceOff(edges[3]);
brick1.bounceOff(edges[0]);
brick1.bounceOff(edges[1]);
brick2.bounceOff(edges[0]);
brick2.bounceOff(edges[1]);
brick3.bounceOff(edges[0]);
brick3.bounceOff(edges[1]);
brick4.bounceOff(edges[0]);
brick4.bounceOff(edges[1]);
brick5.bounceOff(edges[0]);
brick5.bounceOff(edges[1]);
brick6.bounceOff(edges[0]);
brick6.bounceOff(edges[1]);
brick7.bounceOff(edges[0]);
brick7.bounceOff(edges[1]);
brick8.bounceOff(edges[0]);
brick8.bounceOff(edges[1]);
brick9.bounceOff(edges[0]);
brick9.bounceOff(edges[1]);

if(keyDown("left"))
{
  bunny.x = bunny.x-10;
}
if(keyDown("right"))
{
  bunny.x = bunny.x+4;
}
if(keyDown("up"))
{
  bunny.y = bunny.y-4;
}
if(keyDown("down"))
{
  bunny.y = bunny.y+4;
}

if(bunny.isTouching(target))
{
   textSize(20); 
  text("You win", 250,50);
  text ("GAME OVER",250,500);
  bunny.velocityX=0;
  brick1.velocityX=0;
  brick2.velocityX=0;
  brick3.velocityX=0;
  brick4.velocityX=0;
  brick5.velocityX=0;
  brick6.velocityX=0;
  brick7.velocityX=0;
  brick8.velocityX=0;
  brick9.velocityX=0;
}
if(bunny.isTouching(brick1))
{
  textSize(20); 
  text("You lose", 250,500);
  text("GAME OVER", 250,50);
  brick1.velocityX=0;
}
  if(bunny.isTouching(brick2))
{textSize(20); 
  text("You lose", 250,500);
  text("GAME OVER", 250,50);
  brick2.velocityX=0;
}
  if(bunny.isTouching(brick3))
{
  textSize(20); 
  text("You lose", 250,500);
  text("GAME OVER", 250,50);
  brick3.velocityX=0;
}
  if(bunny.isTouching(brick4))
{
  textSize(20); 
  text("You lose", 250,500);
  text("GAME OVER", 250,50);
  brick4.velocityX=0;
}
 if(bunny.isTouching(brick5))
{
  textSize(20); 
  text("You lose", 250,500);
  text("GAME OVER", 250,50);
  brick5.velocityX=0;
}
if(bunny.isTouching(brick6))
{
  textSize(20); 
  text("You lose", 250,500);
  text("GAME OVER", 250,50);
  brick6.velocityX=0;
}
if(bunny.isTouching(brick7))
{
  textSize(20); 
  text("You lose", 250,500);
  text("GAME OVER", 250,50);
  brick7.velocityX=0;
}
if(bunny.isTouching(brick8))
{
  textSize(20); 
  text("You lose", 250,500);
  text("GAME OVER", 250,50);
  brick8.velocityX=0;
}
if(bunny.isTouching(brick9))
{
  textSize(20); 
  text("You lose", 250,500);
  text("GAME OVER", 250,50);
  brick9.velocityX=0;
}


drawSprites();

}