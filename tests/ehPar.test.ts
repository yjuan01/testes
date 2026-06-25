import test from "node:test";
import assert from "node:assert/strict";

import { ehPar } from "../index.js";
import { gerarImpar, gerarPar } from "../helpers.js";

test("Se o número passado for par, deve retornar true", () =>
  assert.deepStrictEqual(ehPar(gerarPar()), true));

test("Se o número passado for ímpar, deve retornar false", () =>
  assert.deepStrictEqual(ehPar(gerarImpar()), false));

test("Se passarmos infinito, deve retornar uma mensagem de erro", () =>
  assert.deepStrictEqual(ehPar(Infinity), "Me passe um número finito"));
