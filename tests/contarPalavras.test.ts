import test from "node:test";
import assert from "node:assert/strict";

import { contarPalavras } from "../index.js";

test("Deve contar palavras em uma frase simples", () => {
  assert.deepStrictEqual(contarPalavras("oi mundo"), 2);
  assert.deepStrictEqual(contarPalavras("eu gosto de programar"), 4);
});

test("Deve ignorar espaços extras", () => {
  assert.deepStrictEqual(contarPalavras("oi   mundo"), 2);
  assert.deepStrictEqual(contarPalavras("  oi mundo  "), 2);
});

test("Deve funcionar com letras maiúsculas e minúsculas", () => {
  assert.deepStrictEqual(contarPalavras("Oi Mundo"), 2);
  assert.deepStrictEqual(contarPalavras("Eu Gosto De JS"), 4);
});

test("Deve retornar 0 para string vazia ou só espaços", () => {
  assert.deepStrictEqual(contarPalavras(""), 0);
  assert.deepStrictEqual(contarPalavras("   "), 0);
});
