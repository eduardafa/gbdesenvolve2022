function setup() {
  createCanvas(500, 400);
  trilha.loop(); //trilha do jogo
}

function draw() {
  background(imagemEstrada); //cor/imagem do background
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicial();
  verificaColisao();
  mostraPontuacao();
  marcaPonto();
}