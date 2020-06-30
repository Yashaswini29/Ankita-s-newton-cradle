
var ground,bob3,bob2,bob1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(200,50);
	bob3 = new Bob(300,100);
    bob2 = new Bob(250,100);
	bob1 = new Bob(150,100);
	bob4 = new Bob(90,100);
	bob5 = new Bob(10,100);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	rope1 = new Rope(bob1.body,ground.body,0,0);
	rope2 = new Rope(bob2.body,ground.body,40,0);
	rope3 = new Rope(bob3.body,ground.body,80,0);
	rope5 = new Rope(bob5.body,ground.body,-80,0);
	rope4 = new Rope(bob4.body,ground.body,-40,0);
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob3.display();
  bob2.display();
  bob1.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
 
}



