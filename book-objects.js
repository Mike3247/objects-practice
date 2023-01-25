function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = () => {
    console.log(name);
  };
}
const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'
console.log("end of tests for this page from here on out.");

/// ///////////////////////////////////////////////////////////////

const myLibrary = [/* "The Hobbit", "Harry Potter", "20 000 lieues" */];
class Book {
  constructor(title, author, pages, read) {
    this.title = `${title.substr(0)} `;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.toggleRead = function () {
      if (read === "Read") {
        read = "Not Read";
        return "Not Read";
      }
      if (read === "Not Read") {
        read = "Read";
        return "Read";
      }
    };
    this.sayInfo = () => `Title: ${title} Author: ${author} Number of pages: ${pages} Read status: `;
  }
};

const theHobbit = new Book("The Hobbit ", "J.R.R. Tolkien ", "295 pages ", "not read yet ");
console.log(theHobbit.sayInfo());
console.log(theHobbit.constructor);
const container = document.querySelector(".container");
const buttonDiv = document.querySelector(".newBookButton");
const btn = document.querySelector("button");
function openForm() {
  document.getElementById("newBookFormDiv").style.display = "block";
}
function closeForm() {
  document.getElementById("newBookFormDiv").style.display = "none";
}
document.getElementById("newBookButton").addEventListener("click", () => {
  openForm();
  console.log("click-test-achieved");
});
function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.querySelector("input[name=\"readStatus\"]:checked").value;
  alert(read);
  const additionalBook = new Book(`${title.substr(0)}.`, `${author.substr(0)}.`, `${pages.substr(0)}.`, read);
  console.log(additionalBook.sayInfo());
  myLibrary.push(additionalBook.sayInfo());
  console.log(myLibrary);
  myLibrary.forEach((element) => {
    console.log(element);
    const container = document.querySelector(".container");
    function createBookDiv(div) {
      div = document.createElement("div");
      div.appendChild(document.createTextNode(element));
      div.style.border = "solid 10px red";
      div.dataset.indexNumber = myLibrary.indexOf(additionalBook);
      const buttonToToggleReadStatus = document.createElement("button");
      buttonToToggleReadStatus.addEventListener("click", () => {
        buttonToToggleReadStatus.textContent = additionalBook.toggleRead();
      });
      if (read === "Read") {
        buttonToToggleReadStatus.textContent = "Read";
      } else if (read === "Not Read") {
        buttonToToggleReadStatus.textContent = "Not Read";
      }
      div.appendChild(buttonToToggleReadStatus);
      const buttonToRemoveBook = document.createElement("button");
      buttonToRemoveBook.textContent = "Remove Book";
      div.appendChild(buttonToRemoveBook);
      buttonToRemoveBook.addEventListener("click", () => {
        console.log("remove-button-click-test-achieved");
        container.removeChild(div);
        myLibrary.splice(div.dataset.indexNumber, 1);
      });
      return div;
    }
    console.log(myLibrary.indexOf(element));
    container.appendChild(createBookDiv("div"));
  });
}
document.getElementById("closeFormButton").addEventListener("click", () => {
  console.log("click-test-achieved");
  const container = document.querySelector(".container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  addBookToLibrary();
  closeForm();
});
