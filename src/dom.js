// // src/dom.js

import { TodoApp } from './todo';

// Instantiate your TodoApp - if I should want to manipulate the todo app here..
window.myTodoApp = new TodoApp(); //window. for debugging...

//Create an initial default project as to not have an empty UI..
const myProject = myTodoApp.addProject("Default Project");
const myProject1 = myTodoApp.addProject("Default Project");
const myProject2 = myTodoApp.addProject("Default Project");


myTodoApp.listProjects(); //test purpose - check if projects are created


/*
Okay, next step is to create the possibilit to add projects..

Done:
    1. Create button

TODO:
    2. HTML - Need a dialog for the new book (this is not a pretty solution, but it works.. for now)
    3. HTML - with subsequint form
    4. Check if styling can work (not pretty, but functional)
    5. JS - declare/initialize button + dialog/modal + form
    6. JS - create the function that adds the project to the list
    7. JS - and resets the display
    

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
