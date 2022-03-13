const cliente = {
    nome: 'Eduarda',
    idade: 27,
    cpf: '12345678900',
    email: 'eduardateste@email.com',
    fones: ['5598927734666', '5571983484744'],
};

cliente.dependente = {
    nome: 'Jessica',
    idade: 28,
    parentesco: 'companheira',
};

cliente.dependente.idade = 29;

console.log(cliente);
