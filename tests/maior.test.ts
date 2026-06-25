import test from "node:test";
import assert from "node:assert/strict";

import { maior } from "../index.js";

test("Entre dois números inteiros, deve-se retornar o maior", () => {
  assert.deepStrictEqual(maior(1, 2), 2);
  assert.deepStrictEqual(maior(4, 1), 4);
  assert.deepStrictEqual(maior(6, 7), 7);
  assert.deepStrictEqual(maior(39, 72), 72);
});

test("Entre dois números inteiros positivos ou negativos, deve-se retornar o maior", () => {
  assert.deepStrictEqual(maior(2, -4), 2);
  assert.deepStrictEqual(maior(-1, -2), -1);
  assert.deepStrictEqual(maior(0, -2), 0);
});

test("Entre números decimais, deve-se retornar o maior", () => {
  assert.deepStrictEqual(maior(1.2, 1), 1.2);
  assert.deepStrictEqual(maior(7.3, 7.4), 7.4);
  assert.deepStrictEqual(maior(-9.8, -9.9), -9.8);
});

test("Se os números forem iguais, deve-se retornar uma mensagem", () =>
  assert.deepStrictEqual(maior(7, 7), "Números iguais"));
