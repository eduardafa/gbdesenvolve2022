// vaquinha (ator)
let xAtor = 85;
let yAtor = 370;
let comprimentoAtor = 25;
let larguraAtor = 25;

// colisao
let colisao = false; 

// pontuacao
let pontuacao = 0;

function mostraAtor() {
    image(imagemAtor,xAtor,yAtor,comprimentoAtor,larguraAtor);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 3;
  
    } else if (keyIsDown(DOWN_ARROW)) {
        if (podeSeMover()) {
            yAtor += 3;
        }
    }
}

function verificaColisao() {
    // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,larguraCarro,xAtor,yAtor,15);
        if (colisao) {
            voltaAtorPosicaoInicial();
            colidiu.play();
            if (pontosMaiorQueZero()) {
                pontuacao -= 1;
            }
        }
    }

}

function voltaAtorPosicaoInicial() {
    yAtor = 370;
}

function mostraPontuacao() {
    textAlign(CENTER);
    textSize(25);
    fill(color(255,240,60)); //tabela de cores RGB
    text(pontuacao,width/5,27);
}

function marcaPonto() {
    if (yAtor < 15) {
        pontuacao += 1;
        pontos.play();
        voltaAtorPosicaoInicial();
    }
}

function pontosMaiorQueZero() {
    return (pontuacao > 0);
}

function podeSeMover() {
    return (yAtor < 370);

}