import test from "node:test";
import assert from "node:assert/strict";

import { removerDuplicados } from "../index.js";

test("Deve remover caracteres duplicados em uma string simples", () => {
  assert.deepStrictEqual(removerDuplicados("aabbcc"), "abc");
  assert.deepStrictEqual(removerDuplicados("aaaa"), "a");
  assert.deepStrictEqual(removerDuplicados("abca"), "abc");
});

test("Deve manter ordem dos caracteres", () => {
  assert.deepStrictEqual(removerDuplicados("banana"), "ban");
  assert.deepStrictEqual(removerDuplicados("programacao"), "progamc");
});

test("Deve funcionar com letras maiúsculas e minúsculas", () => {
  assert.deepStrictEqual(removerDuplicados("AaBb"), "AaBb");
});

test("Deve remover duplicados ignorando espaços", () => {
  assert.deepStrictEqual(removerDuplicados("a a b b"), "ab");
});

test("Deve retornar mensagem de erro para string vazia", () => {
  assert.deepStrictEqual(removerDuplicados(""), "Me dê caracteres");
});
