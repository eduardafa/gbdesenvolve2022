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
        {
            nome: 'Antonio',
            idade: 24,
            parentesco: 'irmao',
            dataNasc: '02/02/1997',
        },
    ],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor;
    },
};

// console.log(propsClientes);

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${obj.nome} `);
    }
}

console.log(Object.values(cliente));
console.log(Object.entries(cliente));
oferecerSeguro(cliente);
