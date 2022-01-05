/*
1 - Criar métodos para conversão da data para utilização na negociação;
2 - Modificar a classe DateHelper para ser uma classe com métodos estático, não havendo a necessidade de instancia-la para utilizar seus métodos e sim
chamar diretamento o método, assim: "DateHelper.textoParaData(texto)" ao invés de "var dateHelper = new DateHelper" e "dateHelper.textoParaData(texto)".
Isso é possível a partir da inclusão do "static" a frente de cada método;
3 - Adição do erro "throw new Error('DataHelper não pode ser instanciada.')" dentro do construtor para ser exibido toda vez que houver 
uma tentativa de instanciar uma nova DateHelper;
4 - Inclusão de validação do formato da data em string, aaaa-mm-dd, no método "textoParaData(texto)". A expressão regular sempre é feita dentro de /.../,
e o "d{n}" é o número de dígitos que essa parte da expressão deve ter. O ".test(texto)" cria uma validação que responde true ou false conferindo se a
expressão está dentro dos requisitos da expressão regular. Também foi criado um "throw new Error()" para ser exibido no console no lugar do erro padrão;
*/

class DateHelper {
    constructor() {
        throw new Error('DataHelper não pode ser instanciada.');
    }

    static textoParaData(texto) {
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
            throw new Error('A data deve estar no formato aaaa-mm-dd');
        }
        return new Date(texto.split('-')[0], texto.split('-')[1] - 1, texto.split('-')[2]);
    }

    static dataParaTexto(data, texto) {
        return `${texto.split('-')[2]}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }
}