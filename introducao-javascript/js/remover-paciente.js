/* Removendo pacientes da tabela a partir de um duplo click com o mouse */

/* Declarando a tabela de pacientes */
let tabelaPacientes = document.querySelector('#tabela-pacientes');

/* Percorrendo a tabela de pacientes e buscando pelo evento de duplo click */
tabelaPacientes.addEventListener('dblclick', function (event) {
    //confirm('Você está prestes a deletar o registro da tabela. Tem certeza que deseja prosseguir?');
    alvoDoEvento = event.target;
    paiDoAlvo = alvoDoEvento.parentNode; //no caso temos que remover a TR que é o pai do alvo (TD)
    paiDoAlvo.classList.add('fadeOut');
    setTimeout(function() { //aguardar 0.5 segundos para executar o remover para dar tempo da animação rodar
        paiDoAlvo.remove();
    }, 500);
    console.log(`${new Date}: o registro abaixo foi deletado da tabela: ${paiDoAlvo.textContent}`);
});