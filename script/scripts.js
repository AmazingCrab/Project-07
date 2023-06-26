let title, author, pages, read, readYet;
const books = [];
/*f() constructors*/
class book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.info();
    }
        info() {
            if (read === true) 
                {this.readYet = "YES";}
            else 
                {this.readYet = "NO";}
        }
}

const titleInput = document.createElement("input");
const authorInput = document.createElement("input");
const pagesInput = document.createElement("input");
const readInput = document.createElement("input");    
const formContainer = document.createElement("form");
const formContainerBackGround = document.createElement("div");
const titleLabel = document.createElement("label");
const authorLabel = document.createElement("label");
const pagesLabel = document.createElement("label");
const readLabel = document.createElement("label");
const submitButtonContainer = document.createElement("div")
const submitButton = document.createElement("button");
const addButtonContainer = document.getElementById("addButtonContainer")

/*function add book UI*/
const mainContainer = document.getElementById("main")
document.getElementById("addButton").addEventListener("click", formUi)

function formUi() {
    titleLabel.textContent = "Title:";
    authorLabel.textContent = "Author:";
    pagesLabel.textContent = "Pages:";
    readLabel.textContent = "Read:";
    submitButton.textContent = "Submit";

    titleInput.setAttribute("placeholder", "The title is...");
    authorInput.setAttribute("placeholder", "Who wrote the book?");
    pagesInput.setAttribute("placeholder", "How many ?")
    titleInput.setAttribute ("name" , "title");
    authorInput.setAttribute("name" , "author");
    pagesInput.setAttribute ("name" , "pages");
    readInput.setAttribute  ("name" , "read");
    titleInput.setAttribute("type", "Text");
    authorInput.setAttribute("type", "text");
    pagesInput.setAttribute("type", "number");
    readInput.setAttribute("type", "checkbox");
    submitButton.setAttribute("value", "submit")
    submitButton.setAttribute("type", "submit")

    mainContainer.appendChild(formContainer);
    formContainer.appendChild(formContainerBackGround)
    formContainerBackGround.appendChild(titleLabel);
    formContainerBackGround.appendChild(titleInput)
    formContainerBackGround.appendChild(authorLabel);
    formContainerBackGround.appendChild(authorInput);
    formContainerBackGround.appendChild(pagesLabel);
    formContainerBackGround.appendChild(pagesInput);
    formContainerBackGround.appendChild(readLabel);
    formContainerBackGround.appendChild(readInput);
    formContainer.appendChild(submitButtonContainer);
    submitButtonContainer.appendChild(submitButton);

    formContainerBackGround.classList.add("formStyle");
    submitButtonContainer.classList.add("submitButtonContainer");
    submitButton.classList.add("submitButton");
    main.removeChild(addButtonContainer)

    formContainer.addEventListener("submit", submit);
    /*function submit*/
    function submit (e){
        e.preventDefault();{
        main.appendChild(addButtonContainer);
        mainContainer.removeChild(formContainer);
        read= readInput.checked;
        const addBook = new book(titleInput.value , authorInput.value, pagesInput.value,read );
        books.push(addBook);
    }
}
}
