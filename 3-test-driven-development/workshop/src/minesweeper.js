class Minesweeper {
  createField(columns, lines) {
    let field = "";
    for (let i = 0; i < columns; i++) {
      field += ".".repeat(lines);
      field += "\n";
    }
    console.log(field);
    return field;
  }

  bombsQuantity(columns, lines) {
    let size = columns * lines;
    let ratio = 2;
    let standardSize = 16;
    let quantity = Math.round((size * ratio) / standardSize);
    return quantity;
  }
}
module.exports = { Minesweeper };
