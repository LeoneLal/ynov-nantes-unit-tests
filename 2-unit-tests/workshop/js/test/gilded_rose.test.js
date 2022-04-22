const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
  // Tous les éléments ont une valeur sellIn qui désigne le nombre de jours restant pour vendre l'article.
  it("should be equal to number of days left to sell the item", function () {
    const gildedRose = new Shop([new Item("foo", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
  });
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("fixme");
  });
});
