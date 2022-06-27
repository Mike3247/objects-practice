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
//////////////////////////////////////////////////////////////////
let myLibrary = ["The Hobbit", "Harry Potter", "20 000 lieues"];
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
/////
function addBookToLibrary() {
    new Book
}
function createBookDiv() {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode("BookNumber1"))
    return div
};

document.querySelector("button").addEventListener("click", () => {
    console.log("click-test-achieved")
    const container = document.querySelector(".container");
    
    container.appendChild(createBookDiv("div"));
});



/*
function myFunction(list){
    var text = "";
    var inputs = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < inputs.length; i++) {
        text += inputs[i].value;
    }
    var li = document.createElement("li");
    var node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("list").appendChild(li);
    */
/*
function displayBook (livre) {
    let div = document.createElement("div");
    div.style.border = "10px";
    div.style.bordercolor = "fuschia";
    div.style.borderstyle = "solid";
    div.style.width = "50px";
    div.style.height = "50px";
    const displayMyLibrary = myLibrary.filter(livre => livre);
    console.table(displayMyLibrary);
    return livre;

}
console.table(livre);
*/
/*
const displayMyLibrary = myLibrary.filter(livre => livre);
console.table(displayMyLibrary);
const container = document.querySelector("#container");
container.appendChild(displayBook("div")); */