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
/////
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
const theHobbit = new Book ('The Hobbit ', "J.R.R. Tolkien ", "295 pages ", "not read yet ")
console.log(theHobbit.sayInfo());
console.log(theHobbit.constructor);
/////
function addBookToLibrary() {

}
const displayMyLibrary = myLibrary.filter(livre => livre);

console.table(displayMyLibrary);