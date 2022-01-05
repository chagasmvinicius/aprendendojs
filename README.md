🏁 CHECKPOINTS

📍 GIT e GITHUB

1) Aulas sobre Git e GitHub; ✅
2) Configuração do Git e GitHub; ✅

📍 HTTP 

3) Aulas sobre HTTP/HTTPS; ✅

📍 JAVASCRIPT: PROGRAMANDO NA LINGUAGEM DA WEB (pasta "introducao-javascript")

4) Introdução javascript (introducao-javascript);
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
30) Adicionando animação no CSS para remoção da linha da tabela e utilizando setTimeout para deixar visível a animação antes de remover a linha; ✅
31) Adicionando evento para escutar e recolher o que foi digitado no teclado (evento "input"); ✅
32) Comparando o que foi digitado no teclado com o array de nomes dos pacientes e sumindo/exibindo com os valores da tabela de acordo com essas validações; ✅
33) Utilizei "Expressão Regular" (new RegExp()) para tornar a busca dinâmica (contém). Curso de expressões regulares: https://cursos.alura.com.br/course/expressoes-regulares; ✅
34) Iniciando a criação do botão "Importando pacientes" que fará uma importação de pacientes de um JSON de uma API externa (https://api-pacientes.herokuapp.com/pacientes); ✅
35) Refatorando função para registrar novas informações na tabela; ✅
36) Finalização da funcionalidade de import de pacientes utilizando o AJAX - Método XMLHttpRequest para puxar (GET) dados de uma API externa (sem validação se os dados já foram puxados ou não). Obs.: utilizei o JSON.parse(json) para transformar a reposta JSON da requisição em um objeto javascript para alimentar a tabela; ✅
37) Colocando validação pelo status code da requisição para alertar o usuário, caso seja diferente de 200, que ocorreu um erro; ✅

📍 JAVASCRIPT: CONHECENDO O BROWSER E PADRÕES DE PROJETO (pasta "javascript-avancado-i-aula1") (Orientação a Objetos)

38) Subindo os novos desenvolvimentos padrão para o github; ✅
39) Inserindo valores na tabela criando TR e TDs para cada coluna; ✅
40) Começando a entender sobre criação de Classes no javascript. Não vamos mais utilizar a maneira criada no index.js. Comentei o código; ✅
41) Criação e início da classe Negociacao (./js/app/models/Negociacao.js); ✅
42) Criação da classe "Negociacao"; ✅
43) Toda função de uma classe (dentro da classe) é um método e é chamada assim; ✅
44) O constructor possui todas as especificações e propriedades da classe; ✅
45) Para chamar uma classe criada é necessário utilizar o "new". Ex.: var negociacao = new Negociacao(param1, paramN); ✅
46) Utilização do "_" a frente das propriedades que não devem ser alteradas ou acionadas diretamente, sem ser pela classe. Essa é uma convenção para que os programadores possam interpretar que essas propriedades são de uma classe e não devem ser acessadas por fora da classe; ✅
47) ara que as propriedades da classe possam ser acessadas (e não manipuladas) criamos, por convenção, métodos para retornar os valores das propriedades. Esse métodos são "getters", ou seja, iniciam com "get", ex.: "get valor()", dessa forma, mesmo que o programador tente alterar o valor dessa propriedade, ele não consegue; ✅
48) Impedindo as alterações com Object.freeze(this) dentro do constutor da classe; ✅
49) Criação da classe NegociacaoController; ✅
50) Criação do método "adiciona()" que irá executar a negociação a partir do submit do formulário; ✅
51) Instanciar o arquivo NegociacaoController.js no index.html; ✅
52) Instanciar a classe NegociacaoController no index.html dentro da tag script: let negociacaoController = new NegociacaoController(); ✅
53) Linkar o método "adiciona()" na tag form: <form class="form" onsubmit="negociacaoController.adiciona(event)">; ✅
54) Puxar as informações de cada input e salvar nas variáveis. O código "let $ = document.querySelector.bind(document)" faz com que fique salvo o valor "document.querySelector" dentro da variável e o ".bind(document)" força que o vínculo sempre seja com o escopo de document; ✅
55) Criar um constructor e lá buscar as informações do input no DOM, dessa forma criamos propriedades na classe e é mais performático; ✅
56) Adicionar ao método "adiciona(event)" a criação de uma negociação: let negociacao = new Negociacao(this._inputData, this._inputQuantidade, this._inputValor); ✅
57) A execução da classe dá data inválida, porém temos como consertar convertendo o valor inicial que é uma string em data, assim: let negociacao = new Negociacao(new Date(this._inputData.value.split('-')[0], this._inputData.value.split('-')[1]-1, this._inputData.value.split('-')[2]), this._inputQuantidade.value, this._inputValor.value); ✅   
58) Criar métodos em uma nova classe, DateHelper, para conversão da data para utilização na negociação (DateHelper.js)); ✅
