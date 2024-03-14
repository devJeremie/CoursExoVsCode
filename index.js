
function isPalindrome(string) {
     return string === string.split('').reverse().join('');
    }
    
    const userInput = prompt("Please enter a word:");
    if (isPalindrome(userInput)) {
      alert(`"${userInput}" is a palindrome.`);
    } else {
      console.log(`"${userInput}" is not a palindrome.`);
    }
/*--------------Feu tricolore--------------*/
let lights = document.querySelectorAll('.light');//selectionn eles éléments du dom avec la classe light et les stockent dans lights
let currentIndex = 0;//on initialise a zero, on l'utilisera pour suivre l'index de la lumière

function changeColor() {
    lights.forEach((light, index) => {//parcourt toutes les lulières stockées dans lights
        if (index === currentIndex) {//cela compare si l'index de la lumiere actulle est egale à l'index actuel si oui la lumiere est activée
            light.classList.add('light-' + light.classList[0]);//cela ajoute la classe light suivi du nom de la classe actuelle de la lumiere à la lumière actuelle
            light.style.display = 'block';//affiche la lumiere actuelle en prpriete de style sur block
        } else {
            light.classList.remove('light-' + light.classList[0]);//cela supprime la classe light suivi du nom de la classe actuelle de la lumiere de la lumière actuelle
            light.style.display = 'none';
        }
    });
    currentIndex++;//verifie si l'index actuel est supérieur ou egal al la longueur de la variable lights, si oui l'index est reinitialisé a zero
    if (currentIndex >= lights.length) {
        currentIndex = 0;
    }
}

setInterval(changeColor, 3000);//change de couleur toutes les 3secondes
/*----------Fin Feu Tricolore--------------*
/*------------------Modal------------------*/
const modale = document.getElementById("modale");
const ouvrirModal = document.getElementById("ouvrir-modal");
const fermerModale = document.querySelector(".fermer-modale");

ouvrirModal.addEventListener("click", () => {
  modale.style.display = "block";
});

fermerModale.addEventListener("click", () => {
  modale.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modale) {
    modale.style.display = "none";
  }
});
/*------------------Fin Modale------------------*/
/*--------------Classe Javascript----------------*/
class SommeNombres {
    constructor(listeNombres) {
      this.listeNombres = listeNombres;
    }
  
    calculerSomme() {
      let somme = 0;
      for (let nombre of this.listeNombres) {
        somme += nombre;
      }
      return somme;
    }
  
    afficherResultat() {
      const somme = this.calculerSomme();
      console.log(`La somme des nombres de la liste est : ${somme}`);
    }
  }
  
  // Utilisation de la classe
  const listeNombres = [1, 2, 3, 4, 5];
  const sommeNombres = new SommeNombres(listeNombres);
  sommeNombres.afficherResultat();
/*-----------Fin Classe-----------*/

/*------------Jeu aventurier-----------------*/

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
 class Sort {
    constructor ( firespell, icespell, waterspell, rockrain) {
        this.firespell = firespell;
        this.icespell = icespell;
        this.waterspell = waterspell;
        this.rockrain = rockrain;
    }
    decrire() {
        return `The ${this.firespell} and ${this.icespell} and ${this.waterspell} and ${this.rockrain}`;
    }
}
/*------------module personnage---------------*/
 class Personnage {
    constructor(nom, sante, force,titre) {
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
    constructor (nom, sante, force, xp, titre = 'Aventurier') {
        super(nom, sante, force, titre);
        this.xp = xp;
    }

    decrire() {
        return `${super.decrire()} et ${this.xp} points d'expérience`;
    }
}
 class Guerrier extends Personnage {
    constructor (nom, sante, force, xp, rage, titre = 'Guerrier') {
        super(nom, sante, force, titre)
        this.xp = xp;
        this.rage = rage;
    }
    decrire() {
        return `${super.decrire()} et ${this.xp} points d'expérience et ${this.rage} points de rage`; 
    }
}
 class Paladin extends Aventurier {
    constructor (nom, sante, force, xp, vertu, titre = 'Paladin') {
        super(nom, sante, force, xp, titre)
        this.vertu = vertu;
    }
    decrire() {
        return `${super.decrire()} et ${this.vertu} points de vertu`; 
    }
}
 class Mage extends Personnage {
    constructor (nom, sante, force, xp, mana, titre = 'Mage') {
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
    titre : guerrier.titre,
    sante: guerrier.sante,
    force: guerrier.force,
    xp: guerrier.xp,
    rage: guerrier.rage });

const perso3 = new Personnage('Galahad', 'Paladin', 1000, 100, 60, 50);
const paladin = new Paladin(perso3, 1000, 100, 60, 50);
console.log({ 
    nom: paladin.nom,
    titre : paladin.titre,
    sante: paladin.sante,
    force: paladin.force,
    xp: paladin.xp,
    vertu: paladin.vertu });

const perso4 = new Personnage('Flora', 'Mage', 1100, 120, 70, 90);
const mage = new Mage(perso4, 1100, 120, 70, 90);
console.log({ 
    nom: mage.nom,
    titre: mage.titre,
    sante: mage.sante,
    force: mage.force,
    xp: mage.xp,
    mana: mage.mana });
/*----------------------Fin jeux----------------*/