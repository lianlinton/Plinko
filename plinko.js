class plinko
{
	constructor(x,y)
	{
		var options={
			isStatic:true
		}
		this.x=x;
		this.y=y;
		this.radius=20;
		this.body=Bodies.circle(this.x, this.y, this.radius/2, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var plinkopos=this.body.position;		

			push();
			translate(plinkopos.x, plinkopos.y);
			rectMode(CENTER);
			fill("white");
			ellipse(0,0,this.radius, this.radius);
			pop();
			
	}

}