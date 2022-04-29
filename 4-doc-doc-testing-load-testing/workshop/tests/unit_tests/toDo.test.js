const { ToDo } = require("../../toDoModel");

describe("done by default", function () {
  it("should return true", function () {
    let todo = new ToDo([]);
    expect(todo.done).toBeFalsy();
  });
});

describe("text value", function () {
  it("should be equal to text", function () {
    let todo = new ToDo([]);
    todo.text = "Coder";
    expect(todo.text).toBe("Coder");
  });
});
