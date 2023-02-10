var myarray = [];
function addTask(task) {
    myarray.push(task);
    console.log("Task " + task + " added to the list.");
    return myarray.length;
}
function listAllTasks() {
    for (var i = 0; i <= myarray.length; i++) {
        console.log(myarray[i]);
    }
}
function deleteTask(task) {
    var index = myarray.indexOf(task);
    if (index > -1) {
        myarray.splice(index, 1);
        console.log("Task " + task + " deleted from list.");
    }
    else {
        console.log("Task " + task + " not found in list.");
    }
    return myarray.length;
}
addTask("Eat lunch");
addTask("Eat Dinner");
listAllTasks();
deleteTask("Eat lunch");
