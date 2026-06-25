import test from "node:test";
import assert from "node:assert/strict";

import { contarVogais } from "../index.js";

test("Deve contar vogais em letras minúsculas", () => {
  assert.deepStrictEqual(contarVogais("a"), 1);
  assert.deepStrictEqual(contarVogais("ae"), 2);
  assert.deepStrictEqual(contarVogais("ovo"), 2);
  assert.deepStrictEqual(contarVogais("casa"), 2);
});

test("Deve contar vogais em letras maiúsculas", () => {
  assert.deepStrictEqual(contarVogais("A"), 1);
  assert.deepStrictEqual(contarVogais("AE"), 2);
  assert.deepStrictEqual(contarVogais("OVO"), 2);
  assert.deepStrictEqual(contarVogais("CASA"), 2);
});

test("Deve contar vogais independente de maiúsculas e minúsculas", () => {
  assert.deepStrictEqual(contarVogais("Casa"), 2);
  assert.deepStrictEqual(contarVogais("Ovo"), 2);
  assert.deepStrictEqual(contarVogais("TesTe"), 2);
});

test("Deve retornar 0 quando não há vogais", () => {
  assert.deepStrictEqual(contarVogais("bcdfg"), 0);
  assert.deepStrictEqual(contarVogais("XYZ"), 0);
});

test("Deve lidar com string vazia", () => {
  assert.deepStrictEqual(contarVogais(""), 0);
});

test("Deve lidar com vogais acentuadas", () => {
  assert.deepStrictEqual(contarVogais("avó"), 2);
  assert.deepStrictEqual(contarVogais("técnico"), 3);
  assert.deepStrictEqual(contarVogais("público"), 3);
  assert.deepStrictEqual(
    contarVogais("áéíóúâêîôûàèìòùãõÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙÃÕ"),
    34,
  );
});
