// // src/dom.js

import { TodoApp } from './todo';

// Instantiate your TodoApp - if I should want to manipulate the todo app here..
window.myTodoApp = new TodoApp(); //window. for debugging...

//Create an initial default project as to not have an empty UI..
const myProject = myTodoApp.addProject("Default Project");


myTodoApp.listProjects(); //test purpose - check if projects are created

/*show all projects under "Projects"
/this means the following must be created

Done:
    1. HTML container type to add the projects? Or is that created with JS? Check myLibrary..
        Yes, I need to create a div class "projects" to fill with projects
    2. CSS in order to show the project cards
        "cards" for the projects
        Setup some flex column? (looks okay.. for now?)

In progress
    3. A displayProjects() function running some for each method..
    4. 


*/


function displayProjects(){
    let projectlistDiv = document.querySelector(".projectlist");

    for (let i = 0; i < myTodoApp.projects.length; i++){
        let newProjectDiv = document.createElement("div");
        let newProjectName = document.createTextNode(myTodoApp.projects[i].name);
        newProjectDiv.appendChild(newProjectName); 
        newProjectDiv.className = "project";
        projectlistDiv.appendChild(newProjectDiv);

        console.log("hello");
    }
}

displayProjects();




// ;
