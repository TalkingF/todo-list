//window.localStorage.clear();
let count;
const max_tasks = 99;
if (window.localStorage.getItem("count") === null) {
    count = 0;
}

else {
    count = window.localStorage.getItem("count");
}

function retrieveTasks() {
    num_tasks = window.localStorage.getItem("count");
    for (let i = 0; i < num_tasks;  i++) {
        if (window.localStorage.getItem(`task-${i}`) === null && i < max_tasks) {
            console.log("skipped");
            num_tasks++;
            continue;
        }
        displayTaskPane(JSON.parse(window.localStorage.getItem(`task-${i}`)), i);
    }
}

function displayNewTask() {
    if (document.getElementById("new-task") === null) {
        document.getElementById("grid-container").innerHTML += `            
        <section class="container" id="new-task">
            <form class="form" style="height: inherit;">
                <input class="container-title" placeholder="Title" name="title"></input>
                <textarea class="container-description" maxlength="400" placeholder="Description (400 characters)" name="description"></textarea>
                <select class="container-tag" name="tag">
                    <option selected hidden>Importance</option>  
                    <option>Urgent</option>
                    <option>Important</option>
                    <option>To do</option>
                </select>
                <input class="submit" type="submit" value="✓"></input>
                <button class="cancel">✕</button>
            </form>
        </section>`
    }
}

function displayEditableTask(id) {
    const task = window.localStorage.getItem(id);
    const obj = JSON.parse(task);
    document.getElementById("grid-container").innerHTML += `            
    <section class="container" id="new-task">
        <form class="form" style="height: inherit;">
            <input class="container-title" placeholder="Title" name="title" value="${obj.title}"}></input>
            <textarea class="container-description" maxlength="400" placeholder="Description (400 characters)" name="description" >${obj.description}</textarea>
            <select class="container-tag" name="tag">
                <option selected hidden value="${obj.tag}">${obj.tag}</option>  
                <option>Urgent</option>
                <option>Important</option>
                <option>To do</option>
            </select>
            <input class="submit" type="submit" value="✓"></input>
            <button class="cancel">✕</button>
        </form>
    </section>`
    deleteTaskPane(id);
}

function deleteNewTask() {
    if (document.getElementById("new-task")) {
        document.getElementById("new-task").outerHTML = "";
    }
    
}

function deleteTaskPane(id) {
    document.getElementById(id).outerHTML = "";
    window.localStorage.removeItem(id);
    count--;
    window.localStorage.setItem("count", count);
    
    
}

function displayTaskPane(task, index) {
    deleteNewTask();
    document.getElementById("grid-container").innerHTML += `
    <section class="container" id="task-${index}">
        <p class="container-title">${task.title}</p>
        <p class="container-description">${task.description}</p>
        <p class="container-tag">${task.tag}</p>
        <button class="edit" onclick="displayEditableTask(this.parentNode.id);">Edit</button>
        <button class="delete" onclick="deleteTaskPane(this.parentNode.id);">Delete</button>
    </section>
    `
}

function onFormSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());
    window.localStorage.setItem(`task-${count}`,JSON.stringify(formJSON));
    displayTaskPane(formJSON, count);
    count++;
    window.localStorage.setItem("count", count);
  }
  
  const form = document.getElementById('grid-container');

  form.addEventListener('submit', onFormSubmit);



