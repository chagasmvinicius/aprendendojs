let filtro = document.querySelector('#filtrar-tabela');
let pacientes = document.querySelectorAll('.paciente');

/*
1 - Adicionar evento para ouvir o teclado (input);
2 - Salvar o valor do input do teclado na variável "valorFiltro" com .value;
3 - Percorrer o array de pacientes;
4 - Dentro do array de pacientes percorrer os TDs com os nomes dos pacientes buscando se o conteúdo de texto (textContent) é igual ao input;
5 - Caso seja, adicionar uma classe CSS que dá um display-none no TD. Caso não seja, remover a classe;
6 - O primeiro if, no início, é para conferir se o usuário já digitou algo ou não;
7 - Utilizei Expressão Regular (new RegExp()) para tornar a busca dinâmica. Composição new Regex(valor a ser buscado, "flag*");     
* A flag "i" é para declarar que não queremos que haja distinção entre letras maiúsculas e minúsculas. 
8 - O código comentado foi realizando quase a mesma funcionalidade separadas as letras da palavra com "substr".
*/

filtro.addEventListener('input', function () {
    let valorFiltro = this.value;
    if (valorFiltro.length > 0) {
        pacientes.forEach(function (paciente) {
            let tdNome = paciente.querySelector('.info-nome');
            let expressao = new RegExp(valorFiltro, 'i');
            if (!expressao.test(tdNome.textContent)) {
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
            //           let nome = tdNome.textContent.toLowerCase();
            //           let letrasDigitadas = nome.substr(0, valorFiltro.length);
            //           if (!(valorFiltro.toLowerCase() == letrasDigitadas)) {
            //               paciente.classList.add('invisivel');
            //           } else {
            //               paciente.classList.remove('invisivel');
            //           }
            //            console.log(letrasDigitadas);
        });
    } else {
        pacientes.forEach(function (paciente) {
            paciente.classList.remove('invisivel');
        });
    }
});