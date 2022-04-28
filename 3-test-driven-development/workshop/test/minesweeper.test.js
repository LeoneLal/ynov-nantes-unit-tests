const { Minesweeper } = require("../src/minesweeper");

describe("Gilded Rose", function () {
    it("should return true", function () {
        const minesweeper = new Minesweeper([]);
        const items = minesweeper.createField(3,3);
        expect(items).toBe("...\n...\n...\n");
      });
    
})
