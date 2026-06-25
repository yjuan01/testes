import test from "node:test";
import assert from "node:assert/strict";

import { ehPalindromo } from "../index.js";

test("Deve identificar palíndromos simples", () => {
  assert.deepStrictEqual(ehPalindromo("arara"), true);
  assert.deepStrictEqual(ehPalindromo("ovo"), true);
  assert.deepStrictEqual(ehPalindromo("ana"), true);
});

test("Deve retornar false para palavras que não são palíndromos", () => {
  assert.deepStrictEqual(ehPalindromo("teste"), false);
  assert.deepStrictEqual(ehPalindromo("javascript"), false);
});

test("Deve funcionar com letras maiúsculas e minúsculas", () => {
  assert.deepStrictEqual(ehPalindromo("Arara"), true);
  assert.deepStrictEqual(ehPalindromo("Ovo"), true);
});

test("Deve ignorar espaços", () => {
  assert.deepStrictEqual(ehPalindromo("ar ara"), true);
  assert.deepStrictEqual(ehPalindromo("a n a"), true);
});

test("Deve retornar mensagem de erro para string vazia", () => {
  assert.deepStrictEqual(ehPalindromo(""), "Me dê uma palavra para verificar");
});
