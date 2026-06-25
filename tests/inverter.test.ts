import test from "node:test";
import assert from "node:assert/strict";

import { inverter } from "../index.js";
import { gerarString } from "../helpers.js";

test("Deve retornar a ordem inversa de uma string", () => {
  assert.deepStrictEqual(inverter("Ovo"), "ovO");
  assert.deepStrictEqual(inverter("teste"), "etset");
});

test("Deve retornar mensagem de erro se passarmos apenas um caracter", () => {
  assert.deepStrictEqual(
    inverter(gerarString(1, 1)),
    "Me dê uma string com no mínimo 2 caracteres",
  );
});

test("Deve retornar mensagem de erro se passarmos uma string vazia", () => {
  assert.deepStrictEqual(inverter(""), "Me dê uma string");
});
