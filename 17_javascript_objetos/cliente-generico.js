function cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    };
}

// const cliente = {
//     nome: 'Eduarda',
//     idade: 27,
//     cpf: '12345678900',
//     email: 'eduardateste@email.com',
// };

const andre = new cliente('Andre', '12345487264', 'andreteste@email.com', 100);

console.log(andre);
