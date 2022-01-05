/*
1 - Criação da classe "ListaNegociacoes" dentro de app/models. Essa classe é responsável por criar uma lista com as negociações inputadas e conter
os métodos para adicionar novas negociações (push no array) e um get para retornar a lista atualizada;
2 - Inserir programação defensiva para blindar o método "get negociacoes()" para retornar uma cópia da lista original (return [].concat(this._negociacoes)). 
Dessa forma, se quiserem, através do console, limpar os dados do array com ".length = 0" ou utilizar diretamente o ".push" para adiconar novas negociações no array,
não irá alterar a lista original, pois estamos enviando uma cópia dela nesse método;
*/

class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }
}