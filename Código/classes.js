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
		for(i = 1;i < 4; i ++){
		image(FrameP[i],this.x,this.y);
		if(i > 3){
			i = 3
		}
	}
}
}
