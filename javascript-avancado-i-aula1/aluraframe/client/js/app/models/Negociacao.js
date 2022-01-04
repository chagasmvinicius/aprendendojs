/*
1 - Criação da classe "Negociacao";
2 - Toda função de uma classe (dentro da classe) é um método e é chamada assim;
3 - O constructor possui todas as especificações e propriedades da classe;
4 - Para chamar uma classe criada é necessário utilizar o "new". Ex.: var negociacao = new Negociacao(param1, paramN);
5 - Utilização do "_" a frente das propriedades que não devem ser alteradas ou acionadas diretamente, sem ser pela classe. Essa é uma convenção
para que os programadores possam interpretar que essas propriedades são de uma classe e não devem ser acessadas por fora da classe;
6 - Para que as propriedades da classe possam ser acessadas (e não manipuladas) criamos, por convenção, métodos para retornar os valores das propriedades. 
Esse métodos são "getters", ou seja, iniciam com "get", ex.: "get valor()", dessa forma, mesmo que o programador tente alterar o valor dessa propriedade, ele não consegue;
7 - Impedindo as alterações com Object.freeze(this);
8 - O "Object.freeze(this)" é raso, não deixa imutável também as propriedades internas de cada propriedade do objeto. Para resolver isso, somente
instanciando um novo objeto para gerar uma cópia da informação original;
*/

class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }
    
    get data() {
        return new Date(this._data.getTime());
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