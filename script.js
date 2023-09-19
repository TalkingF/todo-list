function displayNewTask() {
    document.getElementById("grid-container").innerHTML += `            
    <section class="container" id="new-task">
        <form class="form" style="height: inherit;">
            <input class="container-title" placeholder="Title" name="title"></input>
            <textarea class="container-description" maxlength="400" placeholder="Description (400 characters)" name="description"></textarea>
            <select class="container-tag" name="tag">
                <option selected disabled hidden>Importance</option>  
                <option>Urgent</option>
                <option>Important</option>
                <option>To do</option>
            </select>
            <input class="submit" type="submit" value="✓"></input>
            <button class="cancel">✕</button>
        </form>
    </section>`

}



function displayEditableTask() {

}

function deleteNewTask() {
    document.getElementById("new-task").outerHTML = "";
}

function displayTaskPane(task) {
    deleteNewTask();
    document.getElementById("grid-container").innerHTML += `
    <section class="container">
        <form class="form" style="height: inherit;">
            <p class="container-title">${task.title}</p>
            <p class="container-description">${task.description}</p>
            <p class="container-tag">${task.tag}</p>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </form>
    </section>
    `
}

function onFormSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());
  
    window.localStorage.setItem(formJSON.title,JSON.stringify(formJSON, null, 2));
    displayTaskPane(formJSON);
  }
  
  const form = document.getElementById('grid-container');

  form.addEventListener('submit', onFormSubmit);



