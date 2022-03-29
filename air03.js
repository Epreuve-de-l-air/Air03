#! node

// Script qui insert un entier au bon endroit dans une liste d'entier triées

// Gestion d'erreur
let arg = process.argv;
arg.splice(0, 2);
const liste = arg.map((num) => Number(num));

if (liste.length < 3) {
  console.log(
    "Veuillez indiquer au moins 3 entiers naturels au script. Les premiers représentent une liste triée et le dernier un entier à introduire dans la liste"
  );
  return;
}
for (let a = 0; a < liste.length; a++) {
  if (liste[a] % 1 !== 0) {
    console.log(
      "Veuillez indiquer seulement des entiers naturel au script. Exemple : node air03.js 1 2 3 5 4 "
    );
    return;
  }
}
for (let b = 1; b < liste.length - 1; b++) {
  if (liste[b] < liste[b - 1]) {
    console.log("La liste d'entier n'est pas tiée par ordre croissant.");
    return;
  }
}

// Parsing
const intenger = liste.pop();
const intenger_list = liste;

// Function / Résolution du problème
const insertion = (intenger_list, intenger) => {
  for (let i = 0; i < intenger_list.length; i++) {
    if (intenger < intenger_list[i]) {
      intenger_list.splice(i, 0, intenger);
      return intenger_list;
    }
  }
  intenger_list.push(intenger);
  return intenger_list;
};
// Affichage

console.log(insertion(intenger_list, intenger));
