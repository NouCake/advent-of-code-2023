import fs from 'fs'

const path = './2024/day-X';

const example = fs.readFileSync(path + '/example.txt', 'utf8');
const input = fs.readFileSync(path + '/input.txt', 'utf8');


describe("Day X Script", () => {

    it("star1 example", () => {
        const result = "skibidi(example)";
        expect(result).toBe(11);
    })

    it("star1", () => {
        const result = "skibidi(input)";
        console.log(result)
    })

    it("star2 example", () => {
        const result = "skibidi2(example)";
        expect(result).toBe(31);
    })

    it("star2", () => {
        const result = "skibidi2(input)";
        console.log(result)
    })

})