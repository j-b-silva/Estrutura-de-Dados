function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('Sapiens', 570, '978-85-7522-553-0');

console.log(book.title);
book.title = 'Sapiens 2015';
console.log(book.title);
console.log('Este livro possui: ' +book.pages + ' páginas.');

