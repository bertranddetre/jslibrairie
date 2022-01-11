/* On récupère les arguments passés dans l'url (ici bookid) */

let params = window.location.search; 
let bookIdUrl = params.slice(8);
let currentBook = {};

/* On insère dans la page html les infos du livre dont on a récupéré l'id */
for(book of books) {
    console.log(book.id);
    if(book.id === bookIdUrl) {
        currentBook = book;
        break;
    }
}

let htmlContainer = document.getElementById("book-article");
insertBookInfosInArticlePage(currentBook, htmlContainer);