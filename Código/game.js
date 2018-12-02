var CharPx = 300 // Posição inicial do Jogador
var CharPy = 300 // Posição inicial do Jogador
var ObjPx = 0 // Posição inicial do Objeto no eixo X
var ObjPy = 58 // Posição inicial do Objeto no eixo Y
var Health = 5 // Contador de vida inicial
var CharS = 6 // Velocidade do Jogador
var Pont = 0 // Pontuação inicial
var Pointed = 0 // Contador para aumento de pontos de saúde
var Fishs = [] // Vetor que recebe os Peixes
let Peixes = 4 // Quantidade de Peixes
var MaxP = 12 // Quantidade máxima de Peixes
var Tela = 0 // Váriavel que guarda as telas
var FrameP = [] // Frames dos Peixes
var SpritePerD = [] // Frames do personagem
var FrameLixo = [] //Frames do lixo
andD = false; // Movimentação do personagem
var animaçãoP = 0//
var contFrame = 0 //
function preload(){
	for(i = 1 ; i < 4 ; i++){
		FrameP[i] = loadImage('Frames/P1/FrameP'+i+'.png');
	}
	for(i = 0 ; i < 4; i++){
		SpritePerD[i] = loadImage('Frames/SpritePersonagem/direita/bill'+i+'.png')
	}
	for(i = 0; i < 3; i++){
		FrameLixo[i] = loadImage('Frames/lixo/lixo'+i+'.png')
	}
	mapa = loadImage('Frames/SpriteMapa/mapa.jpg');
}
function setup(){
	canvas = createCanvas(600,600);
	canvas.position(300,0);
	ObjPx = random(0,580);
	ObjPy = 58;
	for(i=0;i<MaxP;i++){
		Fishs[i] = new Fish(-30, random(480,80));
	}
	frameRate(30);
}
function draw() {
  background(mapa);
	if(Tela == 0 ){
		textSize(30);
		textAlign(CENTER);
		text(' Welcome \n TO \n Submarine EcoMission \n \n Press SPACEBAR to Play', 300, 300);
		if(keyIsDown(32)){
			Tela = 1
	}
}
	if(Tela == 1){
		image(FrameLixo[1],ObjPx,ObjPy);
		function peixe(){
			for(i=0;i<Peixes;i++){
				Fishs[i].move();
				Fishs[i].show();
			}
		}
	if(Health > 0){
		if(keyIsDown(RIGHT_ARROW)){ //Movimento para a direita de 5px
			CharPx += CharS
			andD = true
		}
		if(keyIsDown(LEFT_ARROW)){ //Movimento para a esquerda de 5px
			CharPx -= CharS
			andE = true
		}
		if(keyIsDown(UP_ARROW)){ //Movimento para cima de 5px
			CharPy -= CharS
			andD = true
		}
		if(keyIsDown(DOWN_ARROW)){ //Movimento para baixo de 5px
			CharPy += CharS
			andE= true
		}
		peixe(); // Aparição e movimentação dos Peixes
		ObjPy++ // Queda do poluente
		if(andD == true ){
			anima = SpritePerD[contFrame];
			image(anima,CharPx,CharPy,40,40)
			contFrame++
			if(contFrame > 3){
				contFrame = 0;
			}
		}

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
		Health--
	}

	for(i=0;i<Peixes;i++){
		CcF = collideRectRect(Fishs[i].x,Fishs[i].y,25,25,CharPx,CharPy,50,50)//Verificação de colisão entre o personagem e o peixe
			if (CcF == true){
				Health--
				console.log("hit")
				ObjPx = random(0,580)
				ObjPy = -10
				CharPx = random(CharPx-50,CharPx+50)
				CharPy += 55
			}
		FcP = collideRectRect(Fishs[i].x,Fishs[i].y,25,25,ObjPx,ObjPy,10,10)//Verificando a colisão entre o peixe e os poluentes
			if(FcP == true){
				Health--
				ObjPx = random(0,580)
				ObjPy = -10
				//alert("Você sabia que daqui a 50 anos hávera mais poluentes do que Peixes no mar?") *introdução de fato*
			}
	}
	CcP = collideRectRect(CharPx,CharPy,50,50,ObjPx,ObjPy,10,10)//Verificando a colisão entre o personagem e os poluentes
	if(CcP == true){
		Pont += 10
		Pointed++
		console.log("Pointed")
		ObjPx = random(0,580)
		ObjPy = -10

	}
	if(Pointed == 15 ){ //Dando pontos de saúde marinha a cada 150 pontos
		Health ++
		Pointed = 0
	}
	if(Pont == 200){
		Peixes = 6
	}else if(Pont == 600){
		Peixes = 8
	}else if(Pont == 900){
		Peixes = 10
	}else if(Pont == 1200){
		Peixes = 12
	}
	fill('black');
	textSize(16);
	textAlign(RIGHT);
	text("Points: " + Pont, 500, 20);
	fill('black')
	textSize(16);
	textAlign(RIGHT);
	text("Ocean Health: " + Health, 140, 20); // Contador de vida
}
if(Health <= 0){
	Tela = 2
	if(Tela == 2){ //Game over
		textSize(30);
		textAlign(CENTER);
		text(' PRESS SPACEBAR \n TO \nPLAY AGAIN', 300, 300);
		CharPy = -300
		CharPx = -300
		if(keyIsDown(32)){
			Health = 3
			Pont = 0
			ObjPx = random(0,580)
			ObjPy = -10//Play Again
			CharPx = 300
			CharPy = 300
			Tela = 1
			}
	}
}
}
