import TaskCollection, {foo} from "./Classes/TaskCollection";

new TaskCollection([
    'Go to store',
    'Finish task',
    'Eat launch'
]).dump();

console.log(foo);