/* 
Antiga forma, com função: 
*/

// function Cliente(nome, email, telefone) {
//         this.nome = nome;
//         this.email = email;
//         this.telefone = telefone;
// }

/*
Forma atual, com classe:
*/

class Cliente {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

// A classe pode ser chamada neste arquivo ou em outros arquivos do mesmo diretório:
const vinicius = new Cliente('Vinicius', 'vmc.mart@gmail.com', '983457122');
console.log(vinicius);

// Criando uma classe filha da classe "Cliente":
// Por meio do "super()" enviamos todos os parâmetros comuns ao pai, a classe pai.

class ClienteBanco extends Cliente {
    constructor(nome, email, telefone, saldo) {
        super(nome, email, telefone);
        this.saldo = saldo;
    }
    depositarValor(valor) {
        this.saldo += valor;
    }
}

const karize = new ClienteBanco('Karize', 'karize@email.com', '983451688', 10000);
console.log(karize);

karize.depositarValor(5500);
console.log(karize);