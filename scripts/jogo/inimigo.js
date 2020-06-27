class Inimigo extends Animacao {
<<<<<<< HEAD
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
=======
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.velocidade = velocidade;
    this.delay = delay;
    this.x = width + this.delay;
  }  
  
  move(){
    this.x = this.x - this.velocidade;
    
    if(this.x < -this.largura - this.delay){
      this.x = width;
    }  
  }
}  
>>>>>>> parent of ba41b22... aula-04
