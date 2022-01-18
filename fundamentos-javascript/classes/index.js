import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { Banco } from "./Banco.js";

const clienteVinicius = new Cliente('Vinicius', 'vinicius@email.com', '21983847166');
const clienteKarize = new Cliente('Karize', 'karize@email.com', '2198366451');
const contaVinicius = new ContaCorrente('12733', 0, clienteVinicius);
const contaKarize = new ContaCorrente('82009', 23450, clienteKarize);
const bancoA = new Banco('Banco A', '127883990000123', {contaVinicius, contaKarize});

let valor = 450;
console.log(`\nSaldo conta KARIZE: ${contaKarize.saldoConta}\n`);
console.log(`\nSaldo conta VINICIUS: ${contaVinicius.saldoConta}\n`);
contaKarize.transferirValor(valor, contaVinicius);
console.log(`\n------ TRANSFERINDO (${valor}) ... ------>\n`);
console.log(`\nSaldo conta KARIZE: ${contaKarize.saldoConta}\n`);
console.log(`\nSaldo conta VINICIUS: ${contaVinicius.saldoConta}\n`);

const clienteSoraya = new Cliente('Soraya', 'soraya@email.com', '2188993846');
const contaSoraya = new ContaCorrente('12734', 1000, clienteSoraya);
console.log(`\nNúmero total de contas corrente criadas: ${ContaCorrente.numeroDeContas}\n`);

