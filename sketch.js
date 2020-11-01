
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ball1, ball2, ball3, ball4, ball5;
var string1, string2, string3, string4, string5;
var platform1;

function preload()
{
	
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball1 = new Ball(400, 250, 35);

	ball2 = new Ball(350, 250, 35);

	ball3 = new Ball(300, 250, 35);

	ball4 = new Ball(450, 250, 35);

	ball5 = new Ball(500, 250, 35);

	

	platform1 = new Wood(300, 125, 300, 200);

	

	string1 = new Chain(ball1.body, {x: 300, y: 200});

	string2 = new Chain(ball2.body, {x: 250, y: 200});
	string3 = new Chain(ball3.body, {x: 200, y: 200});
	string4 = new Chain(ball4.body, {x: 350, y: 200});
	string5 = new Chain(ball5.body, {x: 400, y: 200});
	
	
	
	
	/*ball1.body, platform1.body, ball1.body.width/2, 0);*/
	/*string2 = new Chain({x: 200, y:200}, ball2.body);
	string3 = new Chain({x: 200, y:200}, ball3.body);
	string4 = new Chain({x: 200, y:200}, ball4.body);
	string5 = new Chain({x: 200, y:200}, ball5.body);
*/

	Engine.run(engine);
  
}


function draw() {
	
	Engine.update(engine);
  	rectMode(CENTER);
  	background(255);

  

  	platform1.display();

  	string1.display();
  	string2.display();
  	string3.display();
  	string4.display();
  	string5.display();

  	ball1.display();
  	ball2.display();
  	ball3.display();
  	ball4.display();
  	ball5.display();

  

	ball3.up();


  
  
  drawSprites();

  //console.log(mouseX + "," +mouseY);
 
}


