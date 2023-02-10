interface TodoInterface 
{
    myarrays:string[];
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}

class Todo implements TodoInterface
{
    constructor(){};

    myarrays:string[] = [];

    addTask(task:string):number
    {
        this.myarrays.push(task);
        console.log("Task " + task + " added to the list.");
        return this.myarrays.length;
    }

    listAllTasks():void
    {
        for(let i = 0; i <= this.myarrays.length; i++)
        {
            console.log(this.myarrays[i]);
        }
    }

    deleteTask(task:string):number
    {
        let index:number = this.myarrays.indexOf(task);
        if(index > -1)
        {
            this.myarrays.splice(index, 1);
            console.log("Task " + task + " deleted from list.");
        }
        else
        {
            console.log("Task " + task + " not found in list.");
        }

        return this.myarrays.length;
    }

    
}

let myTodos = new Todo;
myTodos.addTask("Eat Food");
myTodos.addTask("Work");
myTodos.listAllTasks();
myTodos.deleteTask("Eat Food");
myTodos.listAllTasks();