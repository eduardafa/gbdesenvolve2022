// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

// velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

// variaveis da raquete
// minha raquete 
let xRaquete1 = 5;
let yRaquete1 = 150;
let widthRaquete1 = 10;
let heightRaquete1 = 90;
let deltaMovimento = 10;

// raquete do oponente
let xRaquete2 = 585;
let yRaquete2 = 150;
let widthRaquete2 = 10;
let heightRaquete2 = 90;
let velocidadeYOponente;

// // codigos do teclado
// let up = 38;
// let down = 40;

let colidiu = false;

// placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

// sons do jogo
let raquetada ;
let ponto;
let trilha;

let chanceErro = 0;

function preload() {
  trilha = loadSound('trilha.mp3');
  ponto = loadSound('ponto.mp3');
  raquetada = loadSound('raquetada.mp3');
}

function setup() {
  createCanvas(600, 400);
  trilha.loop(); //trilha do jogo
}

function draw() {
  background(0);
  mostraBolinha();
  mostraRaquete(xRaquete1,yRaquete1);
  mostraRaquete(xRaquete2,yRaquete2);
  movimentaBolinha();
  verificaColisaoBordas();
  movimentaRaquete1();
  movimentaRaquete2();
  // verificaColisaoRaquete();
  colisaoRaqueteBiblioteca(xRaquete1,yRaquete1);
  colisaoRaqueteBiblioteca(xRaquete2,yRaquete2);
  incluiPlacar();
  verificaPontos();

}

function mostraBolinha() {
  bolinha = circle(xBolinha,yBolinha,diametro);
}

function mostraRaquete(xRaquete,yRaquete) {
  raquete = rect(xRaquete,yRaquete,widthRaquete1,heightRaquete1);

}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBordas() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  } 
  if (yBolinha + raio >= height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

// function movimentaRaquete(event) {
//   if (event.keyCode == up) {
//     yRaquete1 += - deltaMovimento;
//   } else if (event.keyCode == down) {
//     yRaquete1 += deltaMovimento;
//   }
// }

// document.onkeydown = movimentaRaquete;

function movimentaRaquete1() {
  if (keyIsDown (UP_ARROW)) {
    yRaquete1 -= deltaMovimento;
  } else if (keyIsDown (DOWN_ARROW)) {
    yRaquete1 += deltaMovimento;
  }
}

// function verificaColisaoRaquete() {
//   if (xBolinha - raio < xRaquete1 + widthRaquete1 
//     && yBolinha - raio < yRaquete1 + heightRaquete1 
//     && yBolinha + raio > yRaquete1) {
//     velocidadeXBolinha *= -1;
//     raquetada.play();
//   } else if (xBolinha + raio > xRaquete2 + widthRaquete2) {
//     velocidadeXBolinha *= -1;
//     raquetada.play();
//   }
// }

function colisaoRaqueteBiblioteca(xRaquete,yRaquete) {
  colidiu = collideRectCircle(xRaquete,yRaquete,widthRaquete1,heightRaquete1,xBolinha,yBolinha,raio);

  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceErro += 1
    if (chanceErro >= 39){
      chanceErro = 40
    }
  } else {
    chanceErro -= 1
    if (chanceErro <= 35){
      chanceErro = 35
    }
  }
}

function movimentaRaquete2() {
  // velocidadeYOponente = yBolinha - yRaquete2 - widthRaquete1/2 - 50;
  // yRaquete2 += velocidadeYOponente + chanceErro;

  // calculaChanceErro();

  velocidadeYOponente = yBolinha - yRaquete2 - widthRaquete1/2 - 50;
  yRaquete2 += velocidadeYOponente;

  // if (keyIsDown (87)) {
  //   yRaquete2 -= deltaMovimento;
  // } else if (keyIsDown (83)) {
  //   yRaquete2 += deltaMovimento;
  // }
}

// placar
function incluiPlacar() {
  stroke(255); //contorno
  textAlign(CENTER); //alinhamento
  textSize(18); //tamanho do texto
  // meu placar 
  fill(color(255,140,0)); //referencia de cor RGB para o retangulo
  rect(150,10,40,20); //retangulo do placar
  fill(255); //cor do texto
  text(meusPontos,170,26);
  // placar do oponente
  fill(color(255,140,0)); //referencia de cor RGB para o retangulo
  rect(450,10,40,20); //retangulo do placar
  fill(255); //cor do texto
  text(pontosOponente,470,26);
}

function verificaPontos() {
  if (xBolinha > 590) {
    meusPontos++;
    ponto.play();
  } else if (xBolinha < 10) {
    pontosOponente++;
    ponto.play();
  }

}
