export class ContaCorrente {
    constructor(agencia, saldo, cliente) {
        this.agencia = agencia;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    depositarValor(valor) {
        if (valor > 0) {
           this.saldo += valor; 
           return valor;
        } else {
            return console.log(`\nO valor do depósito (${valor}) precisa ser mais que 0.\n`);
        }
    }

    sacarValor(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return valor;
        } else {
            return console.log(`\nO valor do saque (${valor}) precisa ser menor ou igual ao valor do saldo (${this.saldo}).\n`);
        }
    }

    get saldoConta() {
        return this.saldo;
    }

    transferirValor(valor, conta) {
        var valorSacado = this.sacarValor(valor);
        conta.depositarValor(valorSacado);
    }
}