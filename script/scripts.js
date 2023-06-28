let title, author, pages, read, readYet;
let  n = -1; /*book counter+Submit*/
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
                {this.readYet = "YES";
            }
            else 
                {this.readYet = "NO";}
        }
}
/*const for form*/ 
const addButtonContainer = document.getElementById("addButtonContainer")
const readInput = document.createElement("input");    
/*const for bookList*/
const bookList =document.getElementById("bookList")

/*function add book UI*/
const mainContainer = document.getElementById("main");
document.getElementById("addButton").addEventListener("click", formUi);

function formUi() {
    const titleInput = document.createElement("input");/*this inputs need to be here because they need to be erased every time*/
    const authorInput = document.createElement("input");
    const pagesInput = document.createElement("input");

    const formContainer = document.createElement("form");
    const formContainerBackGround = document.createElement("div");
    const titleLabel = document.createElement("label");
    const authorLabel = document.createElement("label");
    const pagesLabel = document.createElement("label");
    const readLabel = document.createElement("label");
    const submitButtonContainer = document.createElement("div")
    const submitButton = document.createElement("button");

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
        if((titleInput.value.length === 0)|| (authorInput.value.length === 0)||(pagesInput.value.length === 0)){
            e.preventDefault();
            alert("Please Fill the Fields");
            return;
        }
        else{   
            e.preventDefault();
            main.appendChild(addButtonContainer);
            main.appendChild(bookList);
            const addBook = new book(titleInput.value , authorInput.value, pagesInput.value, readInput.checked);
            readInput.checked=false; /*This restores check position*/
            books.push(addBook);
            addToBookList();
        }
        mainContainer.removeChild(formContainer);
    }
}

function addToBookList (){ /*This makes the bookList every time*/
    n=n+1;
    const ulBook= document.createElement("ul");
    const titleLi = document.createElement("li");
    const authorLi = document.createElement("li");
    const pagesLi = document.createElement("li");
    const readLi = document.createElement("li");
    const readSwitchLi = document.createElement("li")
    const readSwitchInput = document.createElement("input")
    const deleteBook = document.createElement("li")
    bookList.appendChild(ulBook);
    ulBook.appendChild(titleLi);
    ulBook.appendChild(authorLi);
    ulBook.appendChild(pagesLi);
    ulBook.appendChild(readLi);
    ulBook.appendChild(deleteBook);
    ulBook.appendChild(readSwitchLi);
    readSwitchLi.appendChild(readSwitchInput);
    titleLi.textContent = books[n].title;
    authorLi.textContent = books[n].author;
    pagesLi.textContent = books[n].pages;
    readLi.textContent = books[n].readYet;
    readSwitchInput.setAttribute("type", "checkbox")
    readSwitchInput.setAttribute("data-checkInput", n)
    readSwitchLi.setAttribute("data-check", `check${n}`)
    readLi.setAttribute("data", `read${n}`)
    deleteBook.textContent = "X";
    deleteBook.setAttribute("data-Book",n)
    ulBook.setAttribute("data", `ulBook${n}`)
    if(books[n].readYet === "YES")
        readSwitchInput.checked = true;
    else 
        readSwitchInput.checked = false;
}


bookList.addEventListener("click", deleteBook);/*Function Delete*/
function deleteBook(e){  
    e.preventDefault();
    let dataNumber = e.target.closest("li").getAttribute("data-Book")
        let deleteThisBook = document.querySelectorAll(`[data="ulBook${dataNumber}"]`);/*This get the Ul Node*/
        bookList.removeChild(deleteThisBook[0])
        delete books[dataNumber]
    }

bookList.addEventListener("click", toggleRead);/*Function Delete*/
function toggleRead(e){  
    e.preventDefault();
    let dataNumber = e.target.closest("input").getAttribute("data-checkInput")
        let toggleThisBook = document.querySelectorAll(`[data="read${dataNumber}"]`);/*This get the Ul Node*/
        let textBook= toggleThisBook[0].textContent
        if(textBook === "YES"){
            toggleThisBook[0].textContent="NO"
        }
        else{
            toggleThisBook[0].textContent="YES"
        }
}
