let fenetre = document.getElementById("window");
let text = document.getElementById("text");
let button = document.getElementById("submit");
let chances = document.getElementById("chances");
let dialogue = document.getElementById("erreur");
let number = document.getElementById("number");
let reponse = Math.floor(Math.random() * 100) + 1;
let tentative = 10
console.log(reponse)


let i = 0


function clic() {
    if (i < 11) {


        i++
        if (tentative > 0) {
            console.log(tentative);
            tentative--;
        }


        if (parseInt(text.value) === reponse) {

            dialogue.innerHTML = "C'est gagné ! OUI!";
            dialogue.style.color = "rgba(0,255,4,0.7)";
            dialogue.style.fontSize = "2.3rem";
            dialogue.style.textAlign = "center";
            dialogue.style.backgroundColor = "rgba(63,115,140,0.7)";
            number.innerText += text.value + " | ";
            number.style.fontSize = "1rem";
            number.style.color = "rgba(0,255,4,0.7)";
            chances.innerHTML = "Il te reste " + tentative + " chances";
            fenetre.style.borderColor = "green";

        } else if (parseInt(text.value) < reponse) {
            dialogue.innerHTML = " TON NOMBRE EST TROP PETIT! CHEH !";
            dialogue.style.color = "red";
            dialogue.style.fontSize = "1.3rem";
            dialogue.style.textAlign = "center";
            dialogue.style.backgroundColor = "rgba(91,255,255,0.7)";
            number.innerText += text.value + " | ";
            number.style.fontSize = "1rem";
            chances.innerHTML = "Il te reste " + tentative + " chances";

        } else if (parseInt(text.value) > reponse) {
            dialogue.innerHTML = "TON NOMBRE EST TROP GRAND MALHEUREUX !";
            dialogue.style.color = "red";
            dialogue.style.fontSize = "1.3rem";
            dialogue.style.textAlign = "center";
            dialogue.style.backgroundColor = "rgba(91,255,255,0.7)";
            number.innerText += text.value + " | ";
            number.style.fontSize = "1rem";
            chances.innerHTML = "Il te reste " + tentative + " chances";

        } else if (parseInt(text.value) !== reponse) {
            dialogue.innerHTML = "  ON A DIT UN NOMBRE, TU ME FAIS DOUTER DE TES CAPACITÈS !";
            dialogue.style.color = "red";
            dialogue.style.fontSize = "1.3rem";
            dialogue.style.textAlign = "center";
            dialogue.style.backgroundColor = "rgba(100,215,215,0.7)";
            number.innerText += text.value + " | ";
            number.style.fontSize = "1rem";
            chances.innerHTML = "Il te reste " + tentative + " chances";

        }
        if (i === 11) {
            dialogue.innerHTML = "  FELICITATION ! TU AS PERDU ! " + "BOUM !";
            dialogue.style.color = "red";
            dialogue.style.fontSize = "1.3rem";
            dialogue.style.textAlign = "center";
            dialogue.style.backgroundColor = "rgba(91,255,255,0.7)";
            fenetre.style.animationName = "error";
            fenetre.style.animationDuration = "0.5s";
            fenetre.style.borderColor = "red";
            button.style.borderColor = "red";
        }

    }
}

/*
function for click the buton
 */
button.addEventListener("click", clic);


window.onkeydown = function(e) {
    var key = e.key;
    switch (key) {
        case 'Enter':
            clic()
            break;
    }
}