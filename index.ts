export function soma(number1: number, number2: number) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return "Me envie números!";
  }
  return number1 + number2;
}

export function fibonacci(quantity: number) {
  if (!Number.isInteger(quantity)) return "Me dê um número inteiro!";
  if (quantity < 0) return "Me dê um número positivo!";
  if (quantity > 50) return "Me dê um número menor ou igual a 50";
  if (quantity === 0) return [];

  const seq = [1, 1];
  for (let i = 2; i < quantity; i++) {
    seq.push((seq[i - 1] ?? 0) + (seq[i - 2] ?? 0));
  }
  return seq.slice(0, quantity);
}

export function media(number1: number, number2: number) {
  return (number1 + number2) / 2;
}

export function ehPar(numero: number) {
  if (!isFinite(numero)) return "Me passe um número finito";
  return numero % 2 === 0;
}

export function maior(numero1: number, numero2: number) {
  if (numero1 === numero2) return "Números iguais";
  return numero1 > numero2 ? numero1 : numero2;
}

export function menor(numero1: number, numero2: number) {
  if (numero1 === numero2) return "Números iguais";
  return numero1 < numero2 ? numero1 : numero2;
}

export function aprovado(nota: number) {
  if (nota < 0) return "Me dê uma nota positiva";
  if (nota > 10) return "Me dê uma nota válida";
  return nota >= 7 ? "Aprovado" : "Reprovado";
}

export function categoriaIdade(idade: number) {
  if (idade < 0) return "Me dê uma idade positiva";
  if (!Number.isInteger(idade)) return "Me dê uma idade inteira";
  if (idade <= 2) return "Bebê";
  if (idade <= 12) return "Criança";
  if (idade <= 17) return "Adolescente";
  if (idade <= 59) return "Adulto";
  if (idade <= 110) return "Idoso";
  return "Defunto";
}

export function contarCaracteres(texto: string, letra: string) {
  if (letra.length !== 1) return "Me dê um caracter para verificar a quantidade";
  return texto.split("").filter((c) => c === letra).length;
}

export function inverter(texto: string) {
  if (texto.length === 0) return "Me dê uma string";
  if (texto.length === 1) return "Me dê uma string com no mínimo 2 caracteres";
  return texto.split("").reverse().join("");
}

export function contarVogais(texto: string) {
  return (texto.match(/[aeiouáéíóúâêîôûàèìòùãõÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙÃÕ]/gi) || []).length;
}

export function somatorio(numeros: number[]) {
  return numeros.reduce((acc, n) => acc + n, 0);
}

export function maiorDaLista(numeros: number[]) {
  if (numeros.length === 0) return "Me dê números";
  return Math.max(...numeros);
}

export function mediaDaLista(numeros: number[]) {
  if (numeros.length === 0) return "Me dê números";
  const result = somatorio(numeros) / numeros.length;
  return parseFloat(result.toPrecision(10));
}

export function contagemRegressiva(quantidade: number) {
  if (!Number.isInteger(quantidade)) return "Me dê um número inteiro";
  if (quantidade < 0) return "Me dê um número positivo";
  const result = [];
  for (let i = quantidade; i >= 0; i--) result.push(i);
  return result;
}

export function fatorial(numero: number) {
  if (!Number.isInteger(numero)) return "Me dê um número inteiro";
  if (numero < 0) return "Me dê um número maior ou igual a 0";
  if (numero > 170) return "Me dê um número menor ou igual a 170";
  if (numero === 0 || numero === 1) return 1;
  let result = 1;
  for (let i = 2; i <= numero; i++) result *= i;
  return result;
}

export function ehPalindromo(texto: string) {
  if (texto.length === 0) return "Me dê uma palavra para verificar";
  const normalizado = texto.toLowerCase().replace(/\s/g, "");
  return normalizado === normalizado.split("").reverse().join("");
}

export function ehPrimo(numero: number) {
  if (!Number.isInteger(numero)) return "Me dê um número inteiro";
  if (numero < 0) return "Me dê um número maior ou igual a 0";
  if (numero < 2) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

export function removerDuplicados(texto: string) {
  if (texto.length === 0) return "Me dê caracteres";
  const semEspacos = texto.replace(/\s/g, "");
  return [...new Set(semEspacos.split(""))].join("");
}

export function ordemAlfabetica(texto: string) {
  if (texto.length === 0) return "Me dê caracteres";
  return texto
    .toLowerCase()
    .replace(/\s/g, "")
    .split("")
    .sort()
    .join("");
}

export function contarPalavras(texto: string) {
  return texto.trim().split(/\s+/).filter((w) => w.length > 0).length;
}