var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage,
blue_balloonImage, yellow_balloonImage, backgroundImage;
var select_balloon=1
var score=0;
var cooldown, cooldownBar
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  yellow_balloonImage = loadImage("yellow_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crear arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0;

   //Enfriamiento para el disparo de la flecha
   cooldown=createSprite(200,200,1,400);
   cooldown.visible=false;
   cooldownBar=createSprite(300,200,1,400);
   cooldownBar.visible=false;
}

function draw() { 
  background(0);
   //Puntuación
   text("Score" + score, 200,200);
   textSize(20);
  // mover el suelo
    scene.velocityX = -3;

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover arco
  bow.y = World.mouseY
  
   //liberar las flechas al presionar la barra espaciadora 
  if (keyDown("space")&& cooldownBar.collide(cooldown)) {
    createArrow();
    cooldownBar.x= 300; 
  }
   
  //Enfriamiento para el disparo de la flecha
  cooldownBar.velocityX= -3
  cooldownBar.bounceOff(cooldown);

  //selector de globos
   select_balloon = Math.round(random(1,5));
  
   if (World.frameCount % 100 == 0) {

    //generador aleatorio de los globos

          switch(select_balloon ){
           case 1: redBalloon();
           break;
           case 2:blueBalloon();
           break;
           case 3:pinkBalloon();
           break;
           case 4:greenBalloon();
           break;
           case 5:yellowBalloon();
           break;
           default:break;
  }
}
    
  drawSprites();
}


//Crear flechas para el arco
 function createArrow() {
  var arrow= createSprite(bow.x, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = random(1,5);
  red.lifetime = 300;
  red.scale = 0.1;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = random(1,5);
  blue.lifetime = 300;
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = random(1,5);
  green.lifetime = 300;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = random(1,5);
  pink.lifetime = 300;
  pink.scale = 1;
}
function yellowBalloon() {
  var yellow = createSprite(0,Math.round(random(20, 370)), 10, 10);
  yellow.addImage(yellow_balloonImage);
  yellow.velocityX = random(1,5);
  yellow.lifetime = 300;
  yellow.scale = 1;
}
