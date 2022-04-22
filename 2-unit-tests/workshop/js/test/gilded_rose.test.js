const { Shop, Item } = require("../src/gilded_rose");

describe("Names", function() {
  it("shouldn't change", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros",100, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });

  // it("should change twice faster", function() {
  //   const gildedRose = new Shop([new Item("Conjured",30, 15)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(13);
  // })

  it("should get better", function() {
    const Backstage = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    const Backstage2 = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    const Backstage3 = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
    const BackstageOld = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -2, 20)]);
    
    let items = Backstage.updateQuality();    
    expect(items[0].quality).toBe(21);
    items = Backstage2.updateQuality();    
    expect(items[0].quality).toBe(22);
    items = Backstage3.updateQuality();    
    expect(items[0].quality).toBe(23);
    items = BackstageOld.updateQuality();    
    expect(items[0].quality).toBe(0);
  })

  it("should get better", function() {
    const Brie = new Shop([new Item("Aged Brie", 15, 20)]);
    const Brie4 = new Shop([new Item("Aged Brie", -5, 5)]);
    
    let items = Brie.updateQuality();    
    expect(items[0].quality).toBe(21);

    items = Brie4.updateQuality();    
    expect(items[0].quality).toBe(7);
  })
  
  it("should get worst", function() {
    const rndObject = new Shop([new Item("Random object", 15, 20)]);
    const rndObject2 = new Shop([new Item("Random object", -5, 5)]);
    
    let items = rndObject.updateQuality();    
    expect(items[0].quality).toBe(19);

    items = rndObject2.updateQuality();    
    expect(items[0].quality).toBe(3);
  })
  

  // Tous les éléments ont une valeur sellIn qui désigne le nombre de jours restant pour vendre l'article.
  it("should be equal to number of days left to sell the item", function () {
    const gildedRose = new Shop([new Item("foo", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
  });

  // À la fin de chaque journée, notre système diminue ces deux valeurs pour chaque produit.  
  it("should decrement", function () {
    const gildedRose = new Shop([new Item("foo", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(9);
  });

  // Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement.  
  it("should decrement quality twice fast", function () {
    const gildedRose = new Shop([new Item("foo", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(8);
  });
});
