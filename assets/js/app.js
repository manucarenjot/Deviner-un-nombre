let fenetre = document.getElementById("window");
let text = document.getElementById("text");
let button = document.getElementById("submit");
let chances = document.getElementById("chances");

let reponse = Math.floor (Math.random() * 100) +1;
console.log(reponse)


let i = 0
while (i<10) {
    console.log(i)
    i++
}






button.addEventListener("click", function(){
    console.log('Boum');
    let test = document.createElement("p");
    test.innerHTML = text.value;
    test.style.backgroundColor = "white";
    test.style.width = "50%";
    test.style.textAlign = "center";
    fenetre.appendChild(test);

    if (parseInt(text.value)===reponse) {

        test.innerHTML = text.value + " | You win";
        test.style.backgroundColor = "green";
    }

    else if (parseInt(text.value) < reponse) {
        test.innerHTML = text.value + " ||  TON NOMBRE EST TROP PETIT QUEL DOMMAGE !";
        test.style.backgroundColor = "red";
    }

    else if (parseInt(text.value) > reponse) {
        test.innerHTML = text.value + " ||  TON NOMBRE EST TROP GRAND MALHEUREUX !";
        test.style.backgroundColor = "red";
        test.style.color = "white";
    }

    else if (parseInt(text.value) !== reponse) {
        test.innerHTML = text.value + " ||  ON A DIT DES NOMBRE PAS DES LETTRES, TU ME FAIS DOUTER DE TES CAPACITE !";
        test.style.backgroundColor = "red";
        test.style.color = "white";
    }



});


