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

export class Cliente {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}