/*
1 - Criação da classe "ListaNegociacoes" dentro de app/models. Essa classe é responsável por criar uma lista com as negociações inputadas e conter
os métodos para adicionar novas negociações (push no array) e um get para retornar a lista atualizada;
*/

class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return this._negociacoes;
    }
}