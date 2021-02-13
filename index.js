"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    logTodo(todo);
    console.log(printTodo(todo));
});
var logTodo = function (todo) {
    var id = todo.id, title = todo.title, completed = todo.completed;
    console.log("\n\n  The Todo with ID: " + id + "\n  Has a title of: " + title + "\n  Is it finished? " + completed + "\n\n  ");
};
var printTodo = function (todo) {
    var id = todo.id, title = todo.title, completed = todo.completed;
    return ("\n\n  The Todo with ID: " + id + "\n  Has a title of: " + title + "\n  Is it finished? " + completed + "\n\n  ");
};
