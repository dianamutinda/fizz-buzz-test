const {fizzBuzz} = require("./solution")
describe ("fizzbuzz",()=>{
    it("divides a number by 3 and 5 and checks if remainder equals to 0", ()=>{
        expect(fizzBuzz(15)).toBe("15 -fizz buzz");
    })
    it("divides a number by 3 and checks if remainder equals to 0", ()=>{
        expect(fizzBuzz(9)).toBe("9 -fizz");
    })
    it("divides a number by 5 and checks if remainder equals to 0", ()=>{
        expect(fizzBuzz(20)).toBe("20 -buzz");
    })
    it("divides a number by either 3 and 5 and checks if remainder is not equals to 0", ()=>{
        expect(fizzBuzz(22)).toBe(22);
    })
})
