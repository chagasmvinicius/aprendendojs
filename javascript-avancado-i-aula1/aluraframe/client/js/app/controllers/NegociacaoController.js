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
10 - Transformação da classe DateHelper em estática, ou seja, os métodos podem ser chamados diretamente, sem precisar instanciar a classe:
"DateHelper.textParaData()";
11 - Criação do método para limpar o formulário (_limpaFormulario()) após a ação da negociação na lista;
12 - Incluir o ".focus()" no campo data para que, assim que o formulário for resetado, o foco/cursor iniciar no campo data;
13 - Importação da classe "NegociaçõesView" e utilização da mesma para chamar e exibir a tabela;
*/

class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._formulario = $('.form');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._listaNegociacoes = new ListaNegociacoes;
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem;
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem.texto = 'A negociação foi inserida com sucesso.';
        this._mensagemView.update(this._mensagem); 

        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limpaFormulario() {
        this._formulario.reset();
        this._inputData.focus();
    }
}