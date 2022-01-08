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
59) Modificar a classe DateHelper para ser uma classe com métodos estático, não havendo a necessidade de instancia-la para utilizar seus métodos e sim chamar diretamento o método, assim: "DateHelper.textoParaData(texto)" ao invés de "var dateHelper = new DateHelper" e "dateHelper.textoParaData(texto)" Isso é possível a partir da inclusão do "static" a frente de cada método; ✅
60) Adição do erro "throw new Error('DataHelper não pode ser instanciada.')" dentro do construtor para ser exibido toda vez que houver uma tentativa de instanciar uma nova DateHelper; ✅
61) Inclusão de validação do formato da data em string, aaaa-mm-dd, no método "textoParaData(texto)". A expressão regular sempre é feita dentro de /.../, e o "d{n}" é o número de dígitos que essa parte da expressão deve ter. O ".test(texto)" cria uma validação que responde true ou false conferindo se a expressão está dentro dos requisitos da expressão regular. Também foi criado um "throw new Error()" para ser exibido no console no lugar do erro padrão; ✅
62) Criação da classe "ListaNegociacoes" dentro de app/models. Essa classe é responsável por criar uma lista com as negociações inputadas e conter os métodos para adicionar novas negociações (push no array) e um get para retornar a lista atualizada; ✅
63) Criação do método para limpar o formulário (_limpaFormulario()) após a ação da negociação na lista. Usei a função ".reset()"; ✅
64) Inserir programação defensiva para blindar o método "get negociacoes()" para retornar uma cópia da lista original (return [].concat(this_negociacoes)). Dessa forma, se quiserem, através do console, limpar os dados do array com ".length = 0" ou utilizar diretamente o ".push" para adiconar novas negociações no array, não irá alterar a lista original, pois estamos enviando uma cópia dela nesse método; ✅
65) Criação da classe "NegociacoesVew"; ✅
66) Criação do método "template()" que é responsável por armazenar o template string (``) de todo HTML da tabela; ✅
67) Inclusão do constructor da classe NegociacoesView que irá receber o elemento div com o ID correto para ser a marcação de onde a tabela deve ser inserida. A chamada do elemento foi feita na classe NegociacaoController (this._negociacoesView = new NegociacoesView($('#negociacoesView'))); ✅
68) Criação do método "update()" que será responsável por introduzir na div (this._elemento) o return do template (tabela); ✅
69) Evolução do template string para construir a TR e TDs no HTML. Para isso percorremos a lista de negociações (model.negociacoes) com o método ".map".
A transformação de lista/array para string utilizamos o método ".join('')" que unifica os dados do array com o " " entre eles. Não daria certo utilizar o
método ".string()" porque esse método por padrão adiciona vírgula entre os elementos do array; ✅
70) Inclusão no <tfoot></tfoot> de TDs para contabilizar o volume total das negociações. O "colspan=3" significa que a TD precisa ocupar 3 colunas; ✅
71) Totalizando o volume com forEach na lista de negociacoes.volume + uma função autoexecutável (function() {} ();); ✅
72) Utilizando o método ".reduce()" na lista de negociações para somar o valor total do volume. Sintaxe do reduce: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce; ✅
73) riação da classe "MensagemView" que irá conter a construção da marcação no HTML para ser exibida a mensagem e um método, "update model)", para atualizar/iserir a mensagem no HTML; ✅
74) Criação da classe "Mensagem" que será responsável pelo armanezamento dos textos de todas as mensagens que a aplicação precisar exibir.
Além disso também criamos métodos para alterar um texto, "set texto()", e outro para puxar a informação de um texto, "get texto()"; ✅
75) Criação da classe pai "View" para acumular os métodos comuns dentre as outras viewers para que possamos herdá-los em cada uma e utilizar esses métodos em cada uma, sem a necessidade de repetir código. Basta declarar nas classes filhas, que essas são extensões dessa classe pai (extends). Além disso, em caso de métodos que possuem parâmetros, devemos em cada classe filha utilizar o método "super(parâmetro)" dentro do construtor para que o parâmetro em questão seja enviado à classe pai. Obs.: ao chamar o arquivo "View.js" no HTML é necessário chamá-lo antes dos arquivos das classes filhas, pois esse arquivo precisa ser carregado antes pelo HTML; ✅
76) Importação dos métodos "update()" e do constructor da classe "View" como herança, através a declaração "class NegociacoesView extends View". Dessa forma, o construtor utiliza o método "super()" para enviar o parâmetro ao pai e utilizamos os métodos herdados da classe pai "View"; ✅

📍 JAVASCRIPT PARA BACKEND (pasta "fundamentos-javascript")
Obs.: acabei iniciando esse curso após ter feito os dois anteriores voltados para web. Por conta disso, acabei só salvando aqui alguns exercícios-chave para aprimorar o meu conhecimento.

77) Iniciando exercícios práticos de arrays utilizando forEach; ✅
78) Exercícios e testes utilizando alguns dos principais métodos de um Array (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array). Está tudo detalhado no arquivo "array.js"; ✅
79) Atualização da lista de familiares com duas dimensões ordenadas: nome, idade; ✅
80) Utilização de lista bidimensional "const array3 = [array1, array2]"; ✅
81) Utilização do método .map(); ✅
82) Utilização do método .reduce((acumulador, valorAtual) => {}) para calcular uma média de valores; ✅