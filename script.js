const button = document.querySelector('button');
let title = document.querySelector('.title');
let author = document.querySelector('.author');
const content = document.querySelector('.books');


const userData = JSON.parse(localStorage.getItem('formdata'));
console.log(userData);

//const result = [];

function fetchBooks() {
    let response =  fetch('books.json').then((response) => response.json()).then((future) => {
        const result  = future.books;
        button.addEventListener('click', (e) => {
            e.preventDefault();
            let formData = {
                title: title.value,
                author: author.value
            }
            //console.log(formData);
            const savedata = result.push(formData);
            console.log(result);
            localStorage.setItem('formdata', JSON.stringify(result));
        });

  });
    
}

fetchBooks();
 

 





