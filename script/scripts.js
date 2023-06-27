let title, author, pages, read, readYet;
let  n = -1; /*book counter*/
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
            if (readInput.checked === true) 
                {this.readYet = "YES";}
            else 
                {this.readYet = "NO";}
        }
}
/*const for form*/ 
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

/*const for bookList*/
const bookList =document.getElementById("bookList")


/*function add book UI*/
const mainContainer = document.getElementById("main");
document.getElementById("addButton").addEventListener("click", formUi);

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
    submitButton.setAttribute("value", "submit");
    submitButton.setAttribute("type", "submit");

    mainContainer.appendChild(formContainer);
    formContainer.appendChild(formContainerBackGround);
    formContainerBackGround.appendChild(titleLabel);
    formContainerBackGround.appendChild(titleInput);
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
    main.removeChild(addButtonContainer);
    main.removeChild(bookList)

    formContainer.addEventListener("submit", submit);
    /*function submit*/
    function submit (e){
        e.preventDefault();{
        main.appendChild(addButtonContainer);
        main.appendChild(bookList);
        mainContainer.removeChild(formContainer);
        const addBook = new book(titleInput.value , authorInput.value, pagesInput.value,readInput.checked );
        books.push(addBook);
    }
    addToBookList();
}

}

function addToBookList (){
    n=n+1;
    const ulBook= document.createElement("ul");
    const titleLi = document.createElement("li");
    const authorLi = document.createElement("li");
    const pagesLi = document.createElement("li");
    const readLi = document.createElement("li");
    bookList.appendChild(ulBook);
    ulBook.appendChild(titleLi);
    ulBook.appendChild(authorLi);
    ulBook.appendChild(pagesLi);
    ulBook.appendChild(readLi);
    titleLi.textContent = books[n].title;
    console.log(n);
    console.log(books[n].title)
    authorLi.textContent = books[n].author;
    pagesLi.textContent = books[n].pages;
    readLi.textContent = books[n].readYet;
};