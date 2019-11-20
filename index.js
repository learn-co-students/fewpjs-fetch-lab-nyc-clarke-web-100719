function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

function renderFifthBook(json) {
  const main = document.querySelector('main')
  book = json[4]
  const h2 = document.createElement('h2')
  h2.innerHTML = `<h2>${book.name}</h2>`
  main.appendChild(h2)
}

function renderNumberOfPages(json) {
  const main = document.querySelector('main')
  let totalPages = 0;
  json.forEach(book => {
    totalPages += book["numberOfPages"]
  })
  const h2 = document.createElement('h2')
  h2.innerHTML = `<h2>${totalPages}</h2>`
  main.appendChild(h2)

}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
})
