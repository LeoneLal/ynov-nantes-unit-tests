const { Minesweeper } = require("../src/minesweeper");

describe("minesweeper", function () {
  it("should return true", function () {
    const minesweeper = new Minesweeper([]);
    const items = minesweeper.createField(3, 3);
    expect(items).toBe("...\n...\n...\n");
  });
});

describe("bombs quantity", function () {
  it("should return the good ratio", function () {
    const minesweeper = new Minesweeper([]);
    const bombsQuantity = minesweeper.bombsQuantity(6, 5);
    expect(bombsQuantity).toBe(4);
  });
});
