import test from "node:test";
import assert from "node:assert/strict";

import { contarCaracteres } from "../index.js";
import { gerarString } from "../helpers.js";

test("Deve retornar a quantidade que um caracter aparece em uma string se passarmos a string e o caracter", () => {
  assert.deepStrictEqual(contarCaracteres("Teste", "e"), 2);
  assert.deepStrictEqual(contarCaracteres("Ovo", "v"), 1);
});

test("Deve retornar mensagem de erro se passarmos uma string no lugar do caracter", () => {
  assert.deepStrictEqual(
    contarCaracteres("Teste", gerarString(2)),
    "Me dê um caracter para verificar a quantidade",
  );
});
