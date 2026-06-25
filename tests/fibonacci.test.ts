import test from "node:test";
import assert from "node:assert/strict";

import { fibonacci } from "../index.js";
import { gerarLimite, gerarLimiteInteiro, gerarNegativo } from "../helpers.js";

test("Deve retornar o primeiro número da sequência de Fibonacci se passarmos 1", () => {
  assert.deepEqual(fibonacci(1), [1]);
});

test("Deve retornar os 2 primeiros números da sequência de Fibonacci se passarmos 2", () => {
  assert.deepEqual(fibonacci(2), [1, 1]);
});

test("Deve retornar os 5 primeiros números da sequência de Fibonacci se passarmos 5", () => {
  assert.deepEqual(fibonacci(5), [1, 1, 2, 3, 5]);
});

test("Deve retornar uma lista vazia se passarmos 0", () => {
  assert.deepEqual(fibonacci(0), []);
});

test("Deve retornar uma mensagem de erro se passarmos um número negativo", () => {
  assert.deepEqual(fibonacci(gerarNegativo()), "Me dê um número positivo!");
});

test("Deve retornar uma mensagem de erro se passarmos um número decimal", () => {
  assert.deepEqual(fibonacci(gerarLimite()), "Me dê um número inteiro!");
});

test("Deve retornar uma mensagem de erro se passarmos um número maior que 50", () => {
  assert.deepEqual(
    fibonacci(gerarLimiteInteiro(51)),
    "Me dê um número menor ou igual a 50",
  );
});
