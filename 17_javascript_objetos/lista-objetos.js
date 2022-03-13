const cliente = {
    nome: 'Eduarda',
    idade: 27,
    cpf: '12345678900',
    email: 'eduardateste@email.com',
    fones: ['5598927734666', '5571983484744'],
    dependentes: [
        {
            nome: 'Jessica',
            idade: 28,
            parentesco: 'companheira',
            dataNasc: '01/01/1994',
        },
    ],
};

cliente.dependentes.push({
    nome: 'Antonio',
    idade: 24,
    parentesco: 'irmao',
    dataNasc: '02/02/1997',
});

// console.log(cliente);

const dependenteMaisNovo = cliente.dependentes.filter(
    (dependente) => dependente.dataNasc === '02/02/1997'
);

console.log(dependenteMaisNovo[0].nome);
// console.log(dependenteMaisNovo);
