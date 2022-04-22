const mongoose = require('mongoose');
const Item = require('./Item.js');


beforeAll(async () => {
    await mongoose.connect('mongodb://mongo:27017/docker-node-mongo-test', { useNewUrlParser: true });
    return Item.deleteMany({})
});

describe('Create items', () => {
    
    it('should be created and saved', async () => {
        Item.deleteMany({})
        const item = new Item({ name: 'Théo' });
        const savedItem = await item.save();
        const findItem = await Item.findOne({ name: "Théo" });
        expect(findItem.name).toBe(item.name);
    });

    // it("shouldn't be created and saved", async () => {
    //     Item.deleteMany({});
    //     const item = new Item({});
    //     expect(item.save()).rejects.toThrow("The item needs a name");
    // });

    // it("should change the type of name", async () => {
    //     Item.deleteMany({});
    //     // const item = new Item({name: [123]});
    //     expect(new Item({name: [123]}).save()).rejects.toThrow();
    //     // expect(item.save()).rejects.toThrow("The item needs a type string name");
    //     // expect(typeof item.name).toBe("string")
    // });
});

describe('Delete items', () => {
    it('should be deleted', async () => {
        Item.deleteMany({});
        const item = new Item({ name: 'Théo' });
        const savedItem = await item.save();
        const findOne = await Item.findOne({});
        const deleteItem = await Item.deleteOne({ _id: findOne._id });
        const findDeletedOne = await Item.findOne({ _id: findOne._id });
        expect(findDeletedOne).toBeNull();
    });
    it("shouldn't be deleted if doesn't exist", async () => {
    Item.deleteMany({});
    expect(Item.deleteOne({ name: "Théoo" })).rejects.toThrow("The item doesn't exist");

    });
