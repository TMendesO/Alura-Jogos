function setup() {
	createCanvas(800, 600);
	frameRate(40);
	somJogo.loop();

	jogo = new Jogo();
	telaInicial = new TelaInicial();
	jogo.setup();
	cenas = {
		jogo,
		telaInicial
	};
	botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2.5, height / 3);
}

function keyPressed() {
	jogo.keyPressed(key);
}

function draw() {
	cenas[cenaAtual].draw();

}
