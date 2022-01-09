/*
Utilização do JSON
Métodos:
JSON.parse(json): converte JSON para um objeto JavaScript;
JSON.stringify(objeto): converte um objeto JavaScript para o formato JSON.
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON
Doc API: https://rapidapi.com/ajith/api/love-calculator
*/

// Exibição no navegador:

// let btnGerarJSON = document.querySelector('#gerar-json');
// btnGerarJSON.addEventListener('click', function () {

//     // Declaração dos parâmetros da URL e a URL em si:
//     let sname = 'Vinicius'
//     let fname = 'Karize'
//     let requestURL = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`;

//     // Instância da API da requisição XMLHttpRequest:
//     const xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;

//     // Abertura de uma nova requisição utilizando o método ".open('metodoHTTP', 'URL')":
//     xhr.open('GET', requestURL);

//     // Declaração dos headers da requisição. Para essa API é necessário dois parâmetros no header:
//     xhr.setRequestHeader("x-rapidapi-host", "love-calculator.p.rapidapi.com");
//     xhr.setRequestHeader("x-rapidapi-key", "ed4cf35a63msh0574a4aac7aba22p1dff96jsn675f7f1b5606");

//     // Declaração do armazenamento da resposta da requisição em uma variável:
//     let response;
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             response = xhr.responseText;
//             let json = document.querySelector('#json');
//             json.textContent = response;
//             console.log(`${xhr.status}: Resposta recebida!`);
//         } else {
//             console.log(`Erro ${xhr.status} ao tentar estabelecer conexão com a API ${requestURL}`);
//         }
//     }

//     // Envio da requisição:
//     xhr.send();
// });

/* 
Exibição no terminal. Neste caso é necessário importar a biblioteca da API XMLHttpRequest (npm i xmlhttprequest):
https://www.npmjs.com/package/xmlhttprequest 
*/

// Declaração dos parâmetros da URL e a URL em si:
let sname = 'Karize'
let fname = 'Vinicius'
let requestURL = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`;

// Instância da API da requisição XMLHttpRequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const xhr = new XMLHttpRequest();

// Abertura de uma nova requisição utilizando o método ".open('metodoHTTP', 'URL')":
xhr.open('GET', requestURL);

// Declaração dos headers da requisição. Para essa API é necessário dois parâmetros no header:
xhr.setRequestHeader("x-rapidapi-host", "love-calculator.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "ed4cf35a63msh0574a4aac7aba22p1dff96jsn675f7f1b5606");

// Declaração do armazenamento da resposta da requisição em uma variável:
let response;
let responseObj;
xhr.onload = function () {
    if (xhr.status === 200) {
        response = xhr.responseText;
        console.log(`${xhr.status}: Resposta recebida! \n`);
        // Convertendo o JSON (response) em um objeto javascript:
        responseObj = JSON.parse(response);
        console.log(responseObj);
    } else {
        console.log(`Erro ${xhr.status} ao tentar estabelecer conexão com a API ${requestURL} \n`);
    }
}
// Envio da requisição:
xhr.send();
