class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  
  class Shop {
    constructor(items = []) {
      this.items = items;
    }
    updateQuality() {
      for (let item of this.items) {
        let name = item.name;
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          item.sellIn = item.sellIn - 1;
        }
        switch (name) {
          case 'Aged Brie':
            if (item.quality < 50) {
              item.quality += 1;
              if (item.sellIn < 0 && item.quality < 50)
  
                item.quality += 1;
            }
            break;
  
          case 'Backstage passes to a TAFKAL80ETC concert':
            if (item.quality < 50) {
              if (item.sellIn < 0) { item.quality = 0; }
              else if (item.sellIn < 6) { item.quality += 3; }
              else if (item.sellIn < 11) { item.quality += 2; }
              else { item.quality += 1; }
            }
            break;
  
          case 'Sulfuras, Hand of Ragnaros':
            break;
  
          case 'Conjured':
            item.quality -= 2;
            break;
  
          default:
            item.quality -= 1;
            if (item.sellIn < 0) {
              item.quality -= 1;
            }
  
  
        }
  
        if (item.quality < 0) { item.quality = 0 }
      }
      return this.items;
    }
  }
  
  module.exports = {
    Item,
    Shop
  }