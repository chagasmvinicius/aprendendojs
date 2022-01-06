/*
1 - Criação da classe "MensagemView" que irá conter a construção da marcação no HTML para ser exibida a mensagem, <p></p>, e um método, "update(model)",
para atualizar/iserir a mensagem no HTML;
*/

class MensagemView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
        return model.texto ? `<p class="alet alert-info">${model.texto}</p>` : `<p></p>`
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}