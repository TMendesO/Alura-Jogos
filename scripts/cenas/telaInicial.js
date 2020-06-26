class TelaInicial {
  constructor(){
    }
  
  draw() {
    //console.log('tela inicial');
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    
    textSize(50);
    text('As Aventuras de', width/2, height/3);
    
    textSize(150);
    text('Laura', width/2, height/5*3);
  }
  
  _botao() {
    botaoGerenciador.y = height/7*5;
    botaoGerenciador.draw();
  }
}