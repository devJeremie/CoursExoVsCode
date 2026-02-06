/*-------Exercice 1 --------*/
// function isPair(nbr) {
//     return nbr % 2 === 0
// }
// console.log(isPair(4));
// console.log(isPair(7));
// console.log(isPair(12));
/*------Fin exercice 1------*/
// function isPalindrome(string) {
//     return string === string.split('').reverse().join('');
// }

// const userInput = prompt("Please enter a word:");
// if (isPalindrome(userInput)) {
//     alert(`"${userInput}" is a palindrome.`);
// } else {
//     console.log(`"${userInput}" is not a palindrome.`);
// }
/*--------------Feu tricolore--------------*/
// let lights = document.querySelectorAll('.light');//selectionne les éléments du dom avec la classe light et les stockent dans lights
// let currentIndex = 0;//on initialise a zero, on l'utilisera pour suivre l'index de la lumière

// function changeColor() {
//     lights.forEach((light, index) => {//parcourt toutes les lumières stockées dans lights
//         if (index === currentIndex) {//cela compare si l'index de la lumiere actulle est egale à l'index actuel si oui la lumiere est activée
//             light.classList.add('light-' + light.classList[0]);//cela ajoute la classe light suivi du nom de la classe actuelle de la lumiere à la lumière actuelle
//             light.style.display = 'block';//affiche la lumiere actuelle en propriete de style sur block
//         } else {
//             light.classList.remove('light-' + light.classList[0]);//cela supprime la classe light suivi du nom de la classe actuelle de la lumiere de la lumière actuelle
//             light.style.display = 'none';
//         }
//     });
//     currentIndex++;//verifie si l'index actuel est supérieur ou egal al la longueur de la variable lights, si oui l'index est reinitialisé a zero
//     if (currentIndex >= lights.length) {
//         currentIndex = 0;
//     }
// }

// setInterval(changeColor, 3000);//change de couleur toutes les 3secondes
/*-------------Avec les boites differentes qui s'allument----------------*/
let lights = document.querySelectorAll('.light');
let currentIndex = 0;

function changeColor() {
    lights.forEach((light, index) => {
        if (index === currentIndex) {
            // Allume la bonne couleur de cette div
            light.classList.add('active');
            light.style.opacity = '1';
        } else {
            // Éteint les autres
            light.classList.remove('active');
            light.style.opacity = '0.3';
        }
    });
    currentIndex++;
    if (currentIndex >= lights.length) {
        currentIndex = 0;
    }
}
setInterval(changeColor, 3000);



/*-----------avec boucle for---------------*/
// let lights = document.querySelectorAll('.light');
// let currentIndex = 0;

// function changeColor() {
//     for (let i = 0; i < lights.length; i++) {
//         if (i === currentIndex) {
//             lights[i].classList.add('light-' + lights[i].classList[0]);
//             lights[i].style.display = 'block';
//         } else {
//             lights[i].classList.remove('light-' + lights[i].classList[0]);
//             lights[i].style.display = 'none';
//         }
//     }
//     currentIndex++;
//     if (currentIndex >= lights.length) {
//         currentIndex = 0;
//     }
// }

// setInterval(changeColor, 3000);
/*------------Plus simple avec classe active-------------*/

// // On sélectionne tous les éléments du DOM qui ont la classe 'light'
// let lights = document.querySelectorAll('.light');
// // On initialise l'index courant à 0 (c'est la lumière qui sera allumée en premier)
// let currentIndex = 0;

// // Fonction qui change la couleur du feu tricolore
// function changeColor() {
//     /**
//      * ÉTAPE 1 : RÉINITIALISATION (Nettoyage)
//      * Avant d'allumer une nouvelle lumière, on doit s'assurer que toutes les autres
//      * sont éteintes. On utilise une boucle pour parcourir chaque élément.
//      */
//     for (let i = 0; i < lights.length; i++) {
//         // On retire la classe 'active' à chaque lumière pour les éteindre
//         lights[i].classList.remove('active');
//     }
//     /**
//      * ÉTAPE 2 : ALLUMAGE
//      * On accède à la lumière cible via son index et on lui ajoute la classe 'active'.
//      */
//     lights[currentIndex].classList.add('active');
//     /**
//      * ÉTAPE 3 : GESTION DE LA SÉQUENCE
//      * On incrémente l'index pour préparer le prochain tour.
//      */
//     currentIndex++;
//         /**
//      * ÉTAPE 4 : BOUCLE
//      *Si on a dépassé la dernière lumière, on revient à la première (boucle)
//      */
//     if (currentIndex >= lights.length) {
//         currentIndex = 0;
//     }
// }
// /**
//  * AUTOMATISATION
//  * La méthode setInterval exécute la fonction 'changeColor' de manière répétée
//  * à un intervalle fixe de 3000 millisecondes (soit 3 secondes).
//  */
// setInterval(changeColor, 3000);

/*----------Fin Feu Tricolore--------------*/
// /*------------------Modal------------------*/
// const modale = document.getElementById("modale");
// const ouvrirModal = document.getElementById("ouvrir-modal");
// const fermerModale = document.querySelector(".fermer-modale");

// ouvrirModal.addEventListener("click", () => {
//     modale.style.display = "block";
// });

// fermerModale.addEventListener("click", () => {
//     modale.style.display = "none";
// });

// window.addEventListener("click", (event) => {
//     if (event.target === modale) {
//         modale.style.display = "none";
//     }
// });
/*------------Plus simple---------------*/
// const modale = document.getElementById("modale");
// document.getElementById("ouvrir-modal").onclick = () => modale.classList.add("active");
// document.querySelector(".fermer-modale").onclick = () => modale.classList.remove("active");
// window.onclick = (e) => {
//     if (e.target === modale) modale.classList.remove("active");
// };
/*------------------Fin Modale------------------*/
/*--------------Classe Javascript----------------*/
class SommeNombres {
    constructor(listeNombres) {
        this.numberList = listeNombres;
    }

    addSomme() {
        let somme = 0;
        for (let nombre of this.numberList) {
            somme+= nombre;
            //somme + nombre = somme;
            // 0     + 1      = 1
        }
        return somme;
    }
    
    afficherResultat() {
        const result = this.addSomme();
        console.log(`La somme des nombres de la liste est : ${result}`);
    }
}

// Utilisation de la classe
const listeNombres = [1, 2, 3, 4, 5];
const resultNumbers = new SommeNombres(listeNombres);
resultNumbers.afficherResultat();
let secondList = [256, 896,417,239,9674];
let resultSecond = new SommeNombres(secondList);
resultSecond.afficherResultat();

/*-----------Fin Classe-----------*/


/*------------Jeu aventurier-----------------*/
// Les paramètres sont - ils obligatoires ?

//     Non, ils ne sont pas obligatoires: tu peux créer un objet sans arguments.

//     Mais : si tu veux que les propriétés aient des valeurs précises, tu dois les fournir lors de la création de l’objet.

/*----------------Module combat--------------*/
class Arme {
    constructor(hammer, shield, sword) {
        this.hammer = hammer;
        this.shield = shield;
        this.sword = sword;
    }
    decrire() {
        return ` A ${this.hammer} and a ${this.shield} and a ${this.sword}`;
    }
}
// class Arme {
//     constructor(hammer= 'no hammer', shield='no shield', sword='sword') {
//         this.hammer = hammer;
//         this.shield = shield;
//         this.sword = sword;
//     }
//     decrire() {
//         return ` A ${this.hammer} and a ${this.shield} and a ${this.sword}`;
//     }
// }
// Tu connais la blague du gars qui n'a pas vérouillé son écran ?
class Sort {
    constructor(firespell, icespell, waterspell, rockrain) {
        this.firespell = firespell;
        this.icespell = icespell;
        this.waterspell = waterspell;
        this.rockrain = rockrain;
    }
    decrire() {
        return `The ${this.firespell} and ${this.icespell} and ${this.waterspell} and ${this.rockrain}`;
    }
}
let weapon1 = new Arme();
console.log(weapon1.decrire());

let weapon2 = new Arme("gros marteau", "grand bouclier");
console.log(weapon2.decrire());

let weapon3 = new Arme("gros marteau", "grand bouclier", "épée magique");
console.log(weapon3.decrire());


/*------------module personnage---------------*/
class Personnage {
    constructor(nom, sante, force, titre) {
        this.nom = nom;
        this.titre = titre;
        this.sante = sante;
        this.force = force
    }

    decrire() {
        return `${this.nom} a ${this.sante} points de vie et ${this.force} en force`;
    }
}
class Aventurier extends Personnage {
    constructor(nom, sante, force, xp, titre = 'Aventurier') {
        super(nom, sante, force, titre);
        this.xp = xp;
    }

    decrire() {
        return `${super.decrire()} et ${this.xp} points d'expérience`;
    }
}
class Guerrier extends Personnage {
    constructor(nom, sante, force, xp, rage, titre = 'Guerrier') {
        super(nom, sante, force, titre)
        this.xp = xp;
        this.rage = rage;
    }
    decrire() {
        return `${super.decrire()} et ${this.xp} points d'expérience et ${this.rage} points de rage`;
    }
}
class Paladin extends Aventurier {
    constructor(nom, sante, force, xp, vertu, titre = 'Paladin') {
        super(nom, sante, force, xp, titre)
        this.vertu = vertu;
    }
    decrire() {
        return `${super.decrire()} et ${this.vertu} points de vertu`;
    }
}
class Mage extends Personnage {
    constructor(nom, sante, force, xp, mana, titre = 'Mage') {
        super(nom, sante, force, titre)
        this.xp = xp;
        this.mana = mana;
    }
    decrire() {
        return `${super.decrire()} et ${this.xp} points d'expérience et ${this.mana} points de mana`;
    }
}
/*--------------Jeu---------------*/
//console.log(aventurier.decrire());

const arme = new Arme('hammer', 'shield', 'sword');
const sort = new Sort('firespell', 'icespell', 'waterspell', 'rockrain');
console.log(arme.decrire());
console.log(sort.decrire());

const perso1 = new Personnage('Jecoq', 'Aventurier', 1000, 150, 25);
const aventurier = new Aventurier(perso1, 1000, 150, 25);
console.log({
    nom: aventurier.nom,
    titre: aventurier.titre,
    sante: aventurier.sante,
    force: aventurier.force,
    xp: aventurier.xp
});

const perso2 = new Personnage('Sigfrid', 'Guerrier', 1200, 100, 80, 70);
const guerrier = new Guerrier(perso2, 1200, 100, 80, 70);
console.log({
    nom: guerrier.nom,
    titre: guerrier.titre,
    sante: guerrier.sante,
    force: guerrier.force,
    xp: guerrier.xp,
    rage: guerrier.rage
});

const perso3 = new Personnage('Galahad', 'Paladin', 1000, 100, 60, 50);
const paladin = new Paladin(perso3, 1000, 100, 60, 50);
console.log({
    nom: paladin.nom,
    titre: paladin.titre,
    sante: paladin.sante,
    force: paladin.force,
    xp: paladin.xp,
    vertu: paladin.vertu
});

const perso4 = new Personnage('Flora', 'Mage', 1100, 120, 70, 90);
const mage = new Mage(perso4, 1100, 120, 70, 90);
console.log({
    nom: mage.nom,
    titre: mage.titre,
    sante: mage.sante,
    force: mage.force,
    xp: mage.xp,
    mana: mage.mana
});
/*----------------------Fin jeux----------------*/