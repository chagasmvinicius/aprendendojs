/*
1 - Criação da classe "MensagemView" que irá conter a construção da marcação no HTML para ser exibida a mensagem, <p></p>, e um método, "update(model)",
para atualizar/iserir a mensagem no HTML;
2 - Importação dos métodos "update()" e do constructor da classe "View" como herança, através a declaração "class NegociacoesView extends View".
Dessa forma, o construtor utiliza o método "super()" para enviar o parâmetro ao pai e utilizamos os métodos herdados da classe pai "View";
*/

class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return model.texto ? `<p class="alet alert-info">${model.texto}</p>` : `<p></p>`
    }
}