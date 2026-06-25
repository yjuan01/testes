import test from "node:test";
import assert from "node:assert/strict";

import { soma } from "../index.js";

test("Deve somar dois números e retornar a soma", () => {
  assert.deepStrictEqual(soma(1, 1), 2);
});

test("Deve retornar erro se o usuário passar parâmetros que não são números", () => {
  // @ts-ignore
  assert.deepStrictEqual(soma("string", true), "Me envie números!");
});

test("Deve retornar erro se não tiver um parametro", () => {
  // @ts-ignore
  assert.deepStrictEqual(soma(), "Me envie números!");
});
