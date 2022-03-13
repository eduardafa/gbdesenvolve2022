// function tocaSomPom() {
//     document.querySelector('#som_tecla_pom').play();
// }

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    // if (elemento === null) {
    //     alert('Elemento não encontrado!');
    //     console.log('Elemento não encontrado!');
    // } else if (elemento != null && elemento.localName === 'audio') {
    //     elemento.play();
    // }

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        alert('Elemento não encontrado ou seletor inválido!');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeSons = document.querySelectorAll('audio');

// let i = 0;

// while (i < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[i];
//     const instrumento = tecla.classList[1];

//     //console.log(instrumento);
//     // template string //
//     // o uso da crase é uma forma de criar string no JS //
//     // chaves {...} são usadas para elementos variáveis, deve ser precedida de $ //
//     const idAudio = `#som_${instrumento}`;
    
//     tecla.onclick = function () {
//         tocaSom(idAudio);
//     };
//     i++;
// }

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () { // função anonima
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {
        console.log(event);
        // if (event.code == 'Enter' || event.code == 'Space')
        if (event.keyCode == 13 || event.keyCode == 32) { // 13 = ENTER e 32 = SPACE
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}