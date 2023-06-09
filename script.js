const button = document.querySelector('button');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const content = document.querySelector('.books');
const list = document.querySelector('.list');
const add = document.querySelector('.add');
const contact = document.querySelector('.contact');
const books = document.querySelector('.books');
const form = document.querySelector('.form-item');


let userData = JSON.parse(localStorage.getItem('formdata'));
let count = 0;
if (userData != undefined) {
  userData.reverse();
  count = userData.length;
} else {
  userData = [];
  localStorage.setItem('formdata', JSON.stringify(userData));
}

/* eslint no-unused-vars: "off" */ /* eslint eqeqeq: "off" */
function deleteItem(id) {
  // console.log(id);
  const filteredArray = userData.filter((e) => e.id != id);
  localStorage.setItem('formdata', JSON.stringify(filteredArray));
}

function fetchBooks() {
  let placeholder = '';
  userData.forEach((book) => {
    placeholder += `
                <div class="item">                 
                <p>"${book.title}" by ${book.author}</p>
                <button onclick="deleteItem('${book.id}')">Remove</button>
                </div> 
                <hr>
            `;
  });
  content.innerHTML = placeholder;

  button.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = {
      id: count += 1,
      title: title.value,
      author: author.value,
    };
    // console.log(userData);
    userData.push(formData);
    // console.log(userData);
    localStorage.setItem('formdata', JSON.stringify(userData));
  });
}

fetchBooks();

add.addEventListener('click', () => {
  books.classList.add('hide');
  form.classList.add('show');
});
