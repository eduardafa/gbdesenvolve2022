const cliente = {
    nome: 'Eduarda',
    idade: 27,
    cpf: '12345678900',
    email: 'eduardateste@email.com'
}

console.log(cliente.nome);
// exibe os 3 primeiros digitos do cpf, inicia no indice 0 e vai ate o 3 sem exibir o ultimo
console.log(cliente.cpf.substring(0,3));

TODO: