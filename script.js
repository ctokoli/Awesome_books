const button = document.querySelector('button');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const content = document.querySelector('.books');



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
                <div>
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                </div>
                <button onclick="deleteItem('${book.id}')">Remove</button>
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
