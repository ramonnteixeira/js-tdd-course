import { describe, it } from "mocha";
import { expect } from "chai";
import * as calc from "./main";

describe("Calc", () => {

    // smoke tests
    describe("smoke tests", () => {


        it("should exist the calc lib", () => {
            expect(calc).to.exist;
        });

        it("should exist the method `sum`", () => {
            expect(calc.sum).to.exist;
            expect(calc.sum).to.be.instanceOf(Function);
        });

        it("should exist the method `sub`", () => {
            expect(calc.sub).to.exist;
            expect(calc.sub).to.be.instanceOf(Function);
        });

        it("should exist the method `mult`", () => {
            expect(calc.mult).to.exist;
            expect(calc.mult).to.be.instanceOf(Function);
        });

        it("should exist the method `div`", () => {
            expect(calc.div).to.exist;
            expect(calc.div).to.be.instanceOf(Function);
        });
    });

    describe("Sum", () => {

        it("should return 4 when `sum(2,2)`", () => {
            expect(calc.sum(2,2)).to.be.equal(4);
        });

        it("should return 0 when `sum(-2,2)`", () => {
            expect(calc.sum(-2,2)).to.be.equal(0);
        });

        it("should return 10 when `sum(12,-2)`", () => {
            expect(calc.sum(12,-2)).to.be.equal(10);
        });

    });

    describe("Sub", () => {

        it("should return 2 when `sub(4,2)`", () => {
            expect(calc.sub(4,2)).to.be.equal(2);
        });

        it("should return -4 when `sub(6,10)`", () => {
            expect(calc.sub(6,10)).to.be.equal(-4);
        });

        it("should return 16 when `sub(6,-10)`", () => {
            expect(calc.sub(6,-10)).to.be.equal(16);
        });

    });

    describe("Mult", () => {

        it("should return 4 when `mult(2,2)`", () => {
            expect(calc.mult(2,2)).to.be.equal(4);
        });

        it("should return 6 when `mult(2,3)`", () => {
            expect(calc.mult(2,3)).to.be.equal(6);
        });

        it("should return 6 when `mult(3,2)`", () => {
            expect(calc.mult(3,2)).to.be.equal(6);
        });

    });

    describe("Div", () => {

        it("should return 2 when `div(4,2)`", () => {
            expect(calc.div(4,2)).to.be.equal(2);
        });

        it("should return NaN when `div(4,0)`", () => {
            expect(calc.div(4,0)).to.NaN;
        });

    });
});
