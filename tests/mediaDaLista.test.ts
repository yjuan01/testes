import test from "node:test";
import assert from "node:assert/strict";

import { mediaDaLista } from "../index.js";

test("Deve calcular a média de uma lista simples", () => {
  assert.deepStrictEqual(mediaDaLista([1, 2, 3]), 2);
  assert.deepStrictEqual(mediaDaLista([10, 20, 30]), 20);
});

test("Deve funcionar com números negativos", () => {
  assert.deepStrictEqual(mediaDaLista([-1, -2, -3]), -2);
  assert.deepStrictEqual(mediaDaLista([-10, 10]), 0);
});

test("Deve lidar com mistura de positivos e negativos", () => {
  assert.deepStrictEqual(mediaDaLista([-10, 0, 10]), 0);
  assert.deepStrictEqual(mediaDaLista([5, 10, 15]), 10);
});

test("Deve retornar o próprio número quando há apenas um elemento", () => {
  assert.deepStrictEqual(mediaDaLista([42]), 42);
});

test("Deve calcular média com números decimais", () => {
  assert.deepStrictEqual(mediaDaLista([1.5, 2.5, 3.5]), 2.5);
  assert.deepStrictEqual(mediaDaLista([10.2, 10.4, 10.6]), 10.4);
});

test("Deve funcionar com mistura de inteiros e decimais", () => {
  assert.deepStrictEqual(mediaDaLista([1, 2.6, 3]), 2.2);
});

test("Deve retornar mensagem de erro se a lista estiver vazia", () => {
  assert.deepStrictEqual(mediaDaLista([]), "Me dê números");
});

test("Deve lidar com infinito", () => {
  assert.deepStrictEqual(mediaDaLista([1, 2, Infinity]), Infinity);
});

test("Deve lidar com -infinito", () => {
  assert.deepStrictEqual(mediaDaLista([-Infinity, -2, -4]), -Infinity);
});
