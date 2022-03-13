// imagens e sons do jogo
// imagens
let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

// sons do jogo
let colidiu;
let pontos;
let trilha;

function preload() {
    // imagens
    imagemEstrada = loadImage('arquivos_auxiliares/material/estrada.png');
    imagemAtor = loadImage('arquivos_auxiliares/material/ator-1.png');
    imagemCarro1 = loadImage('arquivos_auxiliares/material/carro-1.png');
    imagemCarro2 = loadImage('arquivos_auxiliares/material/carro-2.png');
    imagemCarro3 = loadImage('arquivos_auxiliares/material/carro-3.png');
    imagemCarros = [imagemCarro1,imagemCarro2,imagemCarro3,imagemCarro1, imagemCarro2,imagemCarro3];
    // sons do jogo
    trilha = loadSound('arquivos_auxiliares/material/sons/trilha.mp3');
    colidiu = loadSound('arquivos_auxiliares/material/sons/colidiu.mp3');
    pontos = loadSound('arquivos_auxiliares/material/sons/pontos.wav');
}

