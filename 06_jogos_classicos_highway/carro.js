// variaveis em listas
let xCarros = [600,600,600,600,600,600];
let yCarros = [40,96,150,210,265,318];
let velocidadeCarros = [2,2.5,3.2,5,3.3,2.3];
let comprimentoCarro = 50;
let larguraCarro = 40;

let xInicial = 600;

function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarro,larguraCarro)
        // image(imagemCarros[0],xCarros[0],yCarros[0],comprimentoCarro,larguraCarro);
        // image(imagemCarros[1],xCarros[1],yCarros[1],comprimentoCarro,larguraCarro);
        // image(imagemCarros[2],xCarros[2],yCarros[2],comprimentoCarro,larguraCarro);
    }
}

function movimentaCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
        // xCarros[0] -= velocidadeCarros[0];
        // xCarros[1] -= velocidadeCarros[1];
        // xCarros[2] -= velocidadeCarros[2];
    }
}

function voltaPosicaoInicial() {
    for (let i = 0; i < imagemCarros.length; i++) {
        // continuar o movimento dos carros
        if (passouTodaTela(xCarros[i])) {
            xCarros[i] = xInicial;
        }
        // if (xCarros[0] < -50) {
        //     xCarros[0] = xInicial;
        // }
        // if (xCarros[1] < -50) {
        //     xCarros[1] = xInicial;
        // }    
        // if (xCarros[2] < -50) {
        //     xCarros[2] = xInicial;
        // }
    }
}

function passouTodaTela(xCarro) {
    return (xCarro < -50);
}