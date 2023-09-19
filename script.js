function displayNewTask() {
    document.getElementById("grid-container").innerHTML += `<div class="container">
    <p class="container-title">test</p>
    <p class="container-description">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
    <div class="container-tag"></div>
</div>
    `
    console.log("function called");
}