class chain{
    constructor(bodyA, bodyB){
        var options ={
            stiffness: 0.01,
            length: 10,
            bodyA : bodyA,
            bodyB: bodyB,

      
       }
       this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        strokeWeight(6);
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}

