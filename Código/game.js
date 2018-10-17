var a,b,x,y,r,t,life,s;
a = 400, b = 300, x = 300, y = 300 , life = 3, s = 5, pont = 0
function setup(){
	canvas = createCanvas(1280,480);
	r = random(130,1160) , t = random(20,460);	
}
function draw() {
    background('gray');
	fill('red');
	rect(a,b,50,50);
	fill('blue');
	rect(x,y,50,50);
	fill('white');
	rect(r,t,10,10);
	fill('brown');
	rect(0,0,120,480);
	fill('brown');
	rect(1160,0,120,480);
	fill('brown');
	rect(0,0,1280,20);
	fill('brown');
	rect(0,460,1280,20);
	noStroke();
	if(life > 0){
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
		}//Movimentação
	}
	if(x <= 120){
		x += s
	}
	if(x + 50>= 1160){
		x -= s
	}
	if(y + 50 >= 460){
		y -= s 
	}
	if(y <= 20){
		y += s
	}
	hit = collideRectRect(a,b,50,50,x,y,50,50)//Verificação de colisão entre o personagem e o objeto
	if (hit == true){
		life--
		console.log("hit")
		x = 300  
		y = 300
		r = random(140,1130)
		t = random(40,440)
	}
	hit2 = collideRectRect(x,y,50,50,r,t,10,10)//Verificando a colisão entre o personagem e os pontos
	if(hit2 == true){
		pont += 25
		s += 1.25
		console.log("Pointed")
		console.log(s)
		r = random(140,1130)
		t = random(40,440)
	}
	/*if(pont%500 == 0){
		life++
	}*/
	fill('black');
	textSize(16);
	textAlign(RIGHT);
	text("Points: " + pont, 1220, 175);
	fill('black')
	textSize(16);
	textAlign(RIGHT);
	text("life: " + life, 1220, 150); // Contador de vida
	if(life == 0){ //Game over
		textSize(40);
		textAlign(CENTER);
		text('PRESS SPACEBAR TO PLAY AGAIN', 625, 200); 
		if(keyIsDown(32)){
			life = 3
			s = 5
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
}