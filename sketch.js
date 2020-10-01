const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Engine = Matter.Engine;

var particles = [];
var plinkos = [];
var divisions = [];


var score = 0;

var count = 0;

var turn = 0;

var divisionHeight = 300;


var gameState = 0;

var engine, world;

function setup() {
  createCanvas(480,800);
  
  text("SCORE : "+score, 240, 400);

  engine = Engine.create();
  world = engine.world;
  
  for(var k = 0; k<=width; k = k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10 , divisionHeight));
  }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }

  ground1 = new Ground(240, 800, 480, 50);
}
  

function draw() {
  background("black");  

  Engine.update(engine);

  
  
  /*if(particles!=null){
    particles.display();
  }*/
   /*if(particle.body.position.y>760){
    if(particle.body.position.x<300){
      score = score+500;
      particle = null;
      if(count>=5){
        //gameState = end;
      }
    }
   }*/
  
  
for(var k = 0; k<divisions.length;k++){
  divisions[k].display();
}

for(var j = 0; j<plinkos.length; j++){
  plinkos[j].display();
}

for(var l = 0; l<particles.length; l++){
  particles[l].display();
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
}

ground1.display();
 
}




/*function mousePressed(){
  if(gameState!==end){
    count++
    particle = new Particle(mouseX, 10, 10, 10);
  }
}*/

