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

        newProjectDiv.addEventListener('mouseover', () => {});
        newProjectDiv.addEventListener("click", () => {
            console.log(`you clicked me: ${  myTodoApp.projects[i].name}`);
            displayTodos(myTodoApp.projects[i].name);
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


// Bekiw is just a test to get some default todos for visualization

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

        newTodoDiv.addEventListener('mouseover', () => {});


        console.log(`Todo displayed: ${todo.description}`);
    });
}

// Example usage: Display todos for the "Work" project --> This should just run initially. 
displayTodos("Default Project");

// const showNewTodoForm = document.getElementById("newtodo-btn");
// const newTodoDialog = document.getElementById("newtodo-dialog");
// showNewTodoForm.addEventListener("click", () => {
//     newTodoDialog.showModal();
//     const newTodoForm = document.getElementById("newtodo-form");
//     newTodoForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const description = document.getElementById("description").value;
//         const completed = document.getElementById("completed").checked;
//         defaultProject.addTodo(description);
//         displayTodos("Default Project");
//         newTodoDialog.close();
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const showNewTodoForm = document.getElementById("newtodo-btn");
    const newTodoDialog = document.getElementById("newtodo-dialog");
    
    // Check if elements exist
    if (showNewTodoForm && newTodoDialog) {
        showNewTodoForm.addEventListener("click", () => {
            newTodoDialog.showModal();
        });
    } else {
        console.error("One or more elements (newtodo-btn, newtodo-dialog) were not found.");
        return;
    }
    
    // Attach submit event listener to the form only once, outside of the showModal call
    // This ensures the listener is not attached multiple times
    const newTodoForm = document.getElementById("newtodo-form");
    if (newTodoForm) {
        newTodoForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const description = document.getElementById("description").value;
            const completed = document.getElementById("completed").checked;
            
            // Assuming defaultProject is correctly initialized and available in this scope
            defaultProject.addTodo(description, completed); // Adjusted to use the completed variable
            
            newTodoDialog.close();
            displayTodos("Default Project");
        });
    } else {
        console.error("The newtodo-form was not found.");
    }
});




/* Next step is to add todos

DONE
    1. HTML: Create a button "+" with the todos
    2. HTML: Create a dialog + form with description plus boolean (completed, yes no)
        3. remember create + cancel button
    3. CSS: No need for styling at the moment

TODO
    4. JS: Take from Library.. --> Works somewhat
    5. Does not add todo.. How to "get" the active project.. Some state management?
        6. The way to get it is to "click" it.. Maybe create a variable that contains the "selected" project.. And use that when adding and listing todos



    99: Next step is to create an "click" eventlistener that opens the dialog/form to view the todos



*/