const cliente = {
    nome: 'Eduarda',
    idade: 27,
    cpf: '12345678900',
    email: 'eduardateste@email.com'
}

const chaves = ['nome','idade','cpf','email'];

// console.log(cliente[chaves[0]]);
// console.log(cliente['nome']);

chaves.forEach(info => console.log(cliente[info]));

