/* Adicionar um novo registro na tabela de pacientes com base no click do botão no formulário */
const btnAdicionar = document.querySelector('#adicionar-paciente');
btnAdicionar.addEventListener('click', function (event) { //adiconando um listener para perceber quando tiver um "click" no meu botão "Adicionar"
    event.preventDefault(); //abortando o comportamento padrão do meu botão "Adicionar", o "event" é meramente um parâmetro

    /* Colentando as informações e salvando */
    let dadosForm = document.querySelector('#form-adiciona'); //puxando os dados do id do form para abaixo puxar os valores de cada input
    let nome = dadosForm.nome.value; //acessando os inputs do form pelo "name", isso é possível por ser um form e ser um .querySelector
    let peso = dadosForm.peso.value.replace(',', '.');
    let altura = dadosForm.altura.value.replace(',', '.');
    let gordura = dadosForm.gordura.value.replace(',', '.');

    /* Conferir o peso e altura, se estiver errado, mostrar um alert e resetar o formulário */
    let mensagemErro = document.querySelector('#mensagem-erro');
    if (!validaPeso(peso) || !validaAltura(altura)) {
        mensagemErro.textContent = `Dado(s) inválido(s)! Peso: ${peso} ou altura: ${altura}`;
        console.log(`${new Date}: Dado(s) inválido(s)! Peso: ${peso} ou altura: ${altura}`);
        dadosForm.reset();
    } else {
        regitrandoNaTabela();
        mensagemErro.textContent = '';
        console.log(`${new Date}: O paciente ${nome} foi adicionado!`);
    }

    function regitrandoNaTabela() {

        /* De fato criando uma tabela linha (tr) e adc informações das colunas (td) */
        let novoRegistroTr = document.createElement('tr'); //criando nova tr
        novoRegistroTr.classList.add('paciente'); //adicionando a classe a nova tr
        let novoRegistroTdNome = document.createElement('td'); //criando novas tds
        setarValoresTds(novoRegistroTdNome, nome, 'info-nome');
        let novoRegistroTdPeso = document.createElement('td');
        setarValoresTds(novoRegistroTdPeso, peso, 'info-peso');
        let novoRegistroTdAltura = document.createElement('td');
        setarValoresTds(novoRegistroTdAltura, altura, 'info-altura');
        let novoRegistroTdGordura = document.createElement('td');
        setarValoresTds(novoRegistroTdGordura, gordura, 'info-gordura');
        let novoRegistroTdImc = document.createElement('td');
        setarValoresTds(novoRegistroTdImc, calcularImcForm(peso, altura), 'info-imc');
        let novoRegistroTdClassificacao = document.createElement('td');
        setarValoresTds(novoRegistroTdClassificacao, 'N/A', 'info-classificacao');

        /* Criando o vínculo de pai e filhas entre a tr e as tds */
        novoRegistroTr.appendChild(novoRegistroTdNome);
        novoRegistroTr.appendChild(novoRegistroTdPeso);
        novoRegistroTr.appendChild(novoRegistroTdAltura);
        novoRegistroTr.appendChild(novoRegistroTdGordura);
        novoRegistroTr.appendChild(novoRegistroTdImc);
        novoRegistroTr.appendChild(novoRegistroTdClassificacao);

        /* Vínculo entre a tr com o tbody para que as informações aparecam na tabela */
        let tBody = document.querySelector('#tabela-pacientes');
        tBody.appendChild(novoRegistroTr);

        /* Limpando os campos após o salvamento */
        dadosForm.reset();

        rotularClass();
    }

    /* Resumindo: para que eu consiga exibir os dados salvos direto no HTML eu preciso criar todos os elementos e vincular todos entre si. Nesse caso as TDs na TR e a TR no TBODY */

    function setarValoresTds(td, tC, classe) {
        td.textContent = tC;
        td.classList.add(classe);
    }

    function validaPeso(peso) {
        if (peso <= 300 && peso > 0) {
            return true;
        } else {
            return false;
        }
    }

    function validaAltura(altura) {
        if (altura <= 3.00 && altura > 0) {
            return true;
        } else {
            return false;
        }
    }
});