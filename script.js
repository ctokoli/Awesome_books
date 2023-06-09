import Book from './book.js';

// const Book = require("book.js");

class BookManager {
  constructor() {
    this.button = document.querySelector('button');
    this.title = document.querySelector('.title');
    this.author = document.querySelector('.author');
    this.content = document.querySelector('.books');
    this.mainContent = document.querySelector('.main-content');
    this.form = document.querySelector('.form-item');
    this.add = document.querySelector('.add');
    this.list = document.querySelector('.list');
    this.userData = JSON.parse(localStorage.getItem('formdata')) || [];
    this.count = this.userData.length;
    this.fetchBooks();
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      const formData = new Book(this.count + 1, this.title.value, this.author.value);
      this.userData.push(formData);
      localStorage.setItem('formdata', JSON.stringify(this.userData));
      this.count += 1;
      this.renderBooks();
    });

    this.content.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-btn')) {
        const id = parseInt(e.target.dataset.id, 10);
        this.deleteItem(id);
      }
    });

    this.add.addEventListener('click', () => {
      this.mainContent.classList.add('hide');
      this.form.classList.add('show');
    });

    this.list.addEventListener('click', () => {
      this.form.classList.remove('show');
      this.mainContent.classList.remove('hide');
    });
  }

  deleteItem(id) {
    this.userData = this.userData.filter((book) => book.id !== id);
    localStorage.setItem('formdata', JSON.stringify(this.userData));
    this.renderBooks();
  }

  renderBooks() {
    let placeholder = '';
    this.userData.forEach((book, index) => {
      const backgroundColor = index % 2 === 0 ? 'white' : '#d2d2d2';
      placeholder += `
       <div class="book-item" style="background-color: ${backgroundColor};">
        <div class="book" >
        <h3>"${book.title}" by ${book.author}</h3>
        </div>
        <button class="remove-btn" data-id="${book.id}">Remove</button>
       </div>
  
      `;
    });
    this.content.innerHTML = placeholder;
  }

  fetchBooks() {
    this.renderBooks();
  }


}

const bookManager = new BookManager();

bookManager();