export class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }

    depositarValor(valor) {
        valor > 0 ? this.saldo += valor : console.log(`\nO valor do depósito precisa ser mais que 0.`);
    }

    sacarValor(valor) {
        valor <= this.saldo ? this.saldo -= valor : console.log(`\nO valor do saque (${valor}) precisa ser menor ou igual ao valor do saldo (${this.saldo}).`);
    }

    get saldoConta() {
        return this.saldo;
    }
}