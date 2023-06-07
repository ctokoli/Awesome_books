const button = document.querySelector('button');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const content = document.querySelector('.books');

const userData = JSON.parse(localStorage.getItem('formdata')).reverse();
let count = userData.length;

/* eslint no-unused-vars: "off" */
function deleteItem(author) {
  const filteredArray = userData.filter((e) => e.author !== author);
  localStorage.setItem('formdata', JSON.stringify(filteredArray));
}

function fetchBooks() {
  let placeholder = '';
  userData.forEach((book) => {
    placeholder += `
                <div>
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                </div>
                <button onclick="deleteItem('${book.author}')">Remove</button>
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
