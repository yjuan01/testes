import test from "node:test";
import assert from "node:assert/strict";

import { contagemRegressiva } from "../index.js";
import { gerarLimite, gerarNegativo } from "../helpers.js";

test("Deve contar regressivamente a partir de 5", () => {
  assert.deepStrictEqual(contagemRegressiva(5), [5, 4, 3, 2, 1, 0]);
});

test("Deve contar regressivamente a partir de 3", () => {
  assert.deepStrictEqual(contagemRegressiva(3), [3, 2, 1, 0]);
});

test("Deve retornar apenas 0 quando começar em 0", () => {
  assert.deepStrictEqual(contagemRegressiva(0), [0]);
});

test("Deve retornar mensagem de erro para número negativo", () => {
  assert.deepStrictEqual(
    contagemRegressiva(gerarNegativo()),
    "Me dê um número positivo",
  );
});

test("Deve retornar mensagem de erro para número decimal", () => {
  assert.deepStrictEqual(
    contagemRegressiva(gerarLimite()),
    "Me dê um número inteiro",
  );
});
