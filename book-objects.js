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
btn.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
};
});

function openForm() {
    document.getElementById("newBookForm").style.display = "block";
  };

function closeForm() {
    document.getElementById("newBookForm").style.display = "none";
  }

document.getElementById("newBookButton").addEventListener("click", () => {
    console.log("click-test-achieved")
    function addBookToLibrary() {
        openForm();
        

        let input = prompt("What book have you read?");
        alert(`You read ${input}`);
        myLibrary.push(`${input}`);
        return{
            myLibrary : myLibrary
        }
    };

    addBookToLibrary(); 
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

});

document.getElementById("closeFormButton").addEventListener("click", () => {
    console.log("click-test-achieved")
    closeForm();
});





// document.querySelector("button").addEventListener("click", () => {
//     console.log("click-test-achieved")
//     const container = document.querySelector(".container");
    
//     container.appendChild(createBookDiv("div"));    
// });
// document.querySelector("button").addEventListener("click", () => {
//     console.log("click-test-achieved")
//     const container = document.querySelector(".container");
    
//     container.appendChild(createBookForm("div"));    
// });

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