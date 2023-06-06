const button = document.querySelector('button');
let title = document.querySelector('.title');
let author = document.querySelector('.author');
const content = document.querySelector('.books');

let userData = JSON.parse(localStorage.getItem('formdata')).reverse();
let count = userData.length;
console.log(userData);
console.log(count);


function deleteItem(author) {
    let filteredArray = userData.filter( e => e.author !== author)
    console.log(filteredArray);
  localStorage.setItem('formdata', JSON.stringify(filteredArray));
}

function fetchBooks() {
        let placeholder = '';
        userData.forEach((book, index) => {
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
            let formData = {
                id: count +=1,
                title: title.value,
                author: author.value
            };
            //console.log(userData);
            userData.push(formData);
            //console.log(userData);
            localStorage.setItem('formdata', JSON.stringify(userData));
        });
}

fetchBooks();
 

 





