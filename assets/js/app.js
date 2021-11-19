let fenetre = document.getElementById("window");
let text = document.getElementById("text");
let button = document.getElementById("submit");
let chances = document.getElementById("chances");
let dialogue = document.getElementById("erreur")
let reponse = Math.floor(Math.random() * 100) + 1;
console.log(reponse)


let i = 0


function clic() {
    if (i < 11) {
        console.log('Boum');
        let test = document.createElement("p");
        test.innerHTML = text.value;
        test.style.backgroundColor = "white";
        test.style.width = "50%";
        test.style.textAlign = "center";
        fenetre.appendChild(test);
        i++

        if (parseInt(text.value) === reponse) {

            test.innerHTML = text.value + " | You win";
            test.style.backgroundColor = "green";
        } else if (parseInt(text.value) < reponse) {

            test.innerHTML = text.value + " ||  TON NOMBRE EST TROP PETIT QUEL DOMMAGE !";
            test.style.backgroundColor = "red";
        } else if (parseInt(text.value) > reponse) {
            test.innerHTML = text.value + " ||  TON NOMBRE EST TROP GRAND MALHEUREUX !";
            test.style.backgroundColor = "red";
            test.style.color = "white";
        } else if (parseInt(text.value) !== reponse) {
            test.innerHTML = text.value + " ||  ON A DIT DES NOMBRE PAS DES LETTRES, TU ME FAIS DOUTER DE TES CAPACITE !";
            test.style.backgroundColor = "red";
            test.style.color = "white";
        }
        if (i===11) {
            test.innerHTML = text.value + " || FELICITATION ! TU AS PERDU ! ";
            test.style.backgroundColor = "red";
            test.style.color = "white";
        }


    }
}


    button.addEventListener("click", clic);
