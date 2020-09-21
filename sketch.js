
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

var paper1;
var dustbin1,dustbin2,dustbin3;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	ground = Bodies.rectangle(800, 670, 1600,20, {isStatic:true} );
	World.add(world, ground);
	//Create the Bodies Here.
    paper1=new paper();
	dustbin1=new dustbin(600,300,200,10);
	dustbin2=new dustbin(500,370,10,60);
	dustbin3=new dustbin(700,370,10,60);
	console.log(dustbin1.body);
	
	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	})
	Engine.run(engine);
}


function draw() {
  
  background(0);
 // Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1600,20);
 paper1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();

}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}



