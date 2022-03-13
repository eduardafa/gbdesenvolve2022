const clientes = [
    {
        nome: 'Eduarda',
        cpf: '12345678900',
        email: 'eduardateste@email.com',
        dependentes: [
            {
                nome: 'Jessica',
                parentesco: 'companheira',
                dataNasc: '01/01/1994',
            },
            {
                nome: 'Antonio',
                parentesco: 'irmao',
                dataNasc: '02/02/1997',
            },
        ],
    },

    {
        nome: 'Luciana',
        cpf: '18827366462',
        email: 'lucianateste@email.com',
        dependentes: [
            {
                nome: 'Carlos',
                parentesco: 'filho',
                dataNasc: '01/01/1998',
            },
            {
                nome: 'Josue',
                parentesco: 'filho',
                dataNasc: '02/02/2002',
            },
        ],
    },
];
const listaDependentes = [
    ...clientes[0].dependentes,
    ...clientes[1].dependentes,
];

console.log(listaDependentes);
