import test from "node:test";
import assert from "node:assert/strict";

import { maiorDaLista } from "../index.js";

test("Deve retornar o maior número de uma lista simples", () => {
  assert.deepStrictEqual(maiorDaLista([1, 2, 3]), 3);
  assert.deepStrictEqual(maiorDaLista([10, 5, 8]), 10);
});

test("Deve funcionar com números negativos", () => {
  assert.deepStrictEqual(maiorDaLista([-1, -2, -3]), -1);
  assert.deepStrictEqual(maiorDaLista([-10, -5, -8]), -5);
});

test("Deve retornar o próprio número quando há apenas um elemento", () => {
  assert.deepStrictEqual(maiorDaLista([42]), 42);
});

test("Deve funcionar com números decimais", () => {
  assert.deepStrictEqual(maiorDaLista([1.5, 2.3, 3.1]), 3.1);
  assert.deepStrictEqual(maiorDaLista([10.5, 10.2, 10.9]), 10.9);
});

test("Deve funcionar com negativos e decimais", () => {
  assert.deepStrictEqual(maiorDaLista([-1.5, -2.3, -0.1]), -0.1);
});

test("Deve lidar com zero", () => {
  assert.deepStrictEqual(maiorDaLista([0, -1, -2]), 0);
});

test("Deve lidar com infinito", () => {
  assert.deepStrictEqual(maiorDaLista([1, 2, Infinity]), Infinity);
});

test("Deve lidar com -infinito", () => {
  assert.deepStrictEqual(maiorDaLista([-Infinity, -1, -2]), -1);
});

test("Deve retornar uma mensagem de erro quando a lista está vazia", () => {
  assert.deepStrictEqual(maiorDaLista([]), "Me dê números");
});
