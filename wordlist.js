const consoantes = ["b","c","d","f","g","h","j","l","m","n","p","q","r","s","t","v","x","z","k","y"];
const vogais = ["a","e","i","o","u"];
const numeros = [0,1,2,3,4,5,6,7];
let palavras = [];
let cont = 0;

function criaPalavras() {
	while (cont <= 1000000000) {
		let palavra = "" + pegaConsoante() + "" + pegaVogal() + "" + pegaConsoante() + "" + pegaVogal() + "" + pegaConsoante() + "" + pegaVogal() + "" + pegaNumero() + "" + pegaNumero() + "";

		if (!palavras.includes(palavra)) {
			palavras.push(palavra);
			cont++;
		}
	}
}

function pegaConsoante() {
	let random = Math.floor(Math.random() * 20);

	return consoantes[random];
}

function pegaVogal() {
	let random = Math.floor(Math.random() * 5);
	
	return vogais[random];
}

function pegaNumero() {
	let random = Math.floor(Math.random() * 8);

	return numeros[random];
}

async function inicia() {
    await criaPalavras();
	console.log(palavras.length);
}

inicia();