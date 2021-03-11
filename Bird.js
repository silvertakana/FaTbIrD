class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke_img = loadImage("sprites/smoke.png");
    this.smoke_pos = []
  }
  display(){
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    for(var i = 0;i<this.smoke_pos.length;i += 1)
    {
      push()
      imageMode(CENTER);
      image(this.smoke_img,this.smoke_pos[i][0],this.smoke_pos[i][1]);
      pop()
    }

    super.display();
    
  }
  addPos(){
    var body = this.body.position;
    var pos = [body.x,body.y];
    this.smoke_pos.push(pos);
  }
  clearSmoke(){
    this.smoke_pos = [];
  }
}