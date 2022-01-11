function plusGrandNombre(a, b) {
  console.log("a (resultat) : " + a);
  console.log("b (item) : " + b);
  console.log("_______________");
  if (a >= b) {
    return a;
  } else if (b >= a) {
    return b;
  }
}

function plusGrandNombreDuTableau(monTableau) {
  let resultat = null;
  for (let item of monTableau) {
    resultat = plusGrandNombre(resultat, item);
  }
  return resultat;
}

let array = [45, 12, 8, 7, 65, 92, 2];

console.log("_______________");
console.log("PLUS GRAND NOMBRE DU TABLEAU");
console.log("_______________");
console.log(plusGrandNombreDuTableau(array));

function plusGrandNombreDuTableauRecursif(monTableau, resultat) {
  for (let item of monTableau) {
    if (item.length) {
      resultat = plusGrandNombreDuTableauRecursif(item, resultat);
    } else {
      resultat = plusGrandNombre(resultat, item);
    }
  }
  return resultat;
}

console.log("_______________");
console.log("PLUS GRAND NOMBRE DU TABLEAU RÉCURSIF");
console.log("_______________");
let array1 = [[2, [4, 8, [112, 58]]], 36, 4, [89, 12], 2];

console.log(plusGrandNombreDuTableauRecursif(array1, null));
