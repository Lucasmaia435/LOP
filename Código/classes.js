class Fish{
	constructor(fishx,fishy){
		this.x = fishx;
		this.y = fishy;
		this.speed = random(1,2);
	}
	move() {
		this.x += this.speed		
		if(this.x > 600){
			this.x = 0
			this.y = random(480,80)
		}
	}
	show(){
		fill("orange")
		rect(this.x,this.y,30,30)
	}
}
