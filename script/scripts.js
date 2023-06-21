function Book (title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

Book.prototype.info = function (title, author,pages,read){
    if (read === true)
        {let readYet= "it was read."}
        else
        { let readYet= "was not read."}
    console.log("The"+ this.title + "by" + this.author + "has" + this.pages + "pages" + readYet)
}

