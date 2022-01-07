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

console.log(media);