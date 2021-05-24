class Bob {
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution: 1.2,
            friction: 0.4,
            density: 3,
        }
        this.body = Bodies.circle(x, y, r/2, options);
        World.add(world, this.body);
        this.r = r
        console.log(this.body);

    }

    display(){
        push();
        ellipseMode(RADIUS);
        fill("red");
        ellipse(this.body.position.x, this.body.position.y, this.r , this.r);
        pop();
    }
}