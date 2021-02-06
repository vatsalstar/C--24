class Paper{
constructor(x,y){
    var options ={
        isSstatic:true,
        restitution:0.3,
        friction:0.05,
        density:1.2
    }

    this.body=Bodies.circle(x,y,20,options);

    World.add(world, this.body);

}

display(){
    fill("pink");
    ellipseMode(CENTER);
    ellipse(this.body.position.x,this.body.position.y,20,20);
}
}