class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

class BookManager {
  constructor() {
    this.button = document.querySelector('button');
    this.title = document.querySelector('.title');
    this.author = document.querySelector('.author');
    this.content = document.querySelector('.books');
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
      this.count++;
      this.renderBooks();
    });

    this.content.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-btn')) {
        const id = parseInt(e.target.dataset.id);
        this.deleteItem(id);
      }
    });
  }

  deleteItem(id) {
    this.userData = this.userData.filter((book) => book.id !== id);
    localStorage.setItem('formdata', JSON.stringify(this.userData));
    this.renderBooks();
  }

  renderBooks() {
    let placeholder = '';
    this.userData.forEach((book) => {
      const backgroundColor = index % 2 === 0 ? 'white' : 'grey';
      placeholder += `
        <div class="book" style="background-color: ${backgroundColor};">
          <h3>"${book.title}" by ${book.author}</h3>
        </div>
        <button class="remove-btn" data-id="${book.id}">Remove</button>
        <hr>
      `;
    });
    this.content.innerHTML = placeholder;
  }

  fetchBooks() {
    this.renderBooks();
  }
}

const bookManager = new BookManager();