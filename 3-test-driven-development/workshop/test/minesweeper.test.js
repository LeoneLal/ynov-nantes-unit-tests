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

describe("contains enough bombs", function () {
  it("should return the expected number of bombs", function () {
    const minesweeper = new Minesweeper([]);
    let field = minesweeper.createField(6, 5);
    field = minesweeper.addBombIntoField(field, 4);
    const regex = /\*/gm;
    var count = (field.match(regex) || []).length;
    expect(count).toBe(minesweeper.bombsQuantity(6, 5));
  });
});

describe("select case", function () {
  it("should return case", function () {
    const minesweeper = new Minesweeper([]);
    let field = "..*\n...\n...\n";
    let find = minesweeper.findInField(field, 1, 1);
    let findBomb = minesweeper.findInField(field, 1, 3);
    expect(find).toBe("OK");
    expect(findBomb).toBe("BOOM");
  });
});

describe("coordinate boudaries", function () {
  function testBoundaries() {
    throw new Error("Coordinates out of bounds");
  }
  it("should throw on an error", function () {
    const minesweeper = new Minesweeper([]);
    const field = minesweeper.createField(4, 4);
    expect(() => minesweeper.findInField(field, 5, 24)).toThrow(
      Error("Coordinates out of bounds")
    );
  });
});
