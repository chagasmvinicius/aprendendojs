/* [#1] Mudando o texto dentro de um H1 com ID específico  */
var titleH1 = document.querySelector(".titleH1");
titleH1.textContent = "Vinicius Chagas"; // ou titleH1.innerHTML = "Vinicius Chagas";
console.log(`Título alterado para ${titleH1.textContent}!`);

/* [#3] Calculando IMC da tabela puxando os dados com querySelector: */
let objTabelaPacientes = {
	nomes: [],
	pesos: [],
	alturas: [],
	gorduras: [],
	imcs: []
}

function calcularImc() {
	/* Buscar as informações dos pacientes na tabela, calcular o IMC e escrever na tabela  */

	let nomes = document.querySelectorAll('.info-nome'); // buscando os nomes na tabela e puxando para o array
	for (let index = 0; index < nomes.length; index++) {
		objTabelaPacientes.nomes.push(nomes[index].textContent);
	}

	let pesos = document.querySelectorAll('.info-peso');  // buscando os pesos na tabela e puxando para o array
	for (let index = 0; index < pesos.length; index++) {
		objTabelaPacientes.pesos.push(Number(pesos[index].textContent));
	}

	let alturas = document.querySelectorAll('.info-altura'); // buscando as alturas na tabela e puxando para o array
	for (let index = 0; index < alturas.length; index++) {
		objTabelaPacientes.alturas.push(Number(alturas[index].textContent));
	}

	let gorduras = document.querySelectorAll('.info-gordura'); // buscando as gorduras na tabela e puxando para o array
	for (let index = 0; index < gorduras.length; index++) {
		objTabelaPacientes.gorduras.push(Number(gorduras[index].textContent));
	}

	for (let index = 0; index < pesos.length && index < alturas.length; index++) { // rodando nos arrays de peso e altura para calcular o IMC
		let calc = (Number(pesos[index].textContent) / (Number(alturas[index].textContent) * Number(alturas[index].textContent))).toFixed(2)
		objTabelaPacientes.imcs.push(calc);
	}

	let imcs = document.querySelectorAll('.info-imc'); // rodando no array de IMCs coletados da tabela e substituindo pelos IMCs amazenados no objeto
	for (let index = 0; index < imcs.length && index < objTabelaPacientes.imcs.length; index++) {
		if (objTabelaPacientes.imcs[index] <= 0 || objTabelaPacientes.imcs[index] >= 110) {
			imcs[index].innerHTML = 'Peso ou altura inválidos!';
		} else {
			imcs[index].innerHTML = objTabelaPacientes.imcs[index];
		}
	}
}

function rotularClass() {

	/* Confere o IMC do paciente e rotula na coluna "Classificação"  */
	let classificacao = document.querySelectorAll('.info-classificacao');
	for (let index = 0; index < classificacao.length && index < objTabelaPacientes.imcs.length; index++) {
		if (objTabelaPacientes.imcs[index] <= 0 || objTabelaPacientes.imcs[index] >= 110) {
			classificacao[index].innerHTML = 'N/A';
		} else if (objTabelaPacientes.imcs[index] < 18.5) {
			classificacao[index].innerHTML = 'Abaixo do peso normal';
			mudarCor('#FFD700', 'black', classificacao[index]);
		} else if (objTabelaPacientes.imcs[index] >= 18.5 && objTabelaPacientes.imcs[index] <= 24.9) {
			classificacao[index].innerHTML = 'Peso normal';
			mudarCor('#98FB98', 'black', classificacao[index]);
		} else if (objTabelaPacientes.imcs[index] >= 25 && objTabelaPacientes.imcs[index] <= 29.9) {
			classificacao[index].innerHTML = 'Excesso de peso';
			mudarCor('#FFD700', 'black', classificacao[index]);
		} else if (objTabelaPacientes.imcs[index] >= 30 && objTabelaPacientes.imcs[index] <= 34.9) {
			classificacao[index].innerHTML = 'Obesidade classe I';
			mudarCor('#FA8072', 'black', classificacao[index]);
		} else if (objTabelaPacientes.imcs[index] >= 35 && objTabelaPacientes.imcs[index] <= 39.9) {
			classificacao[index].innerHTML = 'Obesidade classe II';
			mudarCor('#FF4500', 'black', classificacao[index]);
		} else if (objTabelaPacientes.imcs[index] >= 40) {
			classificacao[index].innerHTML = 'Obesidade classe III';
			mudarCor('#B22222', 'white', classificacao[index]);
		}
	}

	function mudarCor(background, font, tag) {
		tag.style.color = font;
		tag.style.backgroundColor = background;
	}
}

calcularImc();
rotularClass();