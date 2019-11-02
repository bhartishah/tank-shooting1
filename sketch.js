const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground; 
var tank;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  // tank= new Tank( 75,height-90,100,20);
    ground=new Ground (600,height,1200,20);
    //this.image = loadImage("military-tank-hi.png");
    //this. image = box (200,100,100,100);
}  


function draw(){
    background("blue");
    
    Matter.Engine.update(engine);
   // tank.display();
    ground.display();
     


}