/*
1 - Criação da classe "NegociacoesVew";
2 - Criação do método "template()" que é responsável por armazenar o template string (``) de todo HTML da tabela;
3 - Inclusão do constructor da classe NegociacoesView que irá receber o elemento div com o ID correto para ser a marcação de onde a tabela deve
ser inserida. A chamada do elemento foi feita na classe NegociacaoController (this._negociacoesView = new NegociacoesView($('#negociacoesView')));
4 - Criação do método "update()" que será responsável por introduzir na div (this._elemento) o return do template (tabela);
5 - Evolução do template string para construir a TR e TDs no HTML. Para isso percorremos a lista de negociações (model.negociacoes) com o método ".map".
A transformação de lista/array para string utilizamos o método ".join('')" que unifica os dados do array com o " " entre eles. Não daria certo utilizar o
método ".string()" porque esse método por padrão adiciona vírgula entre os elementos do array;
*/

class NegociacoesView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map(function(n) {
                    return `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                    `
                }).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
        `
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}