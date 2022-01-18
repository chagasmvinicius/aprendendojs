import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const clienteVinicius = new Cliente('Vinicius', 'vinicius@email.com', '21983847166');

console.log(clienteVinicius);

const contaVinicius = new ContaCorrente(1000);

contaVinicius.depositarValor(-1100);
console.log(`\nSaldo atual: ${contaVinicius.saldoConta}`);