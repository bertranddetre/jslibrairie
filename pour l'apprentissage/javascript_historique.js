// Commentaire sur une ligne
/* Commentaire
sur plusieurs
lignes */

/* ------------------- */
/* 1. Créer un livre avec des variables (cours 2) */
/* ------------------- */
let book;
let title = "Les Misérables";
let author = "Victor Hugo";
let price = 14.95;
let category = "Drame";
let releaseDate = new Date("1997,05,23");
let nbSales = 345;

/* ------------------- */
/* 2. Créer un livre avec des objets et tableaux (cours 3) */
/* ------------------- */
// Nous avons créé, dans le fichier books.js, un tableaux d'objets avec les livres
console.log("BOOK LIST");
console.log(books);

// Tableau d'objet pour le panier
let cart = [
  { id: "0", qtt: 1 },
  { id: "1", qtt: 1 },
];
console.log("Panier :");
console.log(cart);
let totalPrice; // prix total du panier à stocker dans cette variable

/* ------------------- */
/* 3. Conditions (cours 4) */
/* ------------------- */

// Gestion du stock
if (books[0].nbStock === 0) {
  console.log("Rupture de stock");
} else {
  console.log(
    "Il reste " + books[0].nbStock + " exemplaires de " + books[0].title
  );
}

// Sorties récentes
if (books[0].releaseDate > books[1].releaseDate) {
  console.log(books[0].title + " est le plus récent des deux livres");
} else {
  console.log(books[1].title + " est le plus récent des deux livres");
}

// Meilleures ventes
if (books[0].nbSales > books[1].nbSales) {
  console.log(books[0].title + " a été le plus vendu");
} else {
  console.log(books[1].title + " a été le plus vendu");
}

// Panier : augmenter la quantité d'un article
if (cart[1]) {
  // équivaut à cart[1] === true
  console.log("Quantité avant ajout : " + cart[1].qtt);
  cart[1].qtt++; // on incrémente cart[1].qtt de 1
  // est égal à : cart[1].qtt = cart[1].qtt + 1;
  console.log("Quantité après ajout : " + cart[1].qtt);
}

/* ------------------- */
/* 4. Boucles (cours 5) */
/* ------------------- */

// Classement des meilleures ventes (old)
/*let bestSales1 = [...books];

for (let i = 0; i < bestSales1.length; i++) {
  for (let j = 0; j < bestSales1.length - i - 1; j++) {
    if (bestSales1[j].nbSales < bestSales1[j + 1].nbSales) {
      let tmp = bestSales1[j];
      bestSales1[j] = bestSales1[j + 1];
      bestSales1[j + 1] = tmp;
    }
  }
}
console.log("Par meilleures ventes :");
console.log(bestSales1);*/

// Classement des sorties recentes
let recentOrder = [...books];
for (let i = 0; i < recentOrder.length; i++) {
  for (let j = 0; j < recentOrder.length - i - 1; j++) {
    if (recentOrder[j].releaseDate < recentOrder[j + 1].releaseDate) {
      let tmp = recentOrder[j];
      recentOrder[j] = recentOrder[j + 1];
      recentOrder[j + 1] = tmp;
    }
  }
}
console.log("Du plus recent au plus ancien:");
console.log(recentOrder);

//Affichage des prix croissants decroissant
let priceOrder = [...books];
for (let i = 0; i < priceOrder.length; i++) {
  for (let j = 0; j < priceOrder.length - i - 1; j++) {
    if (priceOrder[j].price > priceOrder[j + 1].price) {
      let tmp = priceOrder[j];
      priceOrder[j] = priceOrder[j + 1];
      priceOrder[j + 1] = tmp;
    }
  }
}
console.log("Par prix croissant :");
console.log(priceOrder);

/* ------------------- */
/* 5. Fonctions (cours 6) */
/* ------------------- */

// à l'ancienne
function lastestReleases_old() {}
// ES6
const lastestReleases_new = (books) => {};

/* La manière la + courte (pour l'instant) de trier par sorties récentes */
let bestSales = [...books];
function sortBestSales(a, b) {
  return a.nbSales - b.nbSales;
}
const bestSalesBooks = bestSales.sort(sortBestSales);
bestSalesBooks.reverse();

const lastestReleases = (bestSalesBooks) => {
  // afficher les sorties récentes sur la page d'accueil
};

const latestReleases2 = books.sort((a, b) => b.releaseDate - a.releaseDate);

/* Spread operator exemple */

let tableau1 = [1,2,3];
let tableau2 = [...tableau1];
// != tableau2 = tableau1;

let tableau3 = [...tableau1, 4,5,6];
// tableau 3 = [1, 2, 3, 4, 5, 6]
// tableau 3 != [[1, 2, 3], 4, 5, 6]




/* Code Jonathan */
let library = [...books];
let library2 = [...books];

const sortBestSales = library.sort((a, b) => b.nbSales - a.nbSales);
console.log(sortBestSales);

const sortReleases = library2.sort((a, b) => b.releaseDate - a.releaseDate);
console.log(sortReleases);