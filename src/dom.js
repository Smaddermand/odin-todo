// // src/dom.js

import { TodoApp } from './todo';

// Instantiate your TodoApp - if I should want to manipulate the todo app here..
const myTodoApp = new TodoApp();
window.myTodoApp = myTodoApp; // window. for debugging...

// Create an initial default project as to not have an empty UI..
myTodoApp.addProject("Default Project");
let currentProject = "Default Project";




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

        newProjectDiv.addEventListener('mouseover', () => {});
        newProjectDiv.addEventListener("click", () => {
            console.log(`you clicked me: ${  myTodoApp.projects[i].name}`);
            currentProject = myTodoApp.projects[i].name;
            displayTodos(myTodoApp.projects[i].name);
            console.log("this is the active project");
            console.log(currentProject);
        } )

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


// Below is just a test to get some default todos for visualization

const defaultProject = myTodoApp.findProjectByName("Default Project");
if(defaultProject){
    defaultProject.addTodo("Do stuff");
    defaultProject.addTodo("Do stuff2");
    defaultProject.addTodo("Do stuff3");
    defaultProject.listTodos();
}





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
        newTodoDiv.className = "todo";
        todolistDiv.appendChild(newTodoDiv);
        
        // mouse over for hover effect
        newTodoDiv.addEventListener('mouseover', () => {});

        // add delete button 
        const deleteButton = document.createElement("button");
        const buttonText = document.createTextNode("-");
        deleteButton.appendChild(buttonText);
        newTodoDiv.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            todolistDiv.removeChild(newTodoDiv);
            console.log(project);
            project.removeTodoByDescription(todo.description);
        })


        console.log(`Todo displayed: ${todo.description}`);
    });
}

// Example usage: Display todos for the "Work" project --> This should just run initially. 
displayTodos("Default Project");







    const showNewTodoForm = document.getElementById("newtodo-btn");
    const newTodoDialog = document.getElementById("newtodo-dialog");
    showNewTodoForm.addEventListener('click', () => {
        newTodoDialog.showModal();
    });


    const newTodoForm = document.getElementById("newtodo-form")
    newTodoForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        console.log('form submitted');

        // add code

        const description = document.getElementById("description").value;
        // const completed = document.getElementById("completed").checked;

        const findCurrentProject = myTodoApp.findProjectByName(currentProject);
        findCurrentProject.addTodo(description);
        displayTodos(currentProject);

        newTodoDialog.close();
    });


/*

The next (and final?) step is to delete todos..

TODO:
    1. Add a delete button - dynamic created when looping over and showing the todos
    2. Add class + CSS for button ("delete text"
    3. add event listener to the button
    4. Code for deleting (splice?)



*/