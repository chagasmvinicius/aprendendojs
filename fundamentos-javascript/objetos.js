/* Criação de uma lista de identidades e exibição dos dados de maneira ordenada */

let identidades = [
    {
        nome: 'Vinicius',
        idade: 28,
        email: 'vinicius@email.com'
    },
    {
        nome: 'Karize',
        idade: 24,
        email: 'karize@email.com'
    },
    {
        nome: 'Nilvaldo',
        idade: 61,
        email: 'nilvaldo@gmail.com'
    },
    {
        nome: 'Soraya',
        idade: 63,
        email: 'soraya@gmail.com'
    },
    {
        nome: 'Irhael',
        idade: 17,
        email: 'irhael@gmail.com'
    }
];

identidades.forEach(identidade => {
    return console.log(`
        Nome: ${identidade.nome};
        Idade: ${identidade.idade};
        E-mail: ${identidade.email};
    `);
});

/*-----------------------------------------------------------------------------*/

