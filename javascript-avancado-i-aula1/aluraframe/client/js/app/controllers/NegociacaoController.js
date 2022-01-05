/*
1 - Criação da classe NegociacaoController;
2 - Criação do método "adiciona()" que irá executar a negociação a partir do submit do formulário;
3 - Instanciar o arquivo NegociacaoController.js no index.html;
4 - Instanciar a classe NegociacaoController no index.html dentro da tag script: let negociacaoController = new NegociacaoController();
5 - Linkar o método "adiciona()" na tag form: <form class="form" onsubmit="negociacaoController.adiciona(event)">;
6 - Puxar as informações de cada input e salvar nas variáveis. O código "let $ = document.querySelector.bind(document)" faz com que fique salvo o 
valor "document.querySelector" dentro da variável e o ".bind(document)" força que o vínculo sempre seja com o escopo de document. Obs.: é só um macete
para escrever menos;
7 - Criar um constructor e lá buscar as informações do input no DOM, dessa forma criamos propriedades na classe e é mais performático;
8 - Adicionar ao método "adiciona(event)" a criação de uma negociação: let negociacao = new Negociacao(this._inputData, this._inputQuantidade, this._inputValor);   
9 - A execução da classe dá data inválida, porém temos como consertar convertendo o valor inicial que é uma string em data, assim:
let negociacao = new Negociacao(new Date(this._inputData.value.split('-')[0], this._inputData.value.split('-')[1]-1, this._inputData.value.split('-')[2]), this._inputQuantidade.value, this._inputValor.value);
*/

class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        let dateHelper = new DateHelper();

        let negociacao = new Negociacao(
            dateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
        console.log(negociacao);

        console.log(dateHelper.dataParaTexto(dateHelper.textoParaData(this._inputData.value), this._inputData.value));
    }
}