class Personagem extends Animacao {
	constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
		super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
		this.yInicial = height - this.altura;
		this.y = this.yInicial;
		this.gravidade = 3;
		this.velocidadeDoPulo = 0;

	}
	pula() {
		this.velocidadeDoPulo = -29;
	}

	aplicaGravidade() {
		this.y = this.y + this.velocidadeDoPulo;
		this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

		if (this.y > this.yInicial) {
			this.y = this.yInicial;

		}
	}

	estaColidindo(inimigo) {
		const precisao = .7;

		const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao)

		return colisao;
		if (colisao = true) {
			var img = document.createElement("PNG");
			img.src = "imagens/assets/game-over.png";
		}
	}

}
