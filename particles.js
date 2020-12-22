class particle{
	constructor(x,y,radius)
	{
		var options={
            restitution:0.4,
            isStatic: false
		}
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.body=Bodies.circle(this.x, this.y, this.radius/2, options);
        this.color =  color (random(0,255), random(0,255), random(0,255)); 
        World.add(world, this.body);

	}
	display(){
			
	    var particlepos=this.body.position;		
        var angle = this.body.angle;

		push();
		translate(particlepos.x, particlepos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(CENTER);
		ellipse(0,0,this.radius, this.radius);
		pop();
			
	}

}