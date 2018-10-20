x = 90 // Posição inicial no eixo X do personagem
y = 225 // Posição inicial no eixo Y do personagem
s = 5 // Valor da velocidade inicial 

function setup(){
	canvas = createCanvas(600,600) // Canvas com dimensões 600x600
}

function draw(){
	background('gray'); // Cor do background
	fill('blue'); // Cor do personagem
	ellipse(x,y,55,55); // Elispse de raios 55 e 55
	fill('red'); // Cor do obstáculo
	rect(500,200,55,55); // Retângulo quadrado de lados medindo 55 
	if(keyIsDown(RIGHT_ARROW)){	 	//Movimento para a direita 
			x += s
		}
		if(keyIsDown(LEFT_ARROW)){ 	//Movimento para a esquerda
			x -= s
		}
		if(keyIsDown(UP_ARROW)){  	//Movimento para cima 
			y -= s
		}
		if(keyIsDown(DOWN_ARROW)){ 	//Movimento para baixo 
			y += s
		}

}