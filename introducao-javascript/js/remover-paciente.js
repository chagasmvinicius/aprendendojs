/* Removendo pacientes da tabela a partir de um duplo click com o mouse */

/* Declarando a tabela de pacientes */
let pacientes = document.querySelectorAll('.paciente');

/* Percorrendo o array com a tabela de pacientes e buscando pelo evento de duplo click */
pacientes.forEach(function (paciente) {
    paciente.addEventListener('dblclick', function () {
        //confirm('Você está prestes a deletar o registro da tabela. Tem certeza que deseja prosseguir?');
        console.log(`${new Date}: o registro abaixo foi deletado da tabela: ${paciente.textContent}`);
        this.remove(); //OU paciente.remove();
    })
});