// Création d'un élément HTML avec le DOM
const titre = document.createElement("h1");
titre.textContent = "Bonjour, je suis Dawens";

// Sélection de l'élément <main> et ajout du titre
const main = document.querySelector("main");
main.appendChild(titre);

// Création d'un conteneur div pour afficher des informations dynamiques
const divCarte = document.createElement("div");
divCarte.classList.add("carte");
const age = 20;

// Ajout de contenu HTML dans la div créée
const balises = `
<h3> <i> Bienvenue sur mon site, j'ai ${age} ans </i> </h3>
`;
divCarte.innerHTML = balises;
main.appendChild(divCarte);

// Sélection multiple d'éléments <h2>
const titres = document.querySelectorAll("h2");
let nombre = 0;

titres.forEach((t) => {
    nombre += 1;
    t.textContent = `Objet n° ${nombre}`;
});

// Ajout d'événements interactifs
// Cas 1 : Clic sur le bouton "Acheter"
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    alert("objet acheté"); // Notification indiquant un achat
});

// Cas 2 : Mise à jour dynamique des titres en fonction du champ de texte
const input = document.querySelector(".nom");
input.addEventListener("keyup", (e) => {
    console.log(e.target.value);
    
    titres.forEach((t) => {
        t.textContent = `Vous écrivez : ${e.target.value}`;
    });
});
