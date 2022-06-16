// creation des élements
let h1 = document.createElement("h1")
let p = document.createElement("p")
let newInput = document.createElement("input")
let newBtn1 = document.createElement("button")

// génèrer un chiffre aléatoire
// Recuperer la valeur dans l'input lors du click btn
// Comparer le chiffre de l'input et le chiffre random
// Bonus: Ajouter le focus ,Reset = et le Keypress enter.
// Nombre de tentative et systeme de vie, check la valeur en entrée !=NULL (  0 < input > 100)  

h1.innerHTML = "Guess Members";
p.innerHTML= "";


// Variable body = document.body
let body = document.body;


// Gestion des Enfants par rapport au Body
body.appendChild(h1)
body.appendChild(p)
