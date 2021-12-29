CHECKPOINTS

1) Aulas sobre Git e GitHub ✅
2) Configuração do Git e GitHub ✅
3) Aulas sobre HTTP/HTTPS ✅
4) Introdução javascript (introducao-javascript):
5) Uitlizando a função do DOM (Document Object Model) "document.querySelector()" para identificar o ID ("# + id", ou para class seria ". + id") do H1 do título do index.html para trocar o conteúdo de texto do título com a função ".textContent = novoConteudoTexto" (.innerHTML). ✅
6) Extraindo o script de dentro do HTML para um novo arquivo (/js/principal.js). Para que funcione é necessário referenciar (source/src) esse arquivo dentro da tag script, dentro do HTML com a linha de código: <script src="./js/principal.js"></script> ✅
7) Manipulando a tabela de IMCs, extraindo os dados com o querySelector e adicionando com innerHTML o cálculo do IMC nas células da tabela; ✅
8) Adicionando validação de peso ou altura inválido para o cálculo do IMC (imcs <= 0 || imcs >= 110); ✅
9) Adicionando coluna "Classificação" para inserir a classificação do IMC; ✅
10) Encapsulamento do código até aqui em funções (calcularImc(), rotularClass()); ✅
11) Criando função "mudarCor()" para mudar de cor de acordo com o rótulo; ✅
12) Trocar cor do título adicionando uma class via javascript (.classList.add(classe)) ao invés de usar o (.style); ✅
13) Adicionando no HMTL a parte do formulário de cadastro de um novo paciente; ✅
14) Utilizando o .addEventListener(event, function) para criar a ação após o evento do click do mouse no botão "Adicionar" para encaixar uma nova linha da tabela de pacientes; ✅
15) Utilizar o event.preventDefault() para impedir o comportação padrão do botão "Adicionar"; ✅
16) Puxando as informações dos inputs do formulário e salvando. Obs.: como é um form, através do querySelector eu posso "caminhar" pelas seções/inputs através da tag "name" da marcação; ✅
17) Criando novas linhas na tabela de pacientes criando "tr" e "td" para cada paciente e suas infos (document.createElement('td' ou 'tr')); ✅
18) Colocando os valores dentro das tds com td.textContent = valorDoInput.value; ✅
19) Criando o vínculo de pai e filhas entre a tr e as tds (novoRegistroTr.appendChild(novoRegistroTd1)). Resumindo: para que eu consiga exibir os dados salvos direto no HTML eu preciso criar todos os elementos e vincular todos entre si. Nesse caso as TDs na TR e a TR no TBODY; ✅
20) Dividindo as funcionalidades do meu código js em arquivos diferentes. 1) Criação do arquivo "form.js" 2) Inclusão do <script src="./js/form.js"></script> no arquivo "index.html" ✅
21) Trocando nome do antigo arquivo "principal,js" para "calculo-e-rotulo", <script src="./js/calculo-e-rotulo.js"></script>; ✅
22) Usando a função calcularImcForm() para calcular o IMC dos novos registros da tabela; ✅
23) Limpando os campos do formulário após o salvamento com variavelForm.reset(); ✅
24) Adicionando .replace(',', '.') para substituir os valores recolhidos nos inputs com ',' por '.' para o cálculo do IMC funcionar independente da maneira que o input for enviado; ✅
25) Inclusão da validação de peso e altura no formulário, assim que o input é enviado; ✅
26) Mudando a mensagem de "Dados inválidos" para um span acima do form; ✅
27) Alterando alguns "for" por "forEach": vetor.forEach(function(index) { o que fazer com as infos do vetor }); ✅
28) Criação do arquivo remover-paciente.js para a funcionalidade de remoção de pacientes da tabela; ✅
29) Criando a funcionalidade de remover paciente da tabela com "let exemplo = document.querySelector() / exemplo.addEventListener('click', function(event) { event.target.parentNode.remove() })". Sendo que o event.target "quem" foi clicado e o parentNode é o pai de quem foi clicado; ✅