var a,b,x,y,r,t,life,s,i,colors;
a = -25, x = 300, y = 300 ,health = 3, s = 3.25, pont = 0, pointed = 0, color = [];
function preload(){
	sound = loadSound("Sounds/sound1.mp3")
	thebest = loadSound("Sounds/thebest.ogg")
}

function setup(){
	canvas = createCanvas(600,600);
	r = random(0,580) , t = 58 ,b = random(480,80);
	color = ['black', 'orange','yellow', 'pink']
		for(i = 0; i <= 3; i++){
			fill(color[i])
			rect(a,b,25,25)
		}
	sound.setVolume(0.1);
	sound.play();
}
function draw() {
    background('#A896FF');
	fill('blue');
	rect(x,y,50,50);
	fill('white');
	rect(r,t,10,10);
	fill('brown');
	rect(0,560,600,40);
	noStroke();
	if(health > 0){
		if(keyIsDown(RIGHT_ARROW)){ //Movimento para a direita de 5px
			x += s
		}
		if(keyIsDown(LEFT_ARROW)){ //Movimento para a esquerda de 5px
			x -= s
		}
		if(keyIsDown(UP_ARROW)){ //Movimento para cima de 5px
			y -= s
		}
		if(keyIsDown(DOWN_ARROW)){ //Movimento para baixo de 5px
			y += s
		}
		t++ // Queda do poluente
		a++ // Movimento do peixe
		if(a > 600){
			a = 0
			b = random(480,80)
		}
	}
	if(x <= -5){
		x += s
	}
	if(x >= 555){
		x -= s
	}
	if(y >= 515){
		y -= s 
	}
	if(y <= 60){
		y += s
	}
	if(t == 570){
		r = random(0,580)
		t = -10
		health--
	}
	if(keyIsDown(80)){
		pause*= -1
	}
	PcF = collideRectRect(a,b,25,25,x,y,50,50)//Verificação de colisão entre o personagem e o peixe
	if (PcF == true){
		health--
		console.log("hit")
		r = random(0,580)
		t = 0
		x = random(x-50,x+50)
		y += 55
	}
	PcP = collideRectRect(x,y,50,50,r,t,10,10)//Verificando a colisão entre o personagem e os poluentes
	if(PcP == true){
		pont += 10
		pointed++
		console.log("Pointed")
		r = random(0,580)
		t = -10
	}
	FcP = collideRectRect(a,b,25,25,r,t,10,10)//Verificando a colisão entre o peixe e os poluentes
	if(FcP == true){	
		health--
		r = random(0,580)
		t = -10
	}
	if(pointed == 15 ){ //Dando pontos de saúde marinha a cada 100 pontos
		health ++
		pointed = 0
	}
	/*if(pont%500 == 0){
		life++
	}*/
	fill('black');
	textSize(16);
	textAlign(RIGHT);
	text("Points: " + pont, 500, 20);
	fill('black')
	textSize(16);
	textAlign(RIGHT);
	text("Ocean health: " + health, 140, 20); // Contador de vida
	if(health <= 0){ //Game over
		textSize(30);
		textAlign(CENTER);
		text(' PRESS SPACEBAR \n TO \nPLAY AGAIN', 300, 300); 
		if(keyIsDown(32)){
			health = 3
			pont = 0 
			r = random(140,1130)
			t = random(40,440)//Play Again
			}
	}
	if(keyIsDown(67)){
		if(keyIsDown(82)){
			if(keyIsDown(65)){
				if(keyIsDown(78)){
					textSize(40);
					textAlign(CENTER);
					text('THIS IS CRÃN', 625, 200);
				}
			}
		}
	}// First Easter Egg

	if(keyIsDown(RIGHT_ARROW)){
		thebest.setVolume(0.1);
		thebest.play();
	}
}