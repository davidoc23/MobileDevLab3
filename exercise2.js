var Todo = /** @class */ (function () {
    function Todo() {
        this.myarrays = [];
    }
    ;
    Todo.prototype.addTask = function (task) {
        this.myarrays.push(task);
        console.log("Task " + task + " added to the list.");
        return this.myarrays.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var i = 0; i <= this.myarrays.length; i++) {
            console.log(this.myarrays[i]);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.myarrays.indexOf(task);
        if (index > -1) {
            this.myarrays.splice(index, 1);
            console.log("Task " + task + " deleted from list.");
        }
        else {
            console.log("Task " + task + " not found in list.");
        }
        return this.myarrays.length;
    };
    return Todo;
}());
var myTodos = new Todo;
myTodos.addTask("Eat Food");
myTodos.addTask("Work");
myTodos.listAllTasks();
myTodos.deleteTask("Eat Food");
myTodos.listAllTasks();
