/* Calculando a média dos alunos */

let notas = [6, 8, 5, 6];
let soma = 0;
let media = 0;
notas.forEach(function(nota) {
    soma += nota;
    media = soma/notas.length;
});

// let media = 0;
// let soma = 0;
// for (let i = 0; i < notas.length; i++) {
//     soma += notas[i];
// }
// media = soma/notas.length;

console.log(`A média é: ${media}`);

/*-----------------------------------------------------------------------------*/

/* Principais métodos de um Array */

let familia = ['Vinicius', 'Nil', 'Soraya', 'Karize'];
let idades = [28, 61, 63, 24];

/* 
.concat(): Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
*/

let familiaEIdadesConcat = familia.concat(idades);
let idadesEFamiliaConcat = idades.concat(familia);
console.log(`
Array idades concatenado ao final do array familia: [${familiaEIdadesConcat}]
Array familia concatenado ao final do array idades: [${idadesEFamiliaConcat}]
`);

/* 
.filter(): Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/

const pai = familia.filter(membro => { if (membro == 'Nil')  return membro; });
console.log(`O nome do pai é ${pai}`);

/*
.find(): Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
*/

const pigmeu = familia.find(membro => { if (membro == 'Karize') return membro; });
console.log(`O nome do pigmeu é ${pigmeu}`);

/*
findIndex():Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
*/

const posicaoMae = familia.findIndex(posicao => { if (posicao == 'Soraya') return posicao; });
console.log(`A posição de mãe no array é ${posicaoMae}`);

/*
reduce(): Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/

const somaIdadesDaFamilia = idades.reduce((acumulador, idadeAtual) => { return acumulador + idadeAtual });
console.log(`A soma de todas as idades da família é ${somaIdadesDaFamilia}`);

/*
slice(): Copia uma parte do array para outro array.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

//      0         1       2         3
// ['Vinicius', 'Nil', 'Soraya', 'Karize']
const membrosMesmoSangue = familia.slice(0, 3);
console.log(`Os familiares de mesmo sangue são: ${membrosMesmoSangue}`);

/*
.splice(): Atualiza indices do array, removendo alguns e incluindo outros.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/

let familiaComAdicao = ['Vinicius', 'Nil', 'XPTO', 'Soraya', 'Karize'];
familiaComAdicao.splice(2, 1, 'Spike');
console.log(`O novo array atualizado ficou assim: ${familiaComAdicao}`);

/*-----------------------------------------------------------------------------*/

/* Atualização da lista de familiares com duas dimensões ordenadas: nome, idade */

const identidades = [];
for (let i = 0; i < familia.length && i < idades.length; i++) {
    identidades.push(familia[i]);
    identidades.push(idades[i]);
}
console.log(identidades);