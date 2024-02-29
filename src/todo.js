/* eslint-disable import/prefer-default-export */
/* eslint-disable max-classes-per-file */
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

    removeTodoByDescription(description){
        const index = this.todos.findIndex(todo => todo.description === description);
        if(index !== 1) {
            this.todos.splice(index, 1);
            console.log(description);
            console.log(" deleted");
        }
        
    }

    listTodos() {
        console.log(`Todos for project: ${this.name}`);
        this.todos.forEach((todo, index) => {
            console.log(`${index + 1}: ${todo.description} - Completed: ${todo.completed}`);
        });
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
    this.projects.forEach(project => console.log(project.name))};

    findProjectByName(name){
        return this.projects.find(project => project.name === name);
    }


    static Todo = Todo;

    static Project = Project;
}




   
