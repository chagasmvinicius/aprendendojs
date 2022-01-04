/*
1 - Criação da classe "Negociacao";
2 - Toda função de uma classe (dentro da classe) é um método e é chamada assim;
3 - O constructor possui todas as especificações e propriedades da classe;
4 - Para chamar uma classe criada é necessário utilizar o "new". Ex.: var negociacao = new Negociacao(param1, paramN);
5 - Utilização do "_" a frente das propriedades que não devem ser alteradas ou acionadas diretamente, sem ser pela classe. Essa é uma convenção
para que os programadores possam interpretar que essas propriedades são de uma classe e não devem ser acessadas por fora da classe;
6 - Para que as propriedades da classe possam ser acessadas (e não manipuladas) criamos, por convenção, métodos para retornar os valores das propriedades. 
Esse métodos são "getters", ou seja, iniciam com "get", ex.: "get valor()", dessa forma, mesmo que o programador tente alterar o valor dessa propriedade, ele não consegue;
*/

class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
    
    get volume() {
        return this._quantidade * this._valor;
    }
};