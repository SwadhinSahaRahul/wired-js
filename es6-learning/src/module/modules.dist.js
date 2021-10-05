class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    dump() {
        console.log(this.tasks);
    }
}

let foo = "bar";

new TaskCollection([
    'Go to store',
    'Finish task',
    'Eat launch'
]).dump();

console.log(foo);
