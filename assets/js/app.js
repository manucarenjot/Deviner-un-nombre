let fenetre = document.getElementById("window");
let text = document.getElementById("text");
let button = document.getElementById("submit");
let chances = document.getElementById("chances");
let dialogue = document.getElementById("erreur");
let number = document.getElementById("les-nombres");
let reponse = Math.floor(Math.random() * 100) + 1;
console.log(reponse)


let i = 0


function clic() {
    if (i < 11) {
        console.log('Boum');


        i++

        if (parseInt(text.value) === reponse) {

            dialogue.innerHTML ="C'est gagné ! OUI!";
            dialogue.style.color = "rgba(0,255,4,0.7)";
            dialogue.style.fontSize = "2.3rem"
            dialogue.style.textAlign = "center"
            dialogue.style.backgroundColor = "rgba(63,115,140,0.7)"
        } else if (parseInt(text.value) < reponse) {

           dialogue.innerHTML = text.value + " ||  TON NOMBRE EST TROP PETIT QUEL DOMMAGE !";
            dialogue.style.backgroundColor = "red";
            let nombre =document.createElement("p");
            number.append(nombre);
            nombre.innerHTML = text.value
        } else if (parseInt(text.value) > reponse) {
            dialogue.innerHTML ="TON NOMBRE EST TROP GRAND MALHEUREUX !";
            dialogue.style.color = "red";
            dialogue.style.fontSize = "1.3rem"
            dialogue.style.textAlign = "center"
            dialogue.style.backgroundColor = "rgba(91,255,255,0.7)"
        } else if (parseInt(text.value) !== reponse) {
            dialogue.innerHTML = "  ON A DIT DES NOMBRE PAS DES LETTRES, TU ME FAIS DOUTER DE TES CAPACITE !";
            dialogue.style.color = "red";
            dialogue.style.fontSize = "1.3rem"
            dialogue.style.textAlign = "center"
            dialogue.style.backgroundColor = "rgba(100,215,215,0.7)"
        }
        if (i===11) {
            dialogue.innerHTML ="  FELICITATION ! TU AS PERDU ! ";
            dialogue.style.color = "red";
            dialogue.style.fontSize = "1.3rem"
            dialogue.style.textAlign = "center"
            dialogue.style.backgroundColor = "rgba(91,255,255,0.7)"
        }


    }
}


    button.addEventListener("click", clic);
