// src/todo.js


class Todo {
    constructor(description){
        this.description = description;
        this.completed = false;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}

class Project {
    constructor(name, todos){
        this.name = name;
        this.todos = [];
    }

    addTodo(description){
        const todo = new Todo(description);
        this.todos.push(todo);
    }
}

export class TodoApp{
    constructor(){
        this.projects = [];
    }

    addProject(name) {
        const project = new Project(name);
        this.projects.push(project);
    }

    // After adding projects to myTodoApp
    listProjects(){
    this.projects.forEach(project => console.log(project.name))}
;
}


console.log("Hi, from todo.js");
   
// }