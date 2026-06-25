import test from "node:test";
import assert from "node:assert/strict";

import { media } from "../index.js";
import { gerarInteiro } from "../helpers.js";

test("Média entre 2 e 4 deve ser 3", () => {
  assert.deepStrictEqual(media(2, 4), 3);
});

test("Média entre 1 e 2 deve ser 1.5", () => {
  assert.deepStrictEqual(media(1, 2), 1.5);
});

test("Média entre 1.25 e 3.25 deve ser 2.25", () => {
  assert.deepStrictEqual(media(1.25, 3.25), 2.25);
});

test("Média entre um número e infinito", () => {
  assert.deepStrictEqual(media(gerarInteiro(), Infinity), Infinity);
});

test("Média entre -69 e 67 deve ser -1", () => {
  assert.deepStrictEqual(media(-69, 67), -1);
});
