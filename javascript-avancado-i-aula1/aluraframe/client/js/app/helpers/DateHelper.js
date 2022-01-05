/*
1 - Criar métodos para conversão da data para utilização na negociação;
*/

class DateHelper {
    textoParaData(texto) {
        return new Date(texto.split('-')[0], texto.split('-')[1]-1, texto.split('-')[2]);
    }

    dataParaTexto(data, texto) {
        return `${texto.split('-')[2]}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }
}