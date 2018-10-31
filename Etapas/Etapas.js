x = 90 // Posição inicial no eixo X do personagem
y = 255 // Posição inicial no eixo Y do personagem
s = 5 // Valor da velocidade inicial 
a = 0 // Posição inicial no eixo X do objeto
b = 300 // Posição inicial no eixo Y do objeto

function setup(){
	canvas = createCanvas(600,600) // Canvas com dimensões 600x600
}

function draw(){
	background('gray'); // Cor do background
	
	//Etapa 1 
	fill('blue'); // Cor do personagem
	ellipse(x,y,55,55); // Elispse de raios 55 e 55
	fill('red'); // Cor do obstáculo
	rect(a,b,55,55); // Retângulo quadrado de lados medindo 55 
		
	//Etapa 2 
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
	//Etapa 3
	a += s // Movimento uniforme do objeto 
	if(a > 600){ // Volta do objeto para o X = 0 
			a = 0
			b = random(600,0) // O objeto volta em uma posição aleátoria de Y entre 0 e 600
		}
}

