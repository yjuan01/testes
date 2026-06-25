import test from "node:test";
import assert from "node:assert/strict";

import { ehPrimo } from "../index.js";
import { gerarLimite, gerarNegativo } from "../helpers.js";

test("Deve identificar números primos corretamente", () => {
  assert.deepStrictEqual(ehPrimo(2), true);
  assert.deepStrictEqual(ehPrimo(3), true);
  assert.deepStrictEqual(ehPrimo(5), true);
  assert.deepStrictEqual(ehPrimo(7), true);
  assert.deepStrictEqual(ehPrimo(11), true);
});

test("Deve retornar false para números não primos", () => {
  assert.deepStrictEqual(ehPrimo(0), false);
  assert.deepStrictEqual(ehPrimo(1), false);
  assert.deepStrictEqual(ehPrimo(4), false);
  assert.deepStrictEqual(ehPrimo(6), false);
  assert.deepStrictEqual(ehPrimo(8), false);
  assert.deepStrictEqual(ehPrimo(9), false);
  // assert.deepStrictEqual(ehPrimo(10), false);
});

test("Deve retornar mensagem de erro para números negativos", () => {
  assert.deepStrictEqual(
    ehPrimo(gerarNegativo()),
    "Me dê um número maior ou igual a 0",
  );
});

test("Deve retornar mensagem de erro para número decimal", () => {
  assert.deepStrictEqual(ehPrimo(gerarLimite()), "Me dê um número inteiro");
});
