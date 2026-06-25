import test from "node:test";
import assert from "node:assert/strict";

import { aprovado } from "../index.js";
import { gerarLimite, gerarNegativo } from "../helpers.js";

test("Deve retornar se o aluno está aprovado ou reprovado dependendo da nota", () => {
  assert.deepStrictEqual(aprovado(0), "Reprovado");
  assert.deepStrictEqual(aprovado(1), "Reprovado");
  assert.deepStrictEqual(aprovado(2), "Reprovado");
  assert.deepStrictEqual(aprovado(3), "Reprovado");
  assert.deepStrictEqual(aprovado(4), "Reprovado");
  assert.deepStrictEqual(aprovado(5), "Reprovado");
  assert.deepStrictEqual(aprovado(6), "Reprovado");
  assert.deepStrictEqual(aprovado(7), "Aprovado");
  assert.deepStrictEqual(aprovado(8), "Aprovado");
  assert.deepStrictEqual(aprovado(9), "Aprovado");
  assert.deepStrictEqual(aprovado(10), "Aprovado");
});

test("Deve retornar uma mensagem de erro se passarmos número negativo", () =>
  assert.deepStrictEqual(aprovado(gerarNegativo()), "Me dê uma nota positiva"));

test("Deve retornar uma mensagem de erro se passarmos um número maior que 10", () => {
  assert.deepStrictEqual(aprovado(11), "Me dê uma nota válida");
});

test("Deve retornar se o aluno está aprovado ou não dependendo da nota decimal", () => {
  assert.deepStrictEqual(aprovado(gerarLimite(0, 6)), "Reprovado");
  assert.deepStrictEqual(aprovado(gerarLimite(7, 10)), "Aprovado");
});
