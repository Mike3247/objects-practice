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
    this.title = title + ""
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
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
});
function addBookToLibrary() { 
    let authorName = document.getElementById("author").value;
    alert(authorName);
    let input = authorName;
    alert(`You read ${input}`);
    myLibrary.push(`${input}`);
    console.log(myLibrary);
    myLibrary.forEach(element => {
        console.log(element);
        const container = document.querySelector(".container");
        function createBookDiv (div) {
            div = document.createElement("div");
            div.appendChild(document.createTextNode(element))
            return div
        }
        container.appendChild(createBookDiv("div")); 
    });
};  
document.getElementById("closeFormButton").addEventListener("click", () => {
    console.log("click-test-achieved")
    addBookToLibrary(); 
    closeForm();
});