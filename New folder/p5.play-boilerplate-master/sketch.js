var fixedRect, movingRect


function setup() {
  createCanvas(800,400);
  fixedRect =  createSprite(200, 200, 50, 50);
  movingRect = createSprite(600,200, 80,30);

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  fixedRect.debug = true;
  movingRect.debug = true;

  fixedRect.velocityX=3;
  movingRect.velocityX=-3;

}

function draw() {

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x  <  movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2  && 
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ) {
      fixedRect.shapeColor = "yellow";
      movingRect.shapeColor = "yellow";

      fixedRect.velocityX *= (-1);
      movingRect.velocityX *= (-1);

      fixedRect.velocityY *= (-1);
      movingRect.velocityY *= (-1);
      
    
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";

  }


  background(0);  
  drawSprites();
}