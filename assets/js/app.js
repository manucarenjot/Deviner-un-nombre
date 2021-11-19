let fenetre = document.getElementById("window");
let text = document.getElementById("text");
let button = document.getElementById("submit");

let i;
let reponse = Math.floor (Math.random() * 100) +1;
console.log(reponse)





button.addEventListener("click", function(){
    console.log('Boum');
    for (i=0; i < 10; i++);
    let test = document.createElement("p");
    test.innerHTML = text.value;
    test.style.backgroundColor = "white";
    test.style.width = "50%";
    test.style.textAlign = "center";
    fenetre.appendChild(test);

    if (parseInt(text.value)===reponse) {

        test.innerHTML = text.value + " | You win";
    }

    else if (parseInt(text.value) < reponse) {
        test.innerHTML = text.value + " ||  TON NOMBRE EST TROP PETIT QUEL DOMMAGE !";
    }

    else if (parseInt(text.value) > reponse) {
        test.innerHTML = text.value + " ||  TON NOMBRE EST TROP GRAND MALHEUREUX !";
    }

    else if (parseInt(text.value) !== reponse) {
        test.innerHTML = text.value + " ||  ON A DIT DES NOMBRE PAS DES LETTRES, TU ME FAIS DOUTER DE TES CAPACITE !";
    }


});


