class Minesweeper {
  createField(columns, lines) {
    let field = "";
    for (let i = 0; i < columns; i++) {
      field += ".".repeat(lines);
      field += "\n";
    }
    return field;
  }

  bombsQuantity(columns, lines) {
    let size = columns * lines;
    let ratio = 2;
    let standardSize = 16;
    let quantity = Math.round((size * ratio) / standardSize);
    return quantity;
  }

  addBombIntoField(field, bombsQuantity) {
    for (let i = 0; i < bombsQuantity; i++) {
      let randomNumber = Math.floor(Math.random() * field.length);
      if (field[randomNumber] === ".") {
        field =
          field.substring(0, randomNumber) +
          "*" +
          field.substring(randomNumber + 1);
      } else {
        i--;
      }
    }
    return field;
  }
}
module.exports = { Minesweeper };
