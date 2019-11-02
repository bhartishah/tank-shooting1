class Tank{
  constructor(x,y,width,height) {

  
    var options={
      restitution:0.8,
      friction:0.3,
      density :1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
 this.width=width;
 this.height=height;
    World.add(world,this.body);
    
}
display(){
    var pos=this.body.position;
    var angle =this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);

    rect(0,0,this.width,this.height);
    pop();
   
  rect(60,height-40,100,20);
  arc(80,height-40,90,100,PI,TWO_PI);
  rect(60,height-20,100,20);
  

}
}