const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
 
var engine,world;

var boxes = [];
var gSlider;
var ground;
 
function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;

    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    //gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
   ground = new Ground(200,350,400,15);
}
 
function draw() {
    background(0);

    Engine.update(engine);
    var fVal = gSlider.value();
    fill(255);
    textSize(15);
    text("Gravity " + fVal,200,380);

    ground.display();
    
    for(var a = 0; a < boxes.length; a++){
        boxes[a].display();
    }
}
function mousePressed() {
    if (mouseY<350) {
        boxes.push(new Box(mouseX,mouseY,random(10,60),random(10,60)));
    }
}