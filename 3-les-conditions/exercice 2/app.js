let nombre1 = prompt("Quelle est ta date de naissance ?");
let nombre2 = prompt("Tu es né quand ?");

if (nombre1 > nombre2) {
    console.log("Le nombre 1 est plus grand que le nombre 2");
} else if (nombre1 < nombre2) {
    console.log("Le nombre 1 est plus petit que le nombre 2");
} else {
    console.log("Les deux nombres sont égaux");
}
