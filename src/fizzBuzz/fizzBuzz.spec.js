/*

Desafio FizzBuzz

Escreva uma lib que receba um número e:

Se o número for divisível por 3, no lugar do número escreva 'Fizz' - x
se o número for divisível por 5, no lugar do número escreva 'Buzz' - x
Se o número for divisivel por 3 e 5, no lugar do número escreva 'FizzBuzz' - x
Se não for múltiplo de nada, retorna o número - x

*/

import { describe, it } from "mocha";
import { expect } from "chai";

import FizzBuzz from "./fizzBuzz.js";

describe("FizzBuzz", () => {

    it("should return `Fizz` when multiple of 3", () => {
        expect(FizzBuzz(3)).to.be.equal("Fizz");
        expect(FizzBuzz(6)).to.be.equal("Fizz");
    });

    it("should return `Buzz` when multiple of 5", () => {
        expect(FizzBuzz(5)).to.be.equal("Buzz");
        expect(FizzBuzz(10)).to.be.equal("Buzz");
    });

    it("should return `FizzBuzz` when multiple of 3 and 5", () => {
        expect(FizzBuzz(15)).to.be.equal("FizzBuzz");
    });

    it("should return the number when non-multiple of 3 and 5", () => {
        expect(FizzBuzz(7)).to.be.equal(7);
    });

    it("should return 0 when 0", () => {
        expect(FizzBuzz(0)).to.be.equal(0);
    });
});
