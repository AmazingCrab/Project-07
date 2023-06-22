/*f() constructors*/
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function (title, author, pages, read) {
    if (read === true) { let readYet = "it was read." }
    else { let readYet = "was not read." }
    console.log("The" + this.title + "by" + this.author + "has" + this.pages + "pages" + readYet)
}
/*function add book UI*/
const mainContainer = document.getElementById("main")
document.getElementById("addButton").addEventListener("click", formUiMaker)

function formUiMaker() {
    const formContainer = document.createElement("div");
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const authorLabel = document.createElement("label");
    const authorInput = document.createElement("input");
    const pagesLabel = document.createElement("label");
    const pagesInput = document.createElement("input");
    const readLabel = document.createElement("label");
    const readInput = document.createElement("input");
    const submitButtonContainer = document.createElement("div")
    const submitButton = document.createElement("button");
    const addButtonContainer = document.getElementById("addButtonContainer")
    titleLabel.textContent = "Title:";
    authorLabel.textContent = "Author:";
    pagesLabel.textContent = "Pages:";
    readLabel.textContent = "Read:";
    titleInput.setAttribute("placeholder", "The title is...");
    authorInput.setAttribute("placeholder", "Who wrote the book?");
    pagesInput.setAttribute("placeholder", "How many ?")
    mainContainer.appendChild(formContainer);
    formContainer.appendChild(titleLabel);
    formContainer.appendChild(titleInput)
    formContainer.appendChild(authorLabel);
    formContainer.appendChild(authorInput);
    formContainer.appendChild(pagesLabel);
    formContainer.appendChild(pagesInput);
    formContainer.appendChild(readLabel);
    formContainer.appendChild(readInput);
    mainContainer.appendChild(submitButtonContainer);
    submitButtonContainer.appendChild(submitButton);
    formContainer.classList.add("formStyle");
    readInput.setAttribute("type", "checkbox");
    submitButtonContainer.classList.add("submitButtonContainer");
    submitButton.classList.add("submitButton");
    submitButton.textContent = "Submit";
    main.removeChild(addButtonContainer)
}
