class Inimigo extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
        this.velocida = 5;
    }
    move() {
        this.x = this.x - this.velocida;

        if (this.x < -this.largura) {
            this.x = width;
        }
    }
}
