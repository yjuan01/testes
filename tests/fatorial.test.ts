import test from "node:test";
import assert from "node:assert/strict";

import { fatorial } from "../index.js";
import { gerarLimite, gerarLimiteInteiro, gerarNegativo } from "../helpers.js";

test("Deve calcular o fatorial de 0", () => {
  assert.deepStrictEqual(fatorial(0), 1);
});

test("Deve calcular o fatorial de 1", () => {
  assert.deepStrictEqual(fatorial(1), 1);
});

test("Deve calcular o fatorial de outros números", () => {
  assert.deepStrictEqual(fatorial(2), 2);
  assert.deepStrictEqual(fatorial(3), 6);
  assert.deepStrictEqual(fatorial(4), 24);
  assert.deepStrictEqual(fatorial(5), 120);
});

test("Deve retornar mensagem de erro para número negativo", () => {
  assert.deepStrictEqual(
    fatorial(gerarNegativo()),
    "Me dê um número maior ou igual a 0",
  );
});

test("Deve retornar mensagem de erro para número decimal", () => {
  assert.deepStrictEqual(fatorial(gerarLimite()), "Me dê um número inteiro");
});

test("Deve retornar mensagem de erro para números acima de 170", () => {
  assert.deepStrictEqual(
    fatorial(gerarLimiteInteiro(171)),
    "Me dê um número menor ou igual a 170",
  );
});
