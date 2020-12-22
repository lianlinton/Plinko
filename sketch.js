const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundObject
var rightside,leftside,upside, downside;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);

  rightside = new ground(480, 400, 10,800);
  leftside = new ground(0, 400, 10,800);
  upside = new ground(240, 0, 480,10);
  downside = new ground(240, 800, 480,10);
  groundObject = new ground(240, 790, 480, 20);

  for (var k = 80; k <= 400; k = k +80){
    divisions.push(new division (k, height-divisionHeight/2-8, 10, divisionHeight));
  }

  for (var a = 40; a <= 480; a = a+50){
    plinkos.push(new plinko(a, 75));
  }
  for (var b = 20; b <= 460; b = b+50){
    plinkos.push(new plinko(b, 175));
  }
  for (var c = 40; c <= 480; c = c+50){
    plinkos.push(new plinko(c, 275));
  }
  for (var d = 20; d <= 460; d = d+50){
    plinkos.push(new plinko(d, 375));
  }
}

function draw() {
  background("black");
  noStroke();

  if (frameCount%90===0){
    particles.push(new particle(random(width/2-10, width/2+10), 10,  20));
    console.log(particles);
  }

  fill("white");
  groundObject.display();

  fill("brown");
  rightside.display();
  leftside.display();
  upside.display();
  downside.display();

  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  
}