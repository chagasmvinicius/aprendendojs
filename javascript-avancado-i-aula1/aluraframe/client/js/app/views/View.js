/*
1 - Criação da classe pai "View" para acumular os métodos comuns dentre as outras viewers para que possamos herdá-los em cada uma e utilizar
esses métodos em cada uma, sem a necessidade de repetir código. Basta declarar nas classes filhas, que essas são extensões dessa classe pai (extends).
Além disso, em caso de métodos que possuem parâmetros, devemos em cada classe filha utilizar o método "super(parâmetro)" dentro do construtor para
que o parâmetro em questão seja enviado à classe pai;
*/

class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template() {
        throw new Error('É necessário implementar o método _template().');
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}