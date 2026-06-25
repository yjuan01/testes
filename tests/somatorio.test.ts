import test from "node:test";
import assert from "node:assert/strict";

import { somatorio } from "../index.js";

test("Deve somar uma lista de números positivos", () => {
  assert.deepStrictEqual(somatorio([1, 2, 3]), 6);
  assert.deepStrictEqual(somatorio([10, 20, 30]), 60);
});

test("Deve somar números negativos", () => {
  assert.deepStrictEqual(somatorio([-1, -2, -3]), -6);
});

test("Deve lidar com mistura de positivos e negativos", () => {
  assert.deepStrictEqual(somatorio([-10, 5, 3]), -2);
  assert.deepStrictEqual(somatorio([10, -5, -5]), 0);
});

test("Deve retornar o próprio número quando há apenas um elemento", () => {
  assert.deepStrictEqual(somatorio([5]), 5);
});

test("Deve retornar 0 para lista vazia", () => {
  assert.deepStrictEqual(somatorio([]), 0);
});

test("Deve lidar com infinito", () => {
  assert.deepStrictEqual(somatorio([1, 2, Infinity]), Infinity);
});

test("Deve lidar com -infinito", () => {
  assert.deepStrictEqual(somatorio([-1, -2, -Infinity]), -Infinity);
});
