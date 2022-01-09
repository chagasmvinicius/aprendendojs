/* Criação de uma lista de identidades e exibição dos dados de maneira ordenada */

let identidades = [
    {
        nome: 'Vinicius',
        idade: 28,
        email: 'vinicius@email.com',
        cpf: '12344278820',
        saldo: 0,
        telefones: ['111111111', '222222222'],
        depositarValor: function (valor) { this.saldo += valor }
    },
    {
        nome: 'Karize',
        idade: 24,
        email: 'karize@email.com',
        cpf: '72384378843',
        saldo: 0,
        telefones: ['333333333, 444444444'],
        depositarValor: function (valor) { this.saldo += valor }
    },
    {
        nome: 'Nilvaldo',
        idade: 61,
        email: 'nilvaldo@gmail.com',
        cpf: '65344528990',
        saldo: 0,
        telefones: ['555555555', '666666666'],
        depositarValor: function (valor) { this.saldo += valor }
    },
    {
        nome: 'Soraya',
        idade: 63,
        email: 'soraya@gmail.com',
        cpf: '71448878902',
        saldo: 0,
        telefones: ['777777777', '888888888'],
        depositarValor: function (valor) { this.saldo += valor }
    },
    {
        nome: 'Irhael',
        idade: 17,
        email: 'irhael@gmail.com',
        cpf: '22377278121',
        saldo: 0,
        telefones: ['999999999', '000000000'],
        depositarValor: function (valor) { this.saldo += valor }
    }
];

identidades.forEach(identidade => {
    return console.log(`
        Nome: ${identidade.nome};
        Idade: ${identidade.idade};
        E-mail: ${identidade.email};
        CPF: ${identidade.cpf.substring(0, 3)}******${identidade.cpf.substring(9, identidade.cpf.length)}
    `);
});

/* Acessando cada chave do objeto a partir de uma lista que contém todas as chaves */
/*
A expressão identidades[i][chaves[c]] faz com que a propriedade de indice "i" do objeto seja o
valor do indice "c" do array chaves. Dessa forma.:
> [chaves[c]]: identidades[i][chaves[c]]
*/

const chaves = ['nome', 'idade', 'email', 'cpf'];

for (let i = 0; i < identidades.length; i++) {
    for (let c = 0; c < chaves.length; c++) {
        console.log(`
        ${[chaves[c]]}: ${identidades[i][chaves[c]]}
    `);
    }
}

/* Adicionando novas chaves e valores em um objeto já criado */

const telefones = ['111111111', '222222222', '333333333', '444444444', '55555555'];
for (let i = 0; i < identidades.length; i++) {
    for (let t = 0; t < telefones.length; t++) {
        identidades[i].telefone = telefones[i];
    }
}
console.log(identidades);

/*
Criei a função "alterarEmail(novoEmail)" para que possamos executa-la quando há a necessidade de
o e-mail de alguma pessoa
*/

const alterarEmail = (nome, novoEmail) => { identidades.forEach(identidade => { if (identidade.nome === nome) identidade.email = novoEmail }) };

alterarEmail('Soraya', 'smartinschagas@gmail.com');
console.log(identidades);

/*
Criei o comportando de depositar valor ao saldo de determinada pessoa
*/

identidades[4].depositarValor(100);
console.log(identidades);

/*
Percorrendo um objeto com for...in para retornar as informações da identidade da pessoa
*/

let identidadeVinicius = identidades[0];
let informacoes = '';
for (let chave in identidadeVinicius) {
    if (typeof identidadeVinicius[chave] !== 'function') {
        informacoes += `
        ${chave}: ${identidadeVinicius[chave]}
    `
    }
}
console.log(informacoes);

