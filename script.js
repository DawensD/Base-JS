// Création éelement html avec javascript DOM

const titre = document.createElement("h1")
titre.textContent = "Bonjour, je suis Dawens";

const main = document.querySelector("main")
main.appendChild(titre);

// possibilité d'ajouter des codes html dans une balise et l'integrer dans un conteneur

const divCarte = document.createElement("div")
divCarte.classList.add("carte")
const age = 20;

const balises = `

<h3> <i> Bienvue sur mon site, j'ai ${age} ans </i> </h3 >

`
divCarte.innerHTML = balises; //
main.appendChild(divCarte);

// Sélection Multiple (titres, iamges etc ...)

const titres = document.querySelectorAll("h2")

let nombre = 0;

titres.forEach( (t) =>{
    nombre += 1;
    t.textContent = `Objet n° ${nombre}`;
});

// Ajout des Evenements (evenements javascript sur internet)
// Cas 1 : Double Clique

const btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
    alert("objet acheté"); //notification "objet acheté"
});

// Cas 2 : Formulaire (le contenue ecrit apparait en direct)
const input = document.querySelector(".nom");
input.addEventListener("keyup", (e) => {
    console.log(e.target.value);

    titres.forEach( (t) =>{
        t.textContent = `Vous écrivez : ${e.target.value}`;
    });    
});