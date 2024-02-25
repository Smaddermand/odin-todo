// // src/dom.js

import { TodoApp } from './todo';

// Instantiate your TodoApp - if I should want to manipulate the todo app here..
const myTodoApp = new TodoApp();
window.myTodoApp = myTodoApp; // window. for debugging...

// Create an initial default project as to not have an empty UI..
myTodoApp.addProject("Default Project");



myTodoApp.listProjects(); // test purpose - check if projects are created


// function to display the projects
function displayProjects(){
    const projectlistDiv = document.querySelector(".projectlist");
    projectlistDiv.innerHTML = '';


    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < myTodoApp.projects.length; i++){
        const newProjectDiv = document.createElement("div");
        const newProjectName = document.createTextNode(myTodoApp.projects[i].name);
        newProjectDiv.appendChild(newProjectName); 
        newProjectDiv.className = "project";
        projectlistDiv.appendChild(newProjectDiv);

        console.log(`Project displayed: ${  myTodoApp.projects[i].name}`);
    }
}


displayProjects(); 


// Button/event listener to add projects
const newProjectBtn = document.getElementById("newproject-submit");
newProjectBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const name = nameInput.value
    if(name.trim() !== ""){
        myTodoApp.addProject(name);
        displayProjects();
    }
    nameInput.value = "";
})


// test for todos - alright this works

const defaultProject = myTodoApp.findProjectByName("Default Project");
if(defaultProject){
    defaultProject.addTodo("Do stuff");
    defaultProject.listTodos();
}


// // function to display the todos
// function displayTodos(){
//     const todolistDiv = document.querySelector(".todolist");
//     todolistDiv.innerHTML = '';


//     // eslint-disable-next-line no-plusplus
//     for (let i = 0; i < myTodoApp.todos.length; i++){
//         const newTodoDiv = document.createElement("div");
//         const newTodoName = document.createTextNode(myTodoApp.todos[i].description);
//         newTodoDiv.appendChild(newTodoName); 
//         newTodoDiv.className = "project";
//         todolistDiv.appendChild(newTodoDiv);

//         console.log(`Todo displayed: ${  myTodoApp.todos[i].description}`);
//     }
// }

// displayTodos();

function displayTodos(projectName) {
    const project = myTodoApp.findProjectByName(projectName);
    if (!project) {
        console.log("Project not found.");
        return;
    }

    const todolistDiv = document.querySelector(".todolist");
    todolistDiv.innerHTML = ''; // Clear the current todos

    // Iterate over the todos of the found project
    project.todos.forEach(todo => {
        const newTodoDiv = document.createElement("div");
        const newTodoName = document.createTextNode(todo.description);
        newTodoDiv.appendChild(newTodoName); 
        newTodoDiv.className = "project";
        todolistDiv.appendChild(newTodoDiv);

        console.log(`Todo displayed: ${todo.description}`);
    });
}

// Example usage: Display todos for the "Work" project
displayTodos("Default Project");


// ;
