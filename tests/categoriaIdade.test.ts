import test from "node:test";
import assert from "node:assert/strict";

import { categoriaIdade } from "../index.js";
import { gerarLimite, gerarLimiteInteiro, gerarNegativo } from "../helpers.js";

test("Deve retornar a categoria de idade da pessoa se passarmos um número inteiro", () => {
  assert.deepStrictEqual(categoriaIdade(gerarLimiteInteiro(0, 2)), "Bebê");
  assert.deepStrictEqual(categoriaIdade(gerarLimiteInteiro(3, 12)), "Criança");
  assert.deepStrictEqual(
    categoriaIdade(gerarLimiteInteiro(13, 17)),
    "Adolescente",
  );
  assert.deepStrictEqual(categoriaIdade(gerarLimiteInteiro(18, 59)), "Adulto");
  assert.deepStrictEqual(categoriaIdade(gerarLimiteInteiro(60, 110)), "Idoso");
  assert.deepStrictEqual(categoriaIdade(gerarLimiteInteiro(111)), "Defunto");
});

test("Deve retornar mensagem de erro se passarmos um número negativo", () => {
  assert.deepStrictEqual(
    categoriaIdade(gerarNegativo()),
    "Me dê uma idade positiva",
  );
});

test("Deve retornar mensagem de erro se passarmos um número decimal", () => {
  assert.deepStrictEqual(
    categoriaIdade(gerarLimite(0)),
    "Me dê uma idade inteira",
  );
});
