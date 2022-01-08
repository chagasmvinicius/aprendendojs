/* Criação de uma lista de identidades e exibição dos dados de maneira ordenada */

let identidades = [
    {
        nome: 'Vinicius',
        idade: 28,
        email: 'vinicius@email.com',
        cpf: '12344278820'
    },
    {
        nome: 'Karize',
        idade: 24,
        email: 'karize@email.com',
        cpf: '72384378843'
    },
    {
        nome: 'Nilvaldo',
        idade: 61,
        email: 'nilvaldo@gmail.com',
        cpf: '65344528990'
    },
    {
        nome: 'Soraya',
        idade: 63,
        email: 'soraya@gmail.com',
        cpf: '71448878902'
    },
    {
        nome: 'Irhael',
        idade: 17,
        email: 'irhael@gmail.com',
        cpf: '22377278121'
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

/*-----------------------------------------------------------------------------*/

