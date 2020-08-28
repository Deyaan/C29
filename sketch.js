const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  Ground1 = new ground(600,20,500,20);
}

function draw() {
  background(255,255,255);  
  Ground1.display();
  drawSprites();
}