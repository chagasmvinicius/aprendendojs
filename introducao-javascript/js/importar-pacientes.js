var btnImportarPacientes = document.querySelector('#importar-pacientes');

btnImportarPacientes.addEventListener('click', function () {
    console.log(`${new Date}: Importando pacientes...`);

    /*
    AJAX - Método XMLHttpRequest
    1 - Utilizando o método "new XMLHttpRequest" para estabelecer uma comunicação externa via HTTP;
    2 - Com o ".open" podemos utilizar qualquer um dos métodos HTTP, nesse caso um GET para enviar uma requisição de busca para a API;
    3 - Utilizando o "addEventListener('load', function() {})" para executar uma função assim que a requisição (GET, nesse caso) estiver carregada;
    4 - Com o ".responseText" é possível exibir o corpo da resposta da requisição que foi enviada;
    5 - Salvando a resposta na variável "response" e transformando o JSON que é uma string em um objeto javascript com o método "JSON.parse(json)";  
    */

    xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
    xhr.addEventListener('load', function () {
        if (xhr.status == 200) {
            var response = xhr.responseText;
            var pacientesImportados = JSON.parse(response);
            pacientesImportados.forEach(function (paciente) {
                objTabelaPacientes.imcs.push(paciente.imc); //jogando os novos imcs dentro do nosso objeto primátio para que o rotulo da classificação seja feita
                regitrandoNaTabela(paciente.nome, paciente.peso, paciente.altura, paciente.gordura, paciente.imc);
            });
            console.log(`${new Date}: Pacientes importados!`);
        } else {
            console.log(`${new Date}: Erro ${xhr.status} ao tentar estabelecer conexão com a API. Mensagem do erro "${xhr.responseText}".`);
            var msgErro = document.querySelector('.mensagem-erro-ajax');
            msgErro.classList.remove('mensagem-erro-ajax');
        }
    });
    xhr.send();
});