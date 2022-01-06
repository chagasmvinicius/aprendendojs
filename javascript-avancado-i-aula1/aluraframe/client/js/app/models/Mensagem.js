/*
1 - Criação da classe "Mensagem" que será responsável pelo armanezamento dos textos de todas as mensagens que a aplicação precisar exibir.
Além disso também criamos métodos para alterar um texto, "set texto()", e outro para puxar a informação de um texto, "get texto()";
*/

class Mensagem {
    
    constructor(texto = '') {
        this._texto = texto;
    }

    get texto() {
        return this._texto;
    }

    set texto(nTexto) {
        this._texto = nTexto;
    }
}