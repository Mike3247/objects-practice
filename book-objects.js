function Player (name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function () {
        console.log(name)
    }
}
const player1 = new Player ('steve', 'X')
const player2 = new Player ('also steve', 'O')
player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'
console.log('end of tests for this page from here on out.');

//////////////////////////////////////////////////////////////////



let myLibrary = [/*"The Hobbit", "Harry Potter", "20 000 lieues"*/];
function Book (title, author, pages, read) {
    this.title = title.substr(0) + " "
    this.author = author
    this.pages = pages
    this.read = read
    this.sayInfo = function () {
        return title + author + pages + read
    }
}
const theHobbit = new Book ("The Hobbit ", "J.R.R. Tolkien ", "295 pages ", "not read yet ")
console.log(theHobbit.sayInfo());
console.log(theHobbit.constructor);
const container = document.querySelector(".container");
const buttonDiv = document.querySelector(".newBookButton");
const btn = document.querySelector("button")
function openForm() {
    document.getElementById("newBookFormDiv").style.display = "block";
};
function closeForm() {
    document.getElementById("newBookFormDiv").style.display = "none";
}
document.getElementById("newBookButton").addEventListener("click", () => {
    openForm();
    console.log("click-test-achieved")
    // const container = document.querySelector(".container");
    // while (container.firstChild) {
    //     container.removeChild(container.firstChild);
    // };
});
function addBookToLibrary() { 
    let title = document.getElementById("title").value;
    alert(title);
    let author = document.getElementById("author").value;
    alert(author);
    let pages = document.getElementById("pages").value;
    alert(pages);
    let read = document.getElementById("readStatus").value;
    alert(read);
    const additionalBook = new Book (title.substr(0) + " ", author.substr(0) + " ", pages.substr(0) + " ", read);
    console.log(additionalBook.sayInfo());
    alert(additionalBook.title);
    myLibrary.push(additionalBook.title);
    myLibrary.push(additionalBook.author);
    myLibrary.push(additionalBook.pages);
    myLibrary.push(additionalBook.read);
    console.log(myLibrary);
    myLibrary.forEach(element => {
        console.log(element);
        const container = document.querySelector(".container");
        function createBookDiv (div) {
            div = document.createElement("div");
            
            div.appendChild(document.createTextNode(element))
            div.style.border = "solid 10px red";
            return div
        }
        container.appendChild(createBookDiv("div")); 
    });
};  
document.getElementById("closeFormButton").addEventListener("click", () => {
    console.log("click-test-achieved")
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
    addBookToLibrary(); 
    closeForm();
});