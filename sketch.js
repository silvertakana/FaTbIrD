const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box = [], pig= [],log = [],bg,floors = 5,bird,joint = [],deathStringLenght;
function preload(){
    bg = loadImage("sprites/ground.png");
}
function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    
    for (var index = 0; index < floors*2; index+=2) {
        box[index] = new Box(700,((index/2+1)*(-70)+height),50,50)
        box[index+1] = new Box(920,((index/2+1)*(-70)+height),50,50)
        log[index] =  new Log(810,((index/2+1)*(-70)+height-50),300,PI/2)
        pig[index] = new Pig(810,((index/2+1)*(-70)+height))
    }
    //box[index+1] = new Box(0,0,50,50)
    
    bird = new Bird(50,50);
    joint = new Joint(bird.body,{x:250,y:height-180},.1,.05);
    ground = new Ground(width/2,height,width,20)
    /*push()
    tint(255,130)
    image(bg,0,0,width,height)
    pop()*/
}

function draw(){
    background(220, 99.9)
    
    Engine.update(engine);
    
    
    ground.display();
    for (var index = 0; index < floors*2; index+=2) {
        box[index].display()
        box[index+1].display()
        log[index].display()
        pig[index].display()
    }
    
    if(mouseIsPressed){
        //Matter.Body.setVelocity(bird.body,{x:0,y:0});
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
       joint.join(bird.body);
        //bird.body.position.x = mouseX;
    //bird.body.position.y = mouseY;
    }
    
    joint.display();
    //box[index+1].display()
    
    
}
function mouseReleased(){
    joint.break();
}
function mouseDragged(){
    //Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    //bird.body.position.x = mouseX;
    //bird.body.position.y = mouseY;
}