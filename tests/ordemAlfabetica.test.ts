import test from "node:test";
import assert from "node:assert/strict";

import { ordemAlfabetica } from "../index.js";

test("Deve ordenar letras em ordem alfabética", () => {
  assert.deepStrictEqual(ordemAlfabetica("cba"), "abc");
  assert.deepStrictEqual(ordemAlfabetica("dcba"), "abcd");
  assert.deepStrictEqual(ordemAlfabetica("banana"), "aaabnn");
});

test("Deve funcionar com letras maiúsculas e minúsculas", () => {
  assert.deepStrictEqual(ordemAlfabetica("cBa"), "abc");
  assert.deepStrictEqual(ordemAlfabetica("BaNaNa"), "aaabnn");
});

test("Deve ignorar espaços", () => {
  assert.deepStrictEqual(ordemAlfabetica("c b a"), "abc");
});

test("Deve retornar a própria letra quando há apenas um caractere", () => {
  assert.deepStrictEqual(ordemAlfabetica("a"), "a");
});

test("Deve retornar mensagem de erro para string vazia", () => {
  assert.deepStrictEqual(ordemAlfabetica(""), "Me dê caracteres");
});
