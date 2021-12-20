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
	imcs[index].innerHTML = objTabelaPacientes.imcs[index];
}