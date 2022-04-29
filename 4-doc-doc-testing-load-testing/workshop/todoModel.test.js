const mongoose = require('mongoose');
const { ToDo } = require('./toDoModel.js');

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/docker-node-mongo-test', { useNewUrlParser: true });
    // return ToDo.deleteMany({})
});

describe('Create items', () => {

    it('should be created and saved', async () => {
        const task = new ToDo({ text: 'Create test' , done : false});
        const savedTask = await task.save();
        const findTask = await ToDo.findOne({ text: 'Create test' });
        expect(findTask.text).toBe(task.text);
    });

    it('should be changed to done', async () => {
        const changeTask = await ToDo.updateOne({ text: 'Create test', done : false }, { text: 'Create test', done : true });
        const findTask = await ToDo.find({});
        expect(findTask[0].done).toBe(true);
    });
   
});