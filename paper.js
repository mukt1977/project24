class paper{
constructor(){
    var options={
        'isStatic':false,
        'restitution':0.3,
        'friction': 0.5,
        'density': 1.2
    }
    this.body=Bodies.circle(100,660,30,options);
    this.r=30;

    World.add(world,this.body);
   }
   display(){
    push();
    
 fill("red");
   translate(this.body.position.x,this.body.position.y);
   rectMode(CENTER);
   ellipse(0,0,this.r,this.r);
   pop();
 }
}