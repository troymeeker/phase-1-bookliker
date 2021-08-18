const baseURL = 'http://localhost:3000/books'
const list = document.querySelector('#list')
const showPanel = document.querySelector('show-panel')

document.addEventListener("DOMContentLoaded", () => {
   
    fetch(baseURL)
    .then(resp => resp.json())
    .then(books => listBooks(books))

function getOneBook(id){
 
 return fetch( baseURL + `/${id}`)
 .then(resp => resp.json())
 
}

  function listBooks(books){  
       books.forEach(book => bookLi(book))
  }

 function bookLi(book){
  const li = document.createElement('li')
  li.dataset.bookId = book.id
  li.textContent =  book.title
  li.addEventListener('click', showBook)
  list.append(li)
 }

 function showBook(e){
     const id = e.target.dataset.bookId
     console.log(e.target)
     
     getOneBook(id)
      .then(book => {
          const bookCard =  `
          <div>
          <img src="${book.img_url}"
          <h1>${book.title}</h1>
          <h2>${book.subtitle}</h2>
          <p>${book.author}</p>
          <p>${book.description}</p>
          <ul>
          
          </ul>

          </div>
          `
      })

 }




    // fetch('/likes', {
    //     method:'PATCH', 
    //     //for likes
    // })

});
