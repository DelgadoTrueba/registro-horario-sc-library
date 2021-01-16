import { add, subtract } from '../lib/cjs/index';

describe("package functions", () => {
    
    describe("add function", () => {
        it("should be possible to add to numbers", () => {
            let resul = add(1,1);

            expect(resul).toBe(2);
        })
    })
    
    describe("substract function", () => {
        it("should be possible to subtract to numbers", () => {
            let resul = subtract(4,1);

            expect(resul).toBe(3);
        })
    })
})