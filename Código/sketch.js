var char,obj,chip,x3,y3,hit;
x1 = 200, y1 = 80, x = 50, y = 200,x2 = 400,y2 = 150, hit = false
function preload(){
	char = loadImage("imgs/char.png")
	obj = loadImage("imgs/obst.png")
	chip = loadImage("imgs/chip.png")
	win = loadImage("imgs/win.jpg")
	chicken = loadImage("imgs/chicken.png")
}
function setup(){
	canvas = createCanvas(1280,480);
//	collideDebug(true); //enable
}
function draw(){
	background(win);
	chickenn = image(chicken,x2,y2);
	chipp = image(chip,x2,y2,chip.width,chip.height); //vilão
	objp = image(obj,x1,y1,obj.width,obj.height); //pedra(objeto)
	charp = image(char,x,y,char.width,char.height); //personagem
	x2=x2+2;
	if(keyIsDown(LEFT_ARROW)){
		x-=5;
	} 
	if(keyIsDown(RIGHT_ARROW)){
		x+=5;
	} 
	if(keyIsDown(UP_ARROW)){
		y-=5;
	}
	if(keyIsDown(DOWN_ARROW)){
		y+=5;
	}	
	if(x>1280){
		x = 0;
	}else if(x<0){
		x = 1280
	}
	if(y>480){
		y = 0;
	}else if(y<0){
		y = 480;
	}
	if(x2>1280){
		x2 = 0;
	}
	hit = collideRectRect(x,y,char.width,char.height,x2,y2,chip.width,chip.height); // colisão rolando normalmente <3 / FAZER UMA FUNÇÃO PARA COLISÃO X-LATERAL
	if (hit == true){		
		console.log("collide ")
		if(x + char.width >= x2){
			x += 7;
		}else if(x <= x2 + chip.width){
			x -= 7;
		}else if(y + char.height >= y2){
			y -= 7;
		}else if( y <= y2 + chip.height)
			y += 7;
	}
	//console.log(x + " " + y)
}