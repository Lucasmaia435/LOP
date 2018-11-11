var CharPx = 300 // Posição inicial do Jogador
var CharPy = 300 // Posição inicial do Jogador 
var ObjPx = 0 // Posição inicial do Objeto no eixo X
var ObjPy = 58 // Posição inicial do Objeto no eixo Y
var health = 3 // Contador de vida inicial
var CharS = 3.25 // Velocidade do Jogador
var pont = 0 // Pontuação inicial	
var pointed = 0 // Contador para aumento de pontos de saúde 
var fishs = [] // Vetor que recebe os peixes
var peixes = 4 // Quantidade de peixes
function setup(){
	canvas = createCanvas(600,600);
	canvas.position(300,0);
	ObjPx = random(0,580);  
	ObjPy = 58; 
	for(i=0;i<peixes;i++){
		fishs[i] = new Fish(-30, random(120,80));
	}
	frameRate(60);
}
function draw() {
    background('#A896FF');
	fill('blue');
	rect(CharPx,CharPy,50,50);
	fill('white');
	rect(ObjPx,ObjPy,10,10);
	fill('#C1B47C');
	rect(0,560,600,40);
	//noStroke();
	if(health > 0){
		if(keyIsDown(RIGHT_ARROW)){ //Movimento para a direita de 5px
			CharPx += CharS
		}
		if(keyIsDown(LEFT_ARROW)){ //Movimento para a esquerda de 5px
			CharPx -= CharS
		}
		if(keyIsDown(UP_ARROW)){ //Movimento para cima de 5px
			CharPy -= CharS
		}
		if(keyIsDown(DOWN_ARROW)){ //Movimento para baixo de 5px
			CharPy += CharS
		}
		peixe();
		ObjPy++ // Queda do poluente
		//fishs.x++ // Movimento do peixe
	}
	if(CharPx <= -5){
		CharPx += CharS
	}
	if(CharPx >= 555){
		CharPx -= CharS
	}
	if(CharPy >= 515){
		CharPy -= CharS 
	}
	if(CharPy <= 60){
		CharPy += CharS
	}
	if(ObjPy == 570){
		ObjPx = random(0,580)
		ObjPy = -10
		health--
	}
	
	for(i=0;i<peixes;i++){
		CcF = collideRectRect(fishs[i].x,fishs[i].y,25,25,CharPx,CharPy,50,50)//Verificação de colisão entre o personagem e o peixe
			if (CcF == true){
				health--
				console.log("hit")
				ObjPx = random(0,580)
				ObjPy = -10
				CharPx = random(CharPx-50,CharPx+50)
				CharPy += 55
			}
		FcP = collideRectRect(fishs[i].x,fishs[i].y,25,25,ObjPx,ObjPy,10,10)//Verificando a colisão entre o peixe e os poluentes
			if(FcP == true){	
				health--
				ObjPx = random(0,580)
				ObjPy = -10
				//alert("Você sabia que daqui a 50 anos hávera mais poluentes do que peixes no mar?") *introdução de fato*
			}
	}
	CcP = collideRectRect(CharPx,CharPy,50,50,ObjPx,ObjPy,10,10)//Verificando a colisão entre o personagem e os poluentes
	if(CcP == true){
		pont += 10
		pointed++
		console.log("Pointed")
		ObjPx = random(0,580)
		ObjPy = -10

	}
	if(pointed == 15 ){ //Dando pontos de saúde marinha a cada 150 pontos
		health ++
		pointed = 0
	}
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
		CharPy = -300
		CharPx = -300 
		if(keyIsDown(32)){
			health = 3
			pont = 0 
			ObjPx = random(0,580)
			ObjPy = -10//Play Again
			CharPx = 300
			CharPy = 300
			}
	}
}
function peixe(){
	for(i=0;i<peixes;i++){
		fishs[i].move();
		fishs[i].show();
	}
}	
