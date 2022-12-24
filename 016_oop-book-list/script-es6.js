class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.innerText = message;

    const container = document.querySelector('.container');
    const form = document.getElementById('book-form');
    container.insertBefore(div, form);

    setTimeout(() => {
      div.remove();
    }, 3000);
  }

  removeBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
}

class Store {
  static getBooks() {
    const books = localStorage.getItem('books') || [];
    return books.length === 0 ? books : JSON.parse(books);
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => {
      const ui = new UI();
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    const newBooks = books.filter((book) => book.isbn !== isbn);
    localStorage.setItem('books', JSON.stringify(newBooks));
  }
}

document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);
  const ui = new UI();

  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    ui.addBookToList(book);
    Store.addBook(book);

    ui.showAlert('Book Added!', 'success');
    ui.clearFields();
  }
});

document.getElementById('book-list').addEventListener('click', (e) => {
  e.preventDefault();

  const ui = new UI();
  ui.removeBook(e.target);

  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  ui.showAlert('Book Removed!', 'success');
});

// POINT：DOMContentLoaded
document.addEventListener('DOMContentLoaded', Store.displayBooks);
